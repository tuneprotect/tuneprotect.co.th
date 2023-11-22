<?php


namespace App\Enum;


use Carbon\Carbon;

class ProjectEnum
{
    const STATIC_PAGE_INDEX = 'static.home.index';
    const STATIC_PAGE_ORGANIZATION = 'static.page.organization';
    const STATIC_PAGE_DOWNLOAD = 'static.page.download';
    const STATIC_PAGE_PAY_INSURANCE_PREMIUMS = 'static.page.pay_insurance_premiums';
    const STATIC_PAGE_CONTACT_US = 'static.page.contact_us';
    const STATIC_PAGE_CLAIM = 'static.page.claim';
    const STATIC_PAGE_HOSPITAL = 'static.page.hospital';
    const STATIC_PAGE_GLASS_SHOP = 'static.page.glass_shop';
    const STATIC_PAGE_GARAGE = 'static.page.garage';
    const STATIC_META_NEWS = 'static.page.news';
    const STATIC_META_PROMOTION = 'static.page.promotion';
    const STATIC_PAGE_SERVICE_CENTER = 'static.page.service_center';
    const STATIC_PAGE_PAYMENT_THANK_YOU = 'static.page.payment_thank_you';

    const STATIC_PAGE_PAYMENT_THANK_YOU_ITRAVEL= 'static.page.payment_thank_you_itravel';
    const STATIC_PAGE_PAYMENT_THANK_YOU_PA_CHOICE = 'static.page.payment_thank_you_pa_choice';

    //====================================Health====================================//
    //Chill Sure
    const STATIC_PAGE_PAYMENT_THANK_YOU_CHILL_SURE = 'static.page.payment_thank_you_chill_sure';
    const STATIC_PAGE_PAYMENT_ERROR_CHILL_SURE = 'static.page.payment_error_chill_sure';
    const STATIC_PAGE_PAYMENT_PENDING_CHILL_SURE = 'static.page.payment_pending_chill_sure';
    const STATIC_PAGE_PAYMENT_REJECT_CHILL_SURE = 'static.page.payment_reject_chill_sure';

    //My Flexi CI
    const STATIC_PAGE_PAYMENT_THANK_YOU_MYFLEXI_CI = 'static.page.payment_thank_you_myflexi_ci';
    const STATIC_PAGE_PAYMENT_ERROR_MYFLEXI_CI = 'static.page.payment_error_myflexi_ci';
    const STATIC_PAGE_PAYMENT_PENDING_MYFLEXI_CI = 'static.page.payment_pending_myflexi_ci';
    const STATIC_PAGE_PAYMENT_REJECT_MYFLEXI_CI = 'static.page.payment_reject_myflexi_ci';

    //Diabetes
    const STATIC_PAGE_PAYMENT_THANK_YOU_DIABETES = 'static.page.payment_thank_you_diabetes';
    const STATIC_PAGE_PAYMENT_ERROR_DIABETES = 'static.page.payment_error_diabetes';
    const STATIC_PAGE_PAYMENT_PENDING_DIABETES = 'static.page.payment_pending_diabetes';
    const STATIC_PAGE_PAYMENT_REJECT_DIABETES = 'static.page.payment_reject_diabetes';

    //====================================PA Choice====================================//
    //PA Choice Care
    const STATIC_PAGE_PAYMENT_THANK_YOU_PA_CHOICE_CARE = 'static.page.payment_thank_you_pa_choice_care';
    const STATIC_PAGE_PAYMENT_ERROR_PA_CHOICE_CARE = 'static.page.payment_error_pa_choice_care';
    const STATIC_PAGE_PAYMENT_PENDING_PA_CHOICE_CARE = 'static.page.payment_pending_pa_choice_care';
    const STATIC_PAGE_PAYMENT_REJECT_PA_CHOICE_CARE = 'static.page.payment_reject_pa_choice_care';

    //PA Choice Kide
    const STATIC_PAGE_PAYMENT_THANK_YOU_PA_CHOICE_KIDE = 'static.page.payment_thank_you_pa_choice_kide';
    const STATIC_PAGE_PAYMENT_ERROR_PA_CHOICE_KIDE = 'static.page.payment_error_pa_choice_kide';
    const STATIC_PAGE_PAYMENT_PENDING_PA_CHOICE_KIDE = 'static.page.payment_pending_pa_choice_kide';
    const STATIC_PAGE_PAYMENT_REJECT_PA_CHOICE_KIDE = 'static.page.payment_reject_pa_choice_kide';

    //PA Choice Senior
    const STATIC_PAGE_PAYMENT_THANK_YOU_PA_CHOICE_SENIOR = 'static.page.payment_thank_you_pa_choice_senior';
    const STATIC_PAGE_PAYMENT_ERROR_PA_CHOICE_SENIOR = 'static.page.payment_error_pa_choice_senior';
    const STATIC_PAGE_PAYMENT_PENDING_PA_CHOICE_SENIOR = 'static.page.payment_pending_pa_choice_senior';
    const STATIC_PAGE_PAYMENT_REJECT_PA_CHOICE_SENIOR = 'static.page.payment_reject_pa_choice_senior';

    //====================================Travel Insurance====================================//
    //iTravel Plus skiing
    const STATIC_PAGE_PAYMENT_THANK_YOU_TA_PLUS_SKIING = 'static.page.payment_thank_you_ta_plus_skiing';
    const STATIC_PAGE_PAYMENT_ERROR_TA_PLUS_SKIING = 'static.page.payment_error_ta_plus_skiing';
    const STATIC_PAGE_PAYMENT_PENDING_TA_PLUS_SKIING = 'static.page.payment_pending_ta_plus_skiing';
    const STATIC_PAGE_PAYMENT_REJECT_TA_PLUS_SKIING = 'static.page.payment_reject_ta_plus_skiing';

    //iSmile
    const STATIC_PAGE_PAYMENT_THANK_YOU_ISMILE = 'static.page.payment_thank_you_ismile';
    const STATIC_PAGE_PAYMENT_ERROR_ISMILE = 'static.page.payment_error_ismile';
    const STATIC_PAGE_PAYMENT_PENDING_ISMILE = 'static.page.payment_pending_ismile';
    const STATIC_PAGE_PAYMENT_REJECT_ISMILE = 'static.page.payment_reject_ismile';

    //Tune iPass
    const STATIC_PAGE_PAYMENT_THANK_YOU_TUNE_IPASS = 'static.page.payment_thank_you_tune_ipass';
    const STATIC_PAGE_PAYMENT_ERROR_TUNE_IPASS = 'static.page.payment_error_tune_ipass';
    const STATIC_PAGE_PAYMENT_PENDING_TUNE_IPASS = 'static.page.payment_pending_tune_ipass';
    const STATIC_PAGE_PAYMENT_REJECT_TUNE_IPASS = 'static.page.payment_reject_tune_ipass';

    //TA Domestic
    const STATIC_PAGE_PAYMENT_THANK_YOU_TA_DOMESTIC = 'static.page.payment_thank_you_ta_domestic';
    const STATIC_PAGE_PAYMENT_ERROR_TA_DOMESTIC = 'static.page.payment_error_ta_domestic';
    const STATIC_PAGE_PAYMENT_PENDING_TA_DOMESTIC = 'static.page.payment_pending_ta_domestic';
    const STATIC_PAGE_PAYMENT_REJECT_TA_DOMESTIC = 'static.page.payment_reject_ta_domestic';

    //TA Outbound
    const STATIC_PAGE_PAYMENT_THANK_YOU_TA_OUTBOUND = 'static.page.payment_thank_you_ta_outbound';
    const STATIC_PAGE_PAYMENT_ERROR_TA_OUTBOUND = 'static.page.payment_error_ta_outbound';
    const STATIC_PAGE_PAYMENT_PENDING_TA_OUTBOUND = 'static.page.payment_pending_ta_outbound';
    const STATIC_PAGE_PAYMENT_REJECT_TA_OUTBOUND = 'static.page.payment_reject_ta_outbound';

    //TA Outbound Tour
    const STATIC_PAGE_PAYMENT_THANK_YOU_TA_OUTBOUND_TOUR = 'static.page.payment_thank_you_ta_outbound_tour';
    const STATIC_PAGE_PAYMENT_ERROR_TA_OUTBOUND_TOUR = 'static.page.payment_error_ta_outbound_tour';
    const STATIC_PAGE_PAYMENT_PENDING_TA_OUTBOUND_TOUR = 'static.page.payment_pending_ta_outbound_tour';
    const STATIC_PAGE_PAYMENT_REJECT_TA_OUTBOUND_TOUR = 'static.page.payment_reject_ta_outbound_tour';

    

    //====================================My Home====================================//
    //My Home Smart
    const STATIC_PAGE_PAYMENT_THANK_YOU_MYHOME_SMART = 'static.page.payment_thank_you_myhome_smart';
    const STATIC_PAGE_PAYMENT_ERROR_MYHOME_SMART = 'static.page.payment_error_myhome_smart';
    const STATIC_PAGE_PAYMENT_PENDING_MYHOME_SMART = 'static.page.payment_pending_myhome_smart';
    const STATIC_PAGE_PAYMENT_REJECT_MYHOME_SMART = 'static.page.payment_reject_myhome_smart';

    //My Home Plus
    const STATIC_PAGE_PAYMENT_THANK_YOU_MYHOME_PLUS = 'static.page.payment_thank_you_myhome_plus';
    const STATIC_PAGE_PAYMENT_ERROR_MYHOME_PLUS = 'static.page.payment_error_myhome_plus';
    const STATIC_PAGE_PAYMENT_PENDING_MYHOME_PLUS = 'static.page.payment_pending_myhome_plus';
    const STATIC_PAGE_PAYMENT_REJECT_MYHOME_PLUS = 'static.page.payment_reject_myhome_plus';

    //====================================Portal====================================//
    //Chill Sure GV
    const STATIC_PAGE_PAYMENT_THANK_YOU_CHILL_SURE_GV = 'static.page.payment_thank_you_chill_sure_gv';
    const STATIC_PAGE_PAYMENT_ERROR_CHILL_SURE_GV = 'static.page.payment_error_chill_sure_gv';
    const STATIC_PAGE_PAYMENT_PENDING_CHILL_SURE_GV = 'static.page.payment_pending_chill_sure_gv';
    const STATIC_PAGE_PAYMENT_REJECT_CHILL_SURE_GV = 'static.page.payment_reject_chill_sure_gv';

    //My Flexi CI GC
    const STATIC_PAGE_PAYMENT_THANK_YOU_MYFLEXI_CIGC = 'static.page.payment_thank_you_myflexi_cigc';
    const STATIC_PAGE_PAYMENT_ERROR_MYFLEXI_CIGC = 'static.page.payment_error_myflexi_cigc';
    const STATIC_PAGE_PAYMENT_PENDING_MYFLEXI_CIGC = 'static.page.payment_pending_myflexi_cigc';
    const STATIC_PAGE_PAYMENT_REJECT_MYFLEXI_CIGC = 'static.page.payment_reject_myflexi_cigc';

    //Close Product
    const STATIC_PAGE_CLOSE_PRODUCT = 'static.page.page_close_product';

    const STATIC_PAGE_PAYMENT_ERROR = 'static.page.payment_error';
    const STATIC_PAGE_PAYMENT_CANCEL = 'static.page.payment_cancel';
    const STATIC_PAGE_PAYMENT_PENDING = 'static.page.payment_pending';
    const STATIC_PAGE_PAYMENT_REJECT = 'static.page.payment_reject';

    const STATIC_PAGE_PRIVACY_POLICY = 'static.page.privacy';
    const STATIC_PAGE_TERMS = 'static.page.terms';
    const STATIC_PAGE_MY_HEALTH = 'static.page.my_health';

    const STATIC_META_ARTICLE = 'static.page.article';
    const STATIC_META_MY_HEALTH = 'static.page.my_health';

    const WEB_CONTENT_FAQ = "faq.content";
    const WEB_CONTACTUS_FAQ = "faq_contact.content";

    const WEB_CONTENT_PRODUCT = "product.content";
    const WEB_CONTENT_PRODUCT_CATEGORY = "product.category";
    const WEB_CONTENT_PRODUCT_SLIDESHOW = "product.slideshow";
    const WEB_CONTENT_PRODUCT_PACKAGE = "product.package";

    const WEB_CONTENT_ABOUT = "about.content";
    const WEB_CONTENT_ABOUT_CATEGORY = "about.category";
    const WEB_CONTENT_ALERT = "static.alert";
    const WEB_CONTENT_ARTICLE = "article.content";
    const WEB_CONTENT_ARTICLE_CATEGORY = "article.category";
    const WEB_CONTENT_BANNER = "static.banner";
    const WEB_CONTENT_REVIEW = "static.review";
    const WEB_CONTENT_HOSPITAL_CATEGORY = "partner.hospital_category";
    const WEB_CONTENT_HOSPITAL = "partner.hospital";
    const WEB_CONTENT_GLASS_SHOP_CATEGORY = "partner.glass_shop_category";
    const WEB_CONTENT_GLASS_SHOP = "partner.glass_shop";
    const WEB_CONTENT_GARAGE_CATEGORY = "partner.garage_category";
    const WEB_CONTENT_GARAGE = "partner.garage";
    const WEB_CONTENT_SERVICE_CENTER_CATEGORY = "partner.service_center_category";
    const WEB_CONTENT_SERVICE_CENTER = "partner.service_center";
    const WEB_CONTENT_NEWS = "news.content";
    const WEB_CONTENT_NEWS_CATEGORY = "news.category";
    const WEB_CONTENT_PROMOTION = "promotion.content";
    const WEB_CONTENT_PROMOTION_CATEGORY = "promotion.category";
    const WEB_CONTENT_ORGANIZATION = "about.organization";
    const WEB_CONTENT_PROVINCE = "configuration.province";
    const WEB_CONTENT_SERVICE = "static.service";
    const WEB_CONTENT_SERVICE_MY_HEALTH = "service_my_health.content";
    const WEB_CONTENT_SOCIAL = "static.social";
    const WEB_CONTENT_STICKY_MENU = "static.sticky_menu";
    const WEB_CONTENT_CLAIM = "claim.content";
    const WEB_CONTENT_CLAIM_CATEGORY = "claim.category";
    const WEB_CONTENT_LEADFORM_CATEGORY = "leadform.category";
    const CACHE_MENU_ENABLE = 'menu_enable';

    //Health
    const ONCSHC_URL = 'ONCSHC';
    const MYFLEXI_CI_URL = 'CI';
    const DIABETES_URL = 'DIABETES';

    //PA Choice
    const ONPACA_URL = 'ONPACA';
    const ONPAKD_URL = 'ONPAKD';
    const ONPASN_URL = 'ONPASN';

    //Travel
    const ONTASK_URL = 'ONTASK';
    const TAISM_URL = 'TAISM';
    const TAIPOCT22_URL = 'TAIPOCT22';
    const ONTADM_URL = 'ONTADM';
    const ONTAOB_URL = 'ONTAOB';

    //myHome
	const MYHOME_SMART_URL = 'ONMHS';
    const MYHOME_PLUS_URL = 'ONFIMP';
    
    //ChillSure
    const ONCSHCAA_URL = 'ONCSHCAA';
    const ONCSHCSC_URL = 'ONCSHCSC';
    const ONCSHCGV_URL = 'ONCSHCGV';

    //CI Gift Card
    const MYFLEXI_CIGC_URL = 'CIGC';

    //Travel Tour
    const ONTATO_URL = 'ONTATO';

    const ISMILE_URL = 'TAISM';
    const ISSUE_POLICY_DIABETES = 'IssuePolicyDiabetes';

    const STATIC_PAGE_BIGLIFE_POINT = 'static.page.biglife_point';
    const STATIC_PAGE_BIGLIFE_POINT_THANK_YOU = 'static.page.biglife_point_thank_you';
    const STATIC_PAGE_ERROR = 'static.page.page_error';

    //TODO : invoice prefix for test only
    const INVOICE_PREFIX = 'W';

    public static function isPublish()
    {
        $now = Carbon::now();

        return "mark_delete = 0 AND enable = 1 AND (('{$now}' BETWEEN start_date AND end_date)
    OR ((start_date IS NULL OR start_date = 0) AND '{$now}' < end_date)
    OR ((end_date = 0 OR end_date IS NULL) AND '{$now}' > start_date)
    OR ((start_date IS NULL OR start_date = 0) AND (end_date = 0 OR end_date IS NULL )))";

    }
}
