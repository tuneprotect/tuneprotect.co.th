<?php


namespace App\Http\Controllers\Frontend;

use App\Enum\ProjectEnum;
use App\Http\Controllers\Frontend\Base\BaseController;
use App\Http\Requests\ContactusRequest;
use App\Mail\ContactUsEmail;
use App\Models\Contactus;
use App\Models\Setting;
use App\Models\WebContent;
use Illuminate\Support\Facades\Mail;

class ContactusController extends BaseController
{
    public function index()
    {
        $this->template->setBody('id', 'contact_us_page');
        $this->template->setFootJS(mix("/js/frontend/contactus.js"));
        $this->bodyData['content'] = $this->setStaticPageHeader(ProjectEnum::STATIC_PAGE_CONTACT_US);

        $this->bodyData['faq'] = $this->setFaq(ProjectEnum::WEB_CONTACTUS_FAQ);

        return $this->genView('frontend.page.contactus');
    }

    public function save(ContactusRequest $request)
    {
        try {
            $validated = $request->validated();
            $webContent = new WebContent();
            $this->apiResult = Contactus::create(array_merge($validated, ['connection' => $webContent->getConnection()->getName()]));
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;
            $receiver = Setting::get(Setting::CONTACT_US_RECEIVE_EMAIL);
            if (!empty($receiver)) {
                $arr_receiver = explode(',', $receiver);
                Mail::to($arr_receiver)->send(new ContactUsEmail($this->apiResult));
            }

        } catch (\Exception $ex) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();
        }

        return $this->send();
    }


}
