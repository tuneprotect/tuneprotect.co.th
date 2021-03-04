<?php


namespace App\Http\Controllers\Frontend\Base;


use App\Enum\ProjectEnum;
use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\Setting;
use App\Models\WebContent;
use Carbon\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;
use function Psy\debug;

abstract class BaseController extends Controller
{
    protected $locale;
    protected $fb_id;
    protected $gg_id;
    protected $memberProfile;

    public function __construct()
    {
        parent::__construct();

        $this->layoutData['activeLanguage'] = Language::where('enable', '1')->get();

        $fb_key = Setting::FB_API_FOR_FRONTEND;
        if (strpos($_SERVER['SERVER_NAME'], 'staging.') !== false) {
            $fb_key = Setting::FB_API_FOR_BACKSTAGE;
        }

        $this->bodyData['fb_id'] = Setting::get($fb_key);
        $this->template->setHeadOther(config('project.gtm'));
        $this->template->setBodyOpen(config('project.gtm_body'));

        if (!empty($this->bodyData['fb_id'])) {
            $this->template->setMeta([
                "property" => "fb:app_id",
                "content" => ' ' . $this->bodyData['fb_id']
            ]);
        }
        $this->template->setHtml('lang', $this->locale);
        $this->template->setStylesheet(mix("/css/frontend/style.css"));

        $current = explode('/', request()->path());
        array_shift($current);

        $arr = [
            ProjectEnum::WEB_CONTENT_STICKY_MENU => 'sticky_menu',
            ProjectEnum::WEB_CONTENT_SOCIAL => 'social',
            ProjectEnum::WEB_CONTENT_ABOUT_CATEGORY => 'about_category',
            ProjectEnum::WEB_CONTENT_ABOUT => 'about',
            ProjectEnum::WEB_CONTENT_PRODUCT_CATEGORY => 'product_category',
            ProjectEnum::WEB_CONTENT_CLAIM => 'claim',
            ProjectEnum::WEB_CONTENT_CLAIM_CATEGORY => 'claim_category'
        ];

        $layoutContent = WebContent::whereIn('type_id', [
            ProjectEnum::WEB_CONTENT_STICKY_MENU,
            ProjectEnum::WEB_CONTENT_SOCIAL,
            ProjectEnum::WEB_CONTENT_ABOUT_CATEGORY,
            ProjectEnum::WEB_CONTENT_ABOUT,
            ProjectEnum::WEB_CONTENT_PRODUCT_CATEGORY,
            ProjectEnum::WEB_CONTENT_CLAIM,
            ProjectEnum::WEB_CONTENT_CLAIM_CATEGORY
        ])
            ->with('locales')
            ->whereRaw(ProjectEnum::isPublish())
            ->orderBy('s_order')
            ->get();


        foreach ($layoutContent as $v) {
            if ($v->type_id == ProjectEnum::WEB_CONTENT_ABOUT) {
                $this->bodyData[$arr[$v->type_id]][$v->cat_id][] = $v;
            } else {
                $this->bodyData[$arr[$v->type_id]][] = $v;
            }
        }

//        dd($this->bodyData);

        $this->bodyData['product'] = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_PRODUCT)
            ->with(['locales', 'productPackage' => function ($q) {
                $q->with('locales');
            }])
            ->whereRaw(ProjectEnum::isPublish())
            ->orderBy('s_order')
            ->get();


        $this->menuEnable();

        if (empty($current)) {
            $this->layoutData['current_path'] = '';
        } else {
            $this->layoutData['current_path'] = implode('/', $current);
        }

        $this->layoutData['menu_enable'] = Cache::rememberForever(ProjectEnum::CACHE_MENU_ENABLE, function () {
            return $this->menuEnable();
        });

        $this->addBreadcrumb(Lang::get('nav.home'), App::make('url')->to('/'));
    }

    protected function setFaq($typeId, $parentId = '')
    {
        if (is_string($typeId)) {
            $data = WebContent::where('type_id', $typeId);

            if ($parentId) {

                $data->where('parent_id', $parentId);
            }

            $data = $data->whereRaw(ProjectEnum::isPublish())
                ->with(['locales' => function ($q) {
                    $q->where('locale', $this->locale);
                }, 'category_locals' => function ($q) {
                    $q->where('locale', $this->locale);
                }])
                ->has('category_locals')
                ->orderBy('s_order')
                ->get();


            $new_data = [];

            foreach ($data as $k => $v) {
                $new_data[$v['category_locals'][$this->locale]['title']][$k]['q'] = $v['locales'][$this->locale]['title'];
                $new_data[$v['category_locals'][$this->locale]['title']][$k]['a'] = $v['locales'][$this->locale]['content'];
            }

            return collect($new_data);
        }
    }

    protected function menuEnable()
    {

        $result = DB::table('web_contents')
            ->select("type_id", DB::raw("COUNT(id) AS total"))
            ->whereRaw(ProjectEnum::isPublish())
            ->groupBy('type_id')
            ->get();
        $menu_enable = [];

        foreach ($result as $v) {
            $menu_enable[$v->type_id] = $v->total;
        }

        return $menu_enable;
    }

    protected function genStaticPage($content, $view)
    {
        $this->template->setFootJS(mix("/js/frontend/main.js"));
        $this->template->setBody('id', 'static_page');
        $this->bodyData['content'] = $content;
        $this->setStaticPageHeader($content);
        return $this->genView($view);
    }

    protected function genStatusPage($typeId)
    {
        $content = WebContent::where('type_id', $typeId)
            ->whereRaw(ProjectEnum::isPublish())
            ->with(['locales' => function ($q) {
                $q->where('locale', $this->locale);
            }])->first();

        $this->template->setFootJS(mix("/js/frontend/main.js"));
        $this->template->setBody('id', 'thankyou_page');
        $this->bodyData['content'] = $content;
        $this->setStaticPageHeader($content);
        return $this->genView('frontend.page.thankyou');
    }

    protected function addBreadcrumb($name, $link = '#')
    {
        $this->breadcrumb[] = ['name' => $name, 'link' => $link];
    }

    protected function genReview()
    {
        $this->bodyData['review'] = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_REVIEW)
            ->with('locales')
            ->whereRaw(ProjectEnum::isPublish())
            ->inRandomOrder()
            ->take(5)
            ->get();


    }

}
