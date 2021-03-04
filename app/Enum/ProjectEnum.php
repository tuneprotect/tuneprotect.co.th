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
    const STATIC_PAGE_GARAGE = 'static.page.garage';
    const STATIC_PAGE_SERVICE_CENTER = 'static.page.service_center';
    const STATIC_PAGE_PAYMENT_THANK_YOU = 'static.page.payment_thank_you';
    const STATIC_PAGE_PAYMENT_ERROR = 'static.page.payment_error';
    const STATIC_PAGE_PAYMENT_CANCEL = 'static.page.payment_cancel';
    const STATIC_PAGE_PAYMENT_PENDING = 'static.page.payment_pending';
    const STATIC_PAGE_PAYMENT_REJECT = 'static.page.payment_reject';
    const STATIC_PAGE_PRIVACY_POLICY = 'static.page.privacy';
    const STATIC_PAGE_TERMS = 'static.page.terms';

    const STATIC_META_ARTICLE = 'static.page.article';
    const STATIC_META_NEWS = 'static.page.news';

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
    const WEB_CONTENT_GARAGE_CATEGORY = "partner.garage_category";
    const WEB_CONTENT_GARAGE = "partner.garage";
    const WEB_CONTENT_SERVICE_CENTER_CATEGORY = "partner.service_center_category";
    const WEB_CONTENT_SERVICE_CENTER = "partner.service_center";
    const WEB_CONTENT_NEWS = "news.content";
    const WEB_CONTENT_NEWS_CATEGORY = "news.category";
    const WEB_CONTENT_ORGANIZATION = "about.organization";
    const WEB_CONTENT_PROVINCE = "configuration.province";
    const WEB_CONTENT_SERVICE = "static.service";
    const WEB_CONTENT_SOCIAL = "static.social";
    const WEB_CONTENT_STICKY_MENU = "static.sticky_menu";
    const WEB_CONTENT_CLAIM = "claim.content";
    const WEB_CONTENT_CLAIM_CATEGORY = "claim.category";

    const CACHE_MENU_ENABLE = 'menu_enable';

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
