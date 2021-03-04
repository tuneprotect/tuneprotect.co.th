// if (process.env.NODE_ENV === 'production') {
//     path = resolve(__dirname, "../../.env");
// }

export const API_URL = "/appApi";
export const CK_FINDER_URL = process.env.REACT_APP_CK_FINDER;
export const APP_NAME = process.env.MIX_REACT_APP_NAME;
export const APP_TIMEOUT_MINUTE = 10;
export const APP_TIME_BEFORE_TIMEOUT_REDIRECT_SECOND = 10;
export const APP_VERSION = "1.0.0";
export const GOOGLE_AUTH_API = process.env.MIX_GOOGLE_AUTH_API;
export const FACEBOOK_API = process.env.MIX_FACEBOOK_API;

export const STORAGE = {
    MEMBER_DATA: 'member_data',
    LOCK_TIME: 'lock_time',
    LANGUAGE_SUPPORT: 'language_support',
    STATIC_CONTENT: 'static_content',
};

export const LOGIN = {
    MAX_LOGIN: 3000,
    LOCK_TIME_MINUTE: 5
};

export const LANGUAGE = ["th", "en"];

export const API_URL_LIST = {
    //system
    systemOverallCheck: `${API_URL}/System/overallCheck`,
    systemGetDiskSpace: `${API_URL}/System/getDiskSpace`,
    systemGetUnPublish: `${API_URL}/System/getUnPublish`,
    systemCheckInstallation: `${API_URL}/System/checkInstallation`,
    systemCheckQueue: `${API_URL}/System/checkQueue`,
    systemClearQueue: `${API_URL}/System/clearQueue`,
    systemStartQueue: `${API_URL}/System/startQueue`,
    systemClearCache: `${API_URL}/System/clearCache`,
    //admin_user
    userLogin: `${API_URL}/User/login`,
    userResetPassword: API_URL + '/User/resetPassword',
    userForgotPassword: `${API_URL}/User/processForgot`,
    userGetByToken: `${API_URL}/User/getUserByToken`,
    userChangePassword: `${API_URL}/User/changePassword`,
    userSave: `${API_URL}/User/save`,
    userGet: `${API_URL}/User/get`,
    userGetAll: `${API_URL}/User/getAll`,
    userSetEnable: `${API_URL}/User/setEnable`,
    userDelete: `${API_URL}/User/delete`,
    //admin_log
    adminLogGetAll: `${API_URL}/AdminLog/getAll`,
    adminLogAdd: `${API_URL}/AdminLog/add`,
    //Setting
    settingGetAll: `${API_URL}/Setting/getAll`,
    settingSaveAll: `${API_URL}/Setting/save`,
    settingPublish: `${API_URL}/Setting/publish`,
    //Language
    languageGetAll: `${API_URL}/Language/getAll`,
    languageSetDefault: `${API_URL}/Language/setDefault`,
    languageSetEnable: `${API_URL}/Language/setEnable`,
    languagePublishAll: `${API_URL}/Language/publishAll`,
    //Translation
    translationGetAll: `${API_URL}/Translation/getAll`,
    translationSaveAll: `${API_URL}/Translation/save`,
    translationLoadFromFile: `${API_URL}/Translation/loadFromFile`,
    translationPublish: `${API_URL}/Translation/publish`,
    //File Manager
    fileManagerGetFolder: `${API_URL}/FileManager/getAllFolder`,
    fileManagerGetFileInFolder: `${API_URL}/FileManager/getFileInFolder`,
    fileManagerCreateFolder: `${API_URL}/FileManager/createFolder`,
    fileManagerUpload: `${API_URL}/FileManager/upload`,
    fileManagerDeleteItem: `${API_URL}/FileManager/delete`,
    // Web Content
    webContentSave: `${API_URL}/WebContent/save`,
    webContentSaveVideoLink: `${API_URL}/WebContent/saveVideoLink`,
    webContentGet: `${API_URL}/WebContent/getDetail`,
    webContentGetAll: `${API_URL}/WebContent/getAll`,
    webContentGetAllStatic: `${API_URL}/WebContent/getAllStatic`,
    webContentPublish: `${API_URL}/WebContent/publish`,
    webContentSetEnable: `${API_URL}/WebContent/setEnable`,
    webContentSetDelete: `${API_URL}/WebContent/setDelete`,
    webContentSetHome: `${API_URL}/WebContent/setHome`,
    webContentSaveReorder: `${API_URL}/WebContent/saveReorder`,
    webContentExport: `${API_URL}/WebContent/exportList`,
    webContentImportList: `${API_URL}/WebContent/importList`,
    webContentUpload: `${API_URL}/WebContent/upload`,
    webContentAddTag: `${API_URL}/WebContent/addTag`,
    webContentRemoveTag: `${API_URL}/WebContent/removeTag`,
    webContentSavePackageDetail: `${API_URL}/WebContent/savePackageDetail`,
    webContentGetFBReview: `${API_URL}/WebContent/getFBReview`,

    // Gallery
    galleryGetAll: `${API_URL}/Gallery/getAll`,
    galleryUpload: `${API_URL}/Gallery/upload`,
    galleryPublish: `${API_URL}/Gallery/publish`,
    gallerySetEnable: `${API_URL}/Gallery/setEnable`,
    gallerySetDelete: `${API_URL}/Gallery/setDelete`,
    gallerySaveReorder: `${API_URL}/Gallery/saveReorder`,
    //Contact
    contactGetAll: `${API_URL}/Contactus/getAll`,
    contactDelete: `${API_URL}/Contactus/delete`,
    contactGetLatest: `${API_URL}/Contactus/getLatestContact`,
    // Partner
    partnerSave: `${API_URL}/Partner/save`,
    partnerGet: `${API_URL}/Partner/getDetail`,
    partnerGetAll: `${API_URL}/Partner/getAll`,
    partnerPublish: `${API_URL}/Partner/publish`,
    partnerSetEnable: `${API_URL}/Partner/setEnable`,
    partnerSetDelete: `${API_URL}/Partner/setDelete`,
    partnerSaveReorder: `${API_URL}/Partner/saveReorder`,
    // Testing
    testEmail: `${API_URL}/Testing/email`,
};

export const API_STATUS_RESULT = {
    SUCCESS: 'success',
    WARNING: 'warning',
    INFO: 'info',
    ERROR: 'error'
};

export const DATE_FORMAT = {
    SHORT_DATE: 'dd/MM/yyyy',
    SHORT_DATE_TIME: 'dd/MM/yyyy HH:mm:ss',
    SHORT_LOG_DATE: 'yyyy-MM-dd',
    LONG_DATE: 'dd MMMM yyyy',
    LONG_DATE_TIME: 'dd MMMM yyyy HH:mm:ss',
    FILE_NAME_DATE_TIME: 'yyyy-MM-dd-HH-mm-ss',
    LOG_DATE: 'yyyy-MM-dd HH:mm:ss'
};

export const ROLE = {
    SUPER_ADMIN: 'super_admin',
};

export const WEB_CONTENT = {
    ABOUT: "about.content",
    ABOUT_CATEGORY: "about.category",
    ORGANIZATION: "about.organization",

    CLAIM: "claim.content",
    CLAIM_CATEGORY: "claim.category",

    FAQ : "faq.content",
    FAQ_CONTACT_CATEGORY : "faq_contact.category",
    FAQ_CONTACT : "faq_contact.content",

    ARTICLE: "article.content",
    ARTICLE_CATEGORY: "article.category",

    HOSPITAL: "partner.hospital",
    HOSPITAL_CATEGORY: "partner.hospital_category",
    GARAGE: "partner.garage",
    GARAGE_CATEGORY: "partner.garage_category",
    SERVICE_CENTER: "partner.service_center",
    SERVICE_CENTER_CATEGORY: "partner.service_center_category",

    PRODUCT : "product.content",
    PRODUCT_CATEGORY : "product.category",
    PRODUCT_SLIDESHOW : "product.slideshow",
    PRODUCT_PACKAGE : "product.package",

    ALERT: "static.alert",
    BANNER: "static.banner",
    SOCIAL: "static.social",
    STICKY_MENU: "static.sticky_menu",
    SERVICE: "static.service",
    REVIEW: "static.review",

    NEWS: "news.content",
    NEWS_CATEGORY: "news.category",

    PROVINCE: "configuration.province",
}
