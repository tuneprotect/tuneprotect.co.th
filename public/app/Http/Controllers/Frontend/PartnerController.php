<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Models\Partner;
use App\Models\WebContent;
use Illuminate\Support\Facades\Storage;

class PartnerController extends BaseController
{
    public function index($type = null)
    {
        $arrType = [
            'hospital' => ProjectEnum::WEB_CONTENT_HOSPITAL,
            'garage' => ProjectEnum::WEB_CONTENT_GARAGE,
            'service_center' => ProjectEnum::WEB_CONTENT_SERVICE_CENTER,
        ];

        $arrCategoryType = [
            'hospital' => ProjectEnum::WEB_CONTENT_HOSPITAL_CATEGORY,
            'garage' => ProjectEnum::WEB_CONTENT_GARAGE_CATEGORY,
            'service_center' => ProjectEnum::WEB_CONTENT_SERVICE_CENTER_CATEGORY,
        ];

        if ($type === null || !isset($arrType[$type])) {
            abort(404);
        }

        $this->bodyData['partner'] = Partner::where('type_id', $arrType[$type])
            ->select(['id', 'cat_id', 'website', 'tel', 'partner_language', 'province', 'location'])
            ->with(['locales', 'category' => function ($q) {
//                $q->select(['id'])
//                    ->with(['locales' => function ($q1) {
//                        $q1->select(['web_content_id', 'title', 'locale']);
//                    }]);
            }])
            ->whereRaw(ProjectEnum::isPublish())
            ->get();
        $this->bodyData['type'] = $type;
        $this->bodyData['content'] = $this->setStaticPageHeader('static.page.' . $type);
        $this->bodyData['province'] = json_decode(Storage::disk('public')->get('json/province.json'));

        $this->bodyData['category'] = WebContent::where('type_id', $arrCategoryType[$type])
            ->with('locales')
            ->whereRaw(ProjectEnum::isPublish())
            ->get();

        $this->bodyData['partner_language'] = $this->bodyData['partner'][0]->partner_language;

        $this->template->setBody('id', 'partner_page');
        $this->template->setFootJS(mix("/js/frontend/hospital.js"));
        return $this->genView('frontend.page.partner');
    }


}
