<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\WebContent;
use Illuminate\Support\Facades\View;

class AboutusController extends BaseController
{
    public function index($link = null)
    {
        if (!empty($link)) {
            $content = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_ABOUT)
                ->with('locales')
                ->where('friendly_url', $link)
                ->whereRaw(ProjectEnum::isPublish())
                ->first();

            if ($content) {

                if (strpos($content->locales[$this->locale]->content, '{executive_member}')) {
                    $this->template->setFootJS(mix("/js/frontend/organization.js"));
                    $data['organization'] = WebContent::where('type_id', ProjectEnum::WEB_CONTENT_ORGANIZATION)
                        ->with('locales')
                        ->whereRaw(ProjectEnum::isPublish())
                        ->orderBy('s_order')
                        ->get();
                    $data['locale'] = $this->locale;
                    $executive_member = view('frontend.page.organization', $data)->render();
                    $content->locales[$this->locale]->content = str_replace('{executive_member}', $executive_member, $content->locales[$this->locale]->content);
                }

                $this->bodyData['no_share'] = true;

                return $this->genStaticPage($content, 'frontend.page.static');
            }
        }
        return abort(404);

    }
}
