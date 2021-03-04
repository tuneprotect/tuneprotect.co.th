<?php

namespace App\Http\Controllers;

use App\Enum\ProjectEnum;
use App\Helper\TemplateHelper;
use App\Http\Controllers\Api\Base\BaseApiController;
use App\Models\WebContent;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Controller extends BaseApiController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $template;
    protected $locale = 'th';
    protected $layoutData = [];
    protected $bodyData = [];
    protected $breadcrumb = [];

    public function __construct()
    {
        $this->template = new TemplateHelper();
        $this->template->setMeta(["charset" => 'utf-8']);
        $this->template->setMeta(["name" => 'viewport',
            "content" => 'width=device-width, initial-scale=1, shrink-to-fit=no'
        ]);
        $this->template->setMeta(['name' => 'format-detection', 'content' => 'telephone=no']);
        $this->template->setMeta(['name' => 'csrf-token', 'content' => csrf_token()]);
        $this->template->setMeta(['http-equiv' => 'X-UA-Compatible', 'content' => "IE=edge"]);

        if (isset($_SERVER['HTTP_HOST']) && !empty($_SERVER['HTTP_HOST']) &&
            Str::startsWith($_SERVER['HTTP_HOST'], config("project.staging_prefix"))) {
            $this->template->setMeta(['name' => "robots", "content" => "noindex"]);
        }
        $this->layoutData['locale'] = $this->locale = app()->getLocale();

        $arr = ['57x57', '114x114', '72x72', '144x144', '60x60', '120x120', '76x76', '152x152'];
        foreach ($arr as $v) {
            $this->template->setFavicon("/images/favicon/apple-touch-icon-{$v}.png", ['rel' => 'apple-touch-icon-precomposed', 'sizes' => $v]);
        }

        $arr = ['16x16', '32x32', '96x96', '144x144', '196x196', '128x128'];
        foreach ($arr as $v) {
            $this->template->setFavicon("/images/favicon/favicon-{$v}.png", ['rel' => 'icon', 'sizes' => $v, 'type' => 'image/png']);
        }

        $this->template->setMeta(['name' => 'application-name', 'content' => config('app.name')]);
        $this->template->setMeta(['name' => 'msapplication-TileColor', 'content' => '#FFFFFF']);
        $this->template->setMeta(['name' => 'msapplication-TileImage', 'content' => "/favicon/mstile-144x144.png"]);
        $this->template->setMeta(['name' => 'msapplication-square70x70logo', 'content' => "/favicon/mstile-70x70.png"]);
        $this->template->setMeta(['name' => 'msapplication-square150x150logo', 'content' => "/favicon/mstile-150x150.png"]);
        $this->template->setMeta(['name' => 'msapplication-wide310x150logo', 'content' => "/favicon/mstile-310x150.png"]);
        $this->template->setMeta(['name' => 'msapplication-square310x310logo', 'content' => "/favicon/mstile-310x310.png"]);

    }

    protected function getWebContentCategory($typeId, $onlyHasContent = false)
    {
        $sql = WebContent::where('type_id', $typeId)
            ->whereRaw(ProjectEnum::isPublish())
            ->with(['locales' => function ($q) {
                $q->where('locale', $this->locale);
            }]);

        if ($onlyHasContent) {
            $sql->whereHas('childContentsByCatID', function ($q) {
                $q->whereRaw(ProjectEnum::isPublish());
            });
        }
        return $sql->get();

    }

    protected function check_en_pic($pic)
    {
        if ($this->locale == 'en') {

            $basename = basename($pic);
            $en_name = pathinfo($pic, PATHINFO_FILENAME) . '_EN.' . pathinfo($pic, PATHINFO_EXTENSION);

            $exist = Storage::disk('public')->exists(
                str_replace('/storage', '', str_replace($basename, $en_name, $pic))
            );

            if ($exist) {
                return str_replace($basename, $en_name, $pic);
            } else {
                return $pic;
            }
        }
        return $pic;
    }


    protected function setStaticPageHeader($typeId)
    {
        if (is_string($typeId)) {
            $content = WebContent::where('type_id', $typeId)
                ->whereRaw(ProjectEnum::isPublish())
                ->with(['locales' => function ($q) {
                    $q->where('locale', $this->locale);
                }])->first();

        } else {
            $content = $typeId;
        }

        if (!empty($content->video_link) || !empty($content->pic)) {
            $this->bodyData['slideshow'] = [$content];
        }

        $this->setPageHeader(
            @$content->locales[$this->locale]->page_title,
            @$content->locales[$this->locale]->page_keyword,
            @$content->locales[$this->locale]->page_desc,
            @$content->locales[$this->locale]->og_title,
            @$content->locales[$this->locale]->og_desc,
            @$content->og_image
        );

        return $content;
    }

    protected function setPageHeader($title = '', $keyword = '', $description = '', $ogTitle = '', $ogDesc = '', $ogImage = '')
    {
        if (empty($title)) {
            $title = Lang::get('global.default.page_title');
        }
        if (empty($keyword)) {
            $keyword = Lang::get('global.default.page_keyword');
        }
        if (empty($description)) {
            $description = Lang::get('global.default.page_description');
        }

        if (empty($ogTitle)) {
            $ogTitle = $title;
        }

        if (empty($ogDesc)) {
            $ogDesc = $description;
        }

        $this->template->setTitle(html_entity_decode(strip_tags($title), ENT_QUOTES));
        $this->template->setMeta(['name' => 'keywords', 'content' => html_entity_decode(strip_tags($keyword), ENT_QUOTES)]);
        $this->template->setMeta(['name' => 'description', 'content' => html_entity_decode(strip_tags($description), ENT_QUOTES)]);
        $this->template->setMeta(['property' => 'og:title', 'content' => html_entity_decode(strip_tags($ogTitle), ENT_QUOTES)]);
        $this->template->setMeta(['property' => 'og:description', 'content' => html_entity_decode(strip_tags($ogDesc), ENT_QUOTES)]);

        if (!empty($ogImage)) {

            $info = getimagesize(public_path($ogImage));

            $this->template->setMeta(['property' => 'og:image', 'content' => request()->getSchemeAndHttpHost() . $ogImage]);
            $this->template->setMeta(['property' => 'og:image:type', 'content' => $info['mime']]);
            $this->template->setMeta(['property' => 'og:image:width', 'content' => $info[0]]);
            $this->template->setMeta(['property' => 'og:image:height', 'content' => $info[1]]);
        }

    }


    public function genView($view)
    {

        $arr = array_merge(
            ['template' => $this->template->getTemplateOption()],
            ['breadcrumb' => $this->breadcrumb],
            $this->layoutData,
            $this->bodyData
        );

        return view($view, $arr);
    }
}
