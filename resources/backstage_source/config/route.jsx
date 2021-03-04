import React from "react";
import * as Yup from "yup";
import LogoutPage from "../view/page/system/logout/LogoutPage";
import LoginPage from "../view/page/system/login/LoginPage";
import DashboardPage from "../view/page/system/dashboard/DashboardPage";
import ErrorPage from "../view/page/system/error/ErrorPage";
import ResetPasswordPage from "../view/page/system/reset_password/ResetPasswordPage";
import ChangePasswordPage from "../view/page/profile/ChangePasswordPage";
import ProfilePage from "../view/page/profile/ProfilePage";
import SettingPage from "../view/page/configuration/setting/SettingPage";
import LanguagePage from "../view/page/configuration/language/LanguagePage";
import TranslatePage from "../view/page/configuration/translation/TranslationPage";
import UserManagementPage from "../view/page/user/UserManagementPage";
import UserLogPage from "../view/page/user/UserLogPage";
import StaticListPage from "../view/page/static/StaticListPage";
import FileManagerPage from "../view/page/static/FileManagerPage";
import WebContentMainStep from "../view/page/web_content/WebContentMainStep";
import UserFormPage from "../view/page/user/UserFormPage";
import WebContentPage from "../view/page/web_content/WebContentPage";
import Translate from "../view/component/Translate";
import {WEB_CONTENT} from "./config";
import ContactPage from "../view/page/contact/ContactPage";
import PartnerPage from "../view/page/partner/PartnerPage";
import PartnerMainStep from "../view/page/partner/PartnerMainStep";
import TestingEmailPage from "../view/page/testing/TestingEmailPage";

let APP_ROUTE = {
    login: {
        id: "login",
        name: <Translate id={`side_nav.login`}/>,
        url: "/",
        show_on_main_menu: false,
        layout: "NoHeaderLayout",
        component: LoginPage,
        parent: "",
        group: "",
        isExact: true
    },
    reset_password: {
        id: "reset_password",
        name: <Translate id={`side_nav.reset_password`}/>,
        url: "/reset_password",
        pattern: "/reset_password/:token?",
        show_on_main_menu: false,
        layout: "NoHeaderLayout",
        component: ResetPasswordPage,
        parent: "",
        group: "",
    },
    error: {
        id: "error",
        name: <Translate id={`side_nav.error`}/>,
        url: "/error",
        show_on_main_menu: false,
        layout: "NoHeaderLayout",
        component: ErrorPage,
        parent: "",
        group: "",
    },
    profile: {
        id: "profile",
        name: <Translate id={`side_nav.profile`}/>,
        url: "/profile",
        icon: 'person',
        show_on_profile_menu: true,
        layout: "MainLayout",
        component: ProfilePage,
        parent: "",
        group: "profile"

    },
    change_password: {
        id: "change_password",
        name: <Translate id={`side_nav.change_password`}/>,
        url: "/change_password",
        icon: 'vpn_key',
        show_on_profile_menu: true,
        component: ChangePasswordPage,
        layout: "MainLayout",
        parent: "",
        group: "profile"
    },
    logout: {
        id: "logout",
        name: <Translate id={`side_nav.logout`}/>,
        url: "/logout",
        icon: 'exit_to_app',
        show_on_profile_menu: true,
        component: LogoutPage,
        parent: "",
        group: "profile",
    },
    dashboard: {
        id: "dashboard",
        name: <Translate id={`side_nav.dashboard`}/>,
        url: "/dashboard",
        icon: 'dashboard',
        show_on_main_menu: true,
        layout: "MainLayout",
        component: DashboardPage,
        parent: "",
        group: "main_nav"
    },
    configuration: {
        id: "configuration",
        name: <Translate id={`side_nav.configuration.main`}/>,
        url: "#",
        icon: "build",
        show_on_main_menu: true,
        layout: "MainLayout",
        parent: "",
        group: "main_nav"
    },
    ['configuration.setting']: {
        id: "configuration.setting",
        name: <Translate id={`side_nav.configuration.setting`}/>,
        url: "/configuration/setting",
        icon: "settings",
        show_on_main_menu: true,
        layout: "MainLayout",
        component: SettingPage,
        parent: "configuration",
        group: "main_nav",
        permission: ['edit', 'publish']
    },
    ['configuration.language']: {
        id: "configuration.language",
        name: <Translate id={`side_nav.configuration.language`}/>,
        url: "/configuration/language",
        icon: "language",
        show_on_main_menu: true,
        layout: "MainLayout",
        parent: "configuration",
        group: "main_nav",
        component: () => LanguagePage('front'),
        permission: ['edit', 'publish']
    },
    ['configuration.translation']: {
        id: "configuration.translation",
        name: <Translate id={`side_nav.configuration.translation`}/>,
        url: "/configuration/translation",
        icon: "translate",
        show_on_main_menu: true,
        parent: "configuration",
        group: "main_nav",
        component: TranslatePage,
        layout: "MainLayout",
        permission: ['edit', 'publish']
    },
    user: {
        id: "user",
        name: <Translate id={`side_nav.user.main`}/>,
        url: "/user",
        icon: 'people',
        show_on_main_menu: true,
        layout: "MainLayout",
        parent: "",
        group: "main_nav"
    },
    ['user.management']: {
        id: "user.management",
        name: <Translate id={`side_nav.user.management`}/>,
        url: "/user/management",
        icon: 'group_add',
        show_on_main_menu: true,
        component: UserManagementPage,
        layout: "MainLayout",
        parent: "user",
        group: "main_nav",
        permission: ['edit', 'delete']
    },
    ['user.management.detail']: {
        id: "user.management.detail",
        name: <Translate id={`side_nav.user.management`}/>,
        url: "/user/management/detail/:id?",
        icon: 'group_add',
        show_on_main_menu: false,
        component: UserFormPage,
        layout: "MainLayout",
        parent: "",
        group: "",
        permissionCheckWith: "user.management",
        permission: ['edit', 'delete']
    },
    ['user.log']: {
        id: "user.log",
        name: <Translate id={`side_nav.user.log`}/>,
        url: "/user/log",
        icon: 'library_books',
        show_on_main_menu: true,
        component: UserLogPage,
        layout: "MainLayout",
        parent: "user",
        group: "main_nav",
        permission: ['edit']
    },
    static: {
        id: "static",
        name: <Translate id={`side_nav.static.main`}/>,
        url: "/static",
        icon: 'dynamic_feed',
        show_on_main_menu: true,
        layout: "MainLayout",
        parent: "",
        group: "main_nav"
    },
    ['static.content']: {
        id: "static.content",
        name: <Translate id={`side_nav.static.content`}/>,
        url: "/static/content",
        icon: 'web',
        show_on_main_menu: true,
        component: StaticListPage,
        layout: "MainLayout",
        parent: "static",
        group: "main_nav",
        permission: ['edit', 'delete', 'publish']
    },
    ['static.file_manager']: {
        id: "static.file_manager",
        name: <Translate id={`side_nav.static.file_manager`}/>,
        url: "/static/file_manager",
        icon: 'folder',
        show_on_main_menu: true,
        component: FileManagerPage,
        layout: "MainLayout",
        parent: "static",
        group: "main_nav",
        permission: ['delete']
    },
    [WEB_CONTENT.BANNER]: {
        id: WEB_CONTENT.BANNER,
        name: <Translate id={`side_nav.${WEB_CONTENT.BANNER}`}/>,
        url: "/static/banner",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.BANNER,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "static",
        group: "main_nav"
    },
    [`${WEB_CONTENT.BANNER}.detail`]: {
        id: `${WEB_CONTENT.BANNER}.detail`,
        name: <Translate id={`side_nav.${WEB_CONTENT.BANNER}`}/>,
        url: "/static/banner/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.BANNER,
            config: {
                hasPublishPeriod: true,
                pic: {
                    fieldProp: {
                        label: <Translate id="global.image_thai"/>,
                        width: 1366,
                        height: 668,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                pic_mobile: {
                    fieldProp: {
                        label: <Translate id="global.image_mobile_tha"/>,
                        width: 700,
                        height: 1050,
                    }
                },
                pic_en: {
                    fieldProp: {
                        label: <Translate id="global.image_eng"/>,
                        width: 1366,
                        height: 668,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                pic_mobile_en: {
                    fieldProp: {
                        label: <Translate id="global.image_mobile_eng"/>,
                        width: 700,
                        height: 1050,
                    }
                },
                video_link: {
                    fieldProp: {
                        label: <Translate id="global.video"/>,
                        isIframe: true
                    }
                },
                action_link: {
                    fieldProp: {
                        label: <Translate id="global.link"/>,
                        fieldDescription: <Translate id="global.link_replacement"/>
                    }
                },
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                }
            }
        }),
    },
    [WEB_CONTENT.STICKY_MENU]: {
        id: WEB_CONTENT.STICKY_MENU,
        name: <Translate id={`side_nav.${WEB_CONTENT.STICKY_MENU}`}/>,
        url: "/static/sticky_menu",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.STICKY_MENU,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "static",
        group: "main_nav"
    },
    [`${WEB_CONTENT.STICKY_MENU}.detail`]: {
        id: `${WEB_CONTENT.STICKY_MENU}.detail`,
        name: <Translate id={`side_nav.${WEB_CONTENT.STICKY_MENU}`}/>,
        url: "/static/sticky_menu/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.STICKY_MENU,
            config: {
                hasPublishPeriod: true,
                pic: {
                    fieldProp: {
                        label: <Translate id="global.image"/>,
                        width: 125,
                        height: 125,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                action_link: {
                    fieldProp: {
                        label: <Translate id="global.link"/>,
                        fieldDescription: <Translate id="global.link_replacement"/>
                    }
                },
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
            }
        }),
    },
    [WEB_CONTENT.SERVICE]: {
        id: WEB_CONTENT.SERVICE,
        name: <Translate id={`side_nav.${WEB_CONTENT.SERVICE}`}/>,
        url: "/static/service",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.SERVICE,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "static",
        group: "main_nav"
    },
    [`${WEB_CONTENT.SERVICE}.detail`]: {
        id: `${WEB_CONTENT.SERVICE}.detail`,
        name: <Translate id={`side_nav.${WEB_CONTENT.SERVICE}`}/>,
        url: "/static/service/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.SERVICE,
            config: {
                hasPublishPeriod: true,
                pic: {
                    fieldProp: {
                        label: <Translate id="global.image"/>,
                        width: 125,
                        height: 125,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                action_link: {
                    fieldProp: {
                        label: <Translate id="global.link"/>,
                        fieldDescription: <Translate id="global.link_replacement"/>
                    }
                },
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                sub_title: {
                    fieldProp: {
                        label: <Translate id="global.sub_title"/>,
                        required: true,
                    }
                },
            }
        }),
    },
    [WEB_CONTENT.REVIEW]: {
        id: WEB_CONTENT.REVIEW,
        name: <Translate id={`side_nav.${WEB_CONTENT.REVIEW}`}/>,
        url: "/static/review",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.REVIEW
        }),
        layout: "MainLayout",
        parent: "static",
        group: "main_nav"
    },
    [`${WEB_CONTENT.REVIEW}.detail`]: {
        id: `${WEB_CONTENT.REVIEW}.detail`,
        name: <Translate id={`side_nav.${WEB_CONTENT.REVIEW}`}/>,
        url: "/static/review/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.REVIEW,
            config: {
                hasPublishPeriod: true,
                pic: {
                    fieldProp: {
                        label: <Translate id="global.image"/>,
                        width: 125,
                        height: 125,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                action_link: {
                    fieldProp: {
                        label: <Translate id={`global.rating`}/>
                    }
                },
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                sub_title: {
                    fieldProp: {
                        label: <Translate id={`side_nav.static.review`}/>,
                        multiline: true,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
            }
        }),
    },
    [WEB_CONTENT.SOCIAL]: {
        id: WEB_CONTENT.SOCIAL,
        name: <Translate id={`side_nav.${WEB_CONTENT.SOCIAL}`}/>,
        url: "/static/social",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.SOCIAL,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "static",
        group: "main_nav"
    },
    [`${WEB_CONTENT.SOCIAL}.detail`]: {
        id: `${WEB_CONTENT.SOCIAL}.detail`,
        name: <Translate id={`side_nav.${WEB_CONTENT.SOCIAL}`}/>,
        url: "/static/social/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.SOCIAL,
            config: {
                hasPublishPeriod: true,
                icon: {
                    fieldProp: {
                        label: <Translate id="global.image"/>,
                        icons: ['icofont icofont-500px', 'icofont icofont-aim', 'icofont icofont-badoo', 'icofont icofont-baidu-tieba', 'icofont icofont-bbm-messenger', 'icofont icofont-bebo', 'icofont icofont-behance', 'icofont icofont-blogger', 'icofont icofont-bootstrap', 'icofont icofont-brightkite', 'icofont icofont-cloudapp', 'icofont icofont-concrete5', 'icofont icofont-delicious', 'icofont icofont-designbump', 'icofont icofont-designfloat', 'icofont icofont-deviantart', 'icofont icofont-digg', 'icofont icofont-dotcms', 'icofont icofont-dribbble', 'icofont icofont-dribble', 'icofont icofont-dropbox', 'icofont icofont-ebuddy', 'icofont icofont-ello', 'icofont icofont-ember', 'icofont icofont-envato', 'icofont icofont-evernote', 'icofont icofont-facebook-messenger', 'icofont icofont-facebook', 'icofont icofont-feedburner', 'icofont icofont-flikr', 'icofont icofont-folkd', 'icofont icofont-foursquare', 'icofont icofont-friendfeed', 'icofont icofont-ghost', 'icofont icofont-github', 'icofont icofont-gnome', 'icofont icofont-google-buzz', 'icofont icofont-google-hangouts', 'icofont icofont-google-map', 'icofont icofont-google-plus', 'icofont icofont-google-talk', 'icofont icofont-hype-machine', 'icofont icofont-instagram', 'icofont icofont-kakaotalk', 'icofont icofont-kickstarter', 'icofont icofont-kik', 'icofont icofont-kiwibox', 'icofont icofont-line-messenger', 'icofont icofont-line', 'icofont icofont-linkedin', 'icofont icofont-linux-mint', 'icofont icofont-live-messenger', 'icofont icofont-livejournal', 'icofont icofont-magento', 'icofont icofont-meetme', 'icofont icofont-meetup', 'icofont icofont-mixx', 'icofont icofont-newsvine', 'icofont icofont-nimbuss', 'icofont icofont-odnoklassniki', 'icofont icofont-opencart', 'icofont icofont-oscommerce', 'icofont icofont-pandora', 'icofont icofont-photobucket', 'icofont icofont-picasa', 'icofont icofont-pinterest', 'icofont icofont-prestashop', 'icofont icofont-qik', 'icofont icofont-qq', 'icofont icofont-readernaut', 'icofont icofont-reddit', 'icofont icofont-renren', 'icofont icofont-rss', 'icofont icofont-shopify', 'icofont icofont-silverstripe', 'icofont icofont-skype', 'icofont icofont-slack', 'icofont icofont-slashdot', 'icofont icofont-slidshare', 'icofont icofont-smugmug', 'icofont icofont-snapchat', 'icofont icofont-soundcloud', 'icofont icofont-spotify', 'icofont icofont-stack-exchange', 'icofont icofont-stack-overflow', 'icofont icofont-steam', 'icofont icofont-stumbleupon', 'icofont icofont-tagged', 'icofont icofont-technorati', 'icofont icofont-telegram', 'icofont icofont-tinder', 'icofont icofont-trello', 'icofont icofont-tumblr', 'icofont icofont-twitch', 'icofont icofont-twitter', 'icofont icofont-typo3', 'icofont icofont-ubercart', 'icofont icofont-viber', 'icofont icofont-viddler', 'icofont icofont-vimeo', 'icofont icofont-vine', 'icofont icofont-virb', 'icofont icofont-virtuemart', 'icofont icofont-vk', 'icofont icofont-wechat', 'icofont icofont-weibo', 'icofont icofont-whatsapp', 'icofont icofont-xing', 'icofont icofont-yahoo', 'icofont icofont-yelp', 'icofont icofont-youku', 'icofont icofont-youtube', 'icofont icofont-zencart'],
                        isMulti: false,
                    }
                },
                action_link: {
                    fieldProp: {
                        label: <Translate id="global.link"/>
                    }
                },
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
            }
        }),
    },
    product: {
        id: "product",
        name: <Translate id={`side_nav.product.main`}/>,
        url: "/product",
        icon: 'dynamic_feed',
        show_on_main_menu: true,
        layout: "MainLayout",
        parent: "",
        group: "main_nav"
    },
    [WEB_CONTENT.PRODUCT_CATEGORY]: {
        id: WEB_CONTENT.PRODUCT_CATEGORY,
        name: <Translate id={`side_nav.product.category`}/>,
        url: "/product/category",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.PRODUCT_CATEGORY,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "product",
        group: "main_nav"
    },
    [`${WEB_CONTENT.PRODUCT_CATEGORY}.detail`]: {
        id: `${WEB_CONTENT.PRODUCT_CATEGORY}.detail`,
        name: <Translate id={`side_nav.product.category`}/>,
        url: "/product/category/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.PRODUCT_CATEGORY,
            config: {
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
            }
        }),
    },
    [WEB_CONTENT.PRODUCT]: {
        id: WEB_CONTENT.PRODUCT,
        name: <Translate id={`side_nav.product.main`}/>,
        url: "/product/content",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.PRODUCT,
            cat_id: WEB_CONTENT.PRODUCT_CATEGORY,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "product",
        group: "main_nav"
    },
    [`${WEB_CONTENT.PRODUCT}.detail`]: {
        id: `${WEB_CONTENT.PRODUCT}.detail`,
        name: <Translate id={`side_nav.product.main`}/>,
        url: "/product/content/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.PRODUCT,
            config: {
                hasPublishPeriod: true,
                hasSEO: true,
                hasPackage: true,
                friendly_url: {
                    prefix: "/product/"
                },
                pic: {
                    fieldProp: {
                        label: <Translate id="global.image_thai"/>,
                        width: 1366,
                        height: 668,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                pic_en: {
                    fieldProp: {
                        label: <Translate id="global.image_eng"/>,
                        width: 1366,
                        height: 668,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                sub_title: {
                    fieldProp: {
                        label: <Translate id="global.summary"/>,
                        required: true,
                        multiline: true
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                cat_id: {
                    type_id: WEB_CONTENT.PRODUCT_CATEGORY,
                    label: <Translate id="global.category"/>,
                },
                content: {
                    fieldProp: {
                        editor: true,
                        label: <Translate id="global.content"/>
                    }
                },
            }
        }),
    },

    about: {
        id: "about",
        name: <Translate id={`side_nav.about.main`}/>,
        url: "/about",
        icon: 'dynamic_feed',
        show_on_main_menu: true,
        layout: "MainLayout",
        parent: "",
        group: "main_nav"
    },
    [WEB_CONTENT.ABOUT_CATEGORY]: {
        id: WEB_CONTENT.ABOUT_CATEGORY,
        name: <Translate id={`side_nav.about.category`}/>,
        url: "/about/category",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.ABOUT_CATEGORY,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "about",
        group: "main_nav"
    },
    [`${WEB_CONTENT.ABOUT_CATEGORY}.detail`]: {
        id: `${WEB_CONTENT.ABOUT_CATEGORY}.detail`,
        name: <Translate id={`side_nav.about.category`}/>,
        url: "/about/category/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.ABOUT_CATEGORY,
            config: {
                isSortable: true,
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
            }
        }),
    },
    [WEB_CONTENT.ABOUT]: {
        id: WEB_CONTENT.ABOUT,
        name: <Translate id={`side_nav.about.main`}/>,
        url: "/about/content",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.ABOUT,
            cat_id: WEB_CONTENT.ABOUT_CATEGORY,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "about",
        group: "main_nav"
    },
    [`${WEB_CONTENT.ABOUT}.detail`]: {
        id: `${WEB_CONTENT.ABOUT}.detail`,
        name: <Translate id={`side_nav.about.main`}/>,
        url: "/about/content/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.ABOUT,
            config: {
                hasPublishPeriod: true,
                hasSEO: true,
                friendly_url: {
                    prefix: "/about/"
                },
                pic: {
                    fieldProp: {
                        label: <Translate id="global.image_thai"/>,
                        width: 1366,
                        height: 668,
                    }
                },
                pic_mobile: {
                    fieldProp: {
                        label: <Translate id="global.image_mobile_tha"/>,
                        width: 700,
                        height: 1050,
                    }
                },
                pic_en: {
                    fieldProp: {
                        label: <Translate id="global.image_eng"/>,
                        width: 1366,
                        height: 668,
                    }
                },
                pic_mobile_en: {
                    fieldProp: {
                        label: <Translate id="global.image_mobile_eng"/>,
                        width: 700,
                        height: 1050,
                    }
                },
                video_link: {
                    fieldProp: {
                        label: <Translate id="global.video"/>,
                        isIframe: true
                    }
                },
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                cat_id: {
                    type_id: WEB_CONTENT.ABOUT_CATEGORY,
                    label: <Translate id="global.category"/>,
                },
                content: {
                    fieldProp: {
                        editor: true,
                        label: <Translate id="global.content"/>
                    }
                },
            }
        }),
    },

    [WEB_CONTENT.ORGANIZATION]: {
        id: WEB_CONTENT.ORGANIZATION,
        name: <Translate id={`side_nav.about.organization`}/>,
        url: "/about/organization",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.ORGANIZATION,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "about",
        group: "main_nav"
    },
    [`${WEB_CONTENT.ORGANIZATION}.detail`]: {
        id: `${WEB_CONTENT.ORGANIZATION}.detail`,
        name: <Translate id={`side_nav.about.organization`}/>,
        url: "/about/organization/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.ORGANIZATION,
            config: {
                hasPublishPeriod: true,
                pic: {
                    fieldProp: {
                        label: <Translate id="global.image"/>,
                        width: 800,
                        height: 1100,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                title: {
                    fieldProp: {
                        label: <Translate id="global.name"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                sub_title: {
                    fieldProp: {
                        label: <Translate id="global.position"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                content: {
                    fieldProp: {
                        label: <Translate id="global.department"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                }
            }
        }),
    },
    claim: {
        id: "claim",
        name: <Translate id={`side_nav.claim.main`}/>,
        url: "/claim",
        icon: 'dynamic_feed',
        show_on_main_menu: true,
        layout: "MainLayout",
        parent: "",
        group: "main_nav"
    },
    [WEB_CONTENT.CLAIM_CATEGORY]: {
        id: WEB_CONTENT.CLAIM_CATEGORY,
        name: <Translate id={`side_nav.claim.category`}/>,
        url: "/claim/category",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.CLAIM_CATEGORY,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "claim",
        group: "main_nav"
    },
    [`${WEB_CONTENT.CLAIM_CATEGORY}.detail`]: {
        id: `${WEB_CONTENT.CLAIM_CATEGORY}.detail`,
        name: <Translate id={`side_nav.claim.category`}/>,
        url: "/claim/category/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.CLAIM_CATEGORY,
            config: {
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
            }
        }),
    },
    [WEB_CONTENT.CLAIM]: {
        id: WEB_CONTENT.CLAIM,
        name: <Translate id={`side_nav.claim.main`}/>,
        url: "/claim/content",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.CLAIM,
            cat_id: WEB_CONTENT.CLAIM_CATEGORY,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "claim",
        group: "main_nav"
    },
    [`${WEB_CONTENT.CLAIM}.detail`]: {
        id: `${WEB_CONTENT.CLAIM}.detail`,
        name: <Translate id={`side_nav.claim.main`}/>,
        url: "/claim/content/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.CLAIM,
            config: {
                hasPublishPeriod: true,
                hasSEO: true,
                isSortable: true,
                friendly_url: {
                    prefix: "/claim/"
                },
                pic: {
                    fieldProp: {
                        label: <Translate id="global.image_thai"/>,
                        width: 1366,
                        height: 668,
                    }
                },
                pic_mobile: {
                    fieldProp: {
                        label: <Translate id="global.image_mobile_tha"/>,
                        width: 700,
                        height: 1050,
                    }
                },
                pic_en: {
                    fieldProp: {
                        label: <Translate id="global.image_eng"/>,
                        width: 1366,
                        height: 668,
                    }
                },
                pic_mobile_en: {
                    fieldProp: {
                        label: <Translate id="global.image_mobile_eng"/>,
                        width: 700,
                        height: 1050,
                    }
                },
                video_link: {
                    fieldProp: {
                        label: <Translate id="global.video"/>,
                        isIframe: true
                    }
                },
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                cat_id: {
                    type_id: WEB_CONTENT.CLAIM_CATEGORY,
                    label: <Translate id="global.category"/>,
                },
                content: {
                    fieldProp: {
                        editor: true,
                        label: <Translate id="global.content"/>
                    }
                },
            }
        }),
    },
    partner: {
        id: "partner",
        name: <Translate id={`side_nav.partner.main`}/>,
        url: "/partner",
        icon: 'dynamic_feed',
        show_on_main_menu: true,
        layout: "MainLayout",
        parent: "",
        group: "main_nav"
    },
    [WEB_CONTENT.HOSPITAL_CATEGORY]: {
        id: WEB_CONTENT.HOSPITAL_CATEGORY,
        name: <Translate id={`side_nav.partner.hospital_category`}/>,
        url: "/partner/hospital_category",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.HOSPITAL_CATEGORY,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "partner",
        group: "main_nav"
    },
    [`${WEB_CONTENT.HOSPITAL_CATEGORY}.detail`]: {
        id: `${WEB_CONTENT.HOSPITAL_CATEGORY}.detail`,
        name: <Translate id={`side_nav.partner.hospital_category`}/>,
        url: "/partner/hospital_category/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.HOSPITAL_CATEGORY,
            config: {
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
            }
        }),
    },
    [WEB_CONTENT.HOSPITAL]: {
        id: WEB_CONTENT.HOSPITAL,
        name: <Translate id={`side_nav.${WEB_CONTENT.HOSPITAL}`}/>,
        url: "/partner/hospital",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => PartnerPage({
            type_id: WEB_CONTENT.HOSPITAL
        }),
        layout: "MainLayout",
        parent: "partner",
        group: "main_nav"
    },
    [`${WEB_CONTENT.HOSPITAL}.detail`]: {
        id: `${WEB_CONTENT.HOSPITAL}.detail`,
        name: <Translate id={`side_nav.${WEB_CONTENT.HOSPITAL}`}/>,
        url: "/partner/hospital/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => PartnerMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.HOSPITAL,
            config: {
                hasPublishPeriod: true,
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                address: {
                    fieldProp: {
                        label: <Translate id="global.address"/>,
                        multiline: true,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                province: {
                    label: <Translate id="global.province"/>,
                    required: true,
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                tel: {
                    fieldProp: {
                        label: <Translate id="global.tel"/>,
                        required: true,
                    }
                },
                website: {
                    fieldProp: {
                        label: <Translate id="global.website"/>,
                        required: true,
                    }
                },
                location: {
                    fieldProp: {
                        label: <Translate id="global.location"/>,
                        required: true,
                    }
                },
                cat_id: {
                    type_id: WEB_CONTENT.HOSPITAL_CATEGORY,
                    label: <Translate id={`side_nav.partner.hospital_category`}/>,
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                partner_language: {
                    fieldProp: {
                        label: <Translate id="language.language"/>,
                        required: true,
                    }
                },
            }
        }),
    },
    [WEB_CONTENT.GARAGE_CATEGORY]: {
        id: WEB_CONTENT.GARAGE_CATEGORY,
        name: <Translate id={`side_nav.partner.garage_category`}/>,
        url: "/partner/garage_category",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.GARAGE_CATEGORY,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "partner",
        group: "main_nav"
    },
    [`${WEB_CONTENT.GARAGE_CATEGORY}.detail`]: {
        id: `${WEB_CONTENT.GARAGE_CATEGORY}.detail`,
        name: <Translate id={`side_nav.partner.garage_category`}/>,
        url: "/partner/garage_category/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.GARAGE_CATEGORY,
            config: {
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
            }
        }),
    },
    [WEB_CONTENT.GARAGE]: {
        id: WEB_CONTENT.GARAGE,
        name: <Translate id={`side_nav.${WEB_CONTENT.GARAGE}`}/>,
        url: "/partner/garage",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => PartnerPage({
            type_id: WEB_CONTENT.GARAGE
        }),
        layout: "MainLayout",
        parent: "partner",
        group: "main_nav"
    },
    [`${WEB_CONTENT.GARAGE}.detail`]: {
        id: `${WEB_CONTENT.GARAGE}.detail`,
        name: <Translate id={`side_nav.${WEB_CONTENT.GARAGE}`}/>,
        url: "/partner/garage/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => PartnerMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.GARAGE,
            config: {
                hasPublishPeriod: true,
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                address: {
                    fieldProp: {
                        label: <Translate id="global.address"/>,
                        multiline: true,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                province: {
                    label: <Translate id="global.province"/>,
                    required: true,
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                tel: {
                    fieldProp: {
                        label: <Translate id="global.tel"/>,
                        required: true,
                    }
                },
                website: {
                    fieldProp: {
                        label: <Translate id="global.website"/>,
                        required: true,
                    }
                },
                cat_id: {
                    type_id: WEB_CONTENT.GARAGE_CATEGORY,
                    label: <Translate id={`side_nav.partner.garage_category`}/>,
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                }
            }
        }),
    },
    [WEB_CONTENT.SERVICE_CENTER_CATEGORY]: {
        id: WEB_CONTENT.SERVICE_CENTER_CATEGORY,
        name: <Translate id={`side_nav.partner.service_center_category`}/>,
        url: "/partner/service_center_category",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.SERVICE_CENTER_CATEGORY,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "partner",
        group: "main_nav"
    },
    [`${WEB_CONTENT.SERVICE_CENTER_CATEGORY}.detail`]: {
        id: `${WEB_CONTENT.SERVICE_CENTER_CATEGORY}.detail`,
        name: <Translate id={`side_nav.partner.service_center_category`}/>,
        url: "/partner/service_center_category/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.SERVICE_CENTER_CATEGORY,
            config: {
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
            }
        }),
    },
    [WEB_CONTENT.SERVICE_CENTER]: {
        id: WEB_CONTENT.SERVICE_CENTER,
        name: <Translate id={`side_nav.${WEB_CONTENT.SERVICE_CENTER}`}/>,
        url: "/partner/service_center",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => PartnerPage({
            type_id: WEB_CONTENT.SERVICE_CENTER
        }),
        layout: "MainLayout",
        parent: "partner",
        group: "main_nav"
    },
    [`${WEB_CONTENT.SERVICE_CENTER}.detail`]: {
        id: `${WEB_CONTENT.SERVICE_CENTER}.detail`,
        name: <Translate id={`side_nav.${WEB_CONTENT.SERVICE_CENTER}`}/>,
        url: "/partner/service_center/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => PartnerMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.SERVICE_CENTER,
            config: {
                hasPublishPeriod: true,
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                address: {
                    fieldProp: {
                        label: <Translate id="global.address"/>,
                        multiline: true,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                province: {
                    label: <Translate id="global.province"/>,
                    required: true,
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                tel: {
                    fieldProp: {
                        label: <Translate id="global.tel"/>,
                        required: true,
                    }
                },
                website: {
                    fieldProp: {
                        label: <Translate id="global.website"/>,
                        required: true,
                    }
                },
                cat_id: {
                    type_id: WEB_CONTENT.SERVICE_CENTER_CATEGORY,
                    label: <Translate id={`side_nav.partner.service_center_category`}/>,
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                }
            }
        }),
    },
    article: {
        id: "article",
        name: <Translate id={`side_nav.article.main`}/>,
        url: "/article",
        icon: 'dynamic_feed',
        show_on_main_menu: true,
        layout: "MainLayout",
        parent: "",
        group: "main_nav"
    },
    [WEB_CONTENT.ARTICLE_CATEGORY]: {
        id: WEB_CONTENT.ARTICLE_CATEGORY,
        name: <Translate id={`side_nav.article.category`}/>,
        url: "/article/category",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.ARTICLE_CATEGORY,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "article",
        group: "main_nav"
    },
    [`${WEB_CONTENT.ARTICLE_CATEGORY}.detail`]: {
        id: `${WEB_CONTENT.ARTICLE_CATEGORY}.detail`,
        name: <Translate id={`side_nav.article.category`}/>,
        url: "/article/category/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.ARTICLE_CATEGORY,
            config: {
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
            }
        }),
    },
    [WEB_CONTENT.ARTICLE]: {
        id: WEB_CONTENT.ARTICLE,
        name: <Translate id={`side_nav.article.main`}/>,
        url: "/article/content",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.ARTICLE,
            cat_id: WEB_CONTENT.ARTICLE_CATEGORY,
        }),
        layout: "MainLayout",
        parent: "article",
        group: "main_nav"
    },
    [`${WEB_CONTENT.ARTICLE}.detail`]: {
        id: `${WEB_CONTENT.ARTICLE}.detail`,
        name: <Translate id={`side_nav.article.main`}/>,
        url: "/article/content/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.ARTICLE,
            config: {
                hasPublishPeriod: true,
                hasSEO: true,
                friendly_url: {
                    prefix: "/article/"
                },
                pic: {
                    fieldProp: {
                        label: <Translate id="global.image"/>,
                        width: 960,
                        height: 530,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                action_date: {
                    fieldProp: {
                        label: <Translate id="global.action_date"/>,
                        required: true,
                    },
                },
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                sub_title: {
                    fieldProp: {
                        label: <Translate id="global.sub_title"/>,
                        required: true,
                        multiline: true
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                cat_id: {
                    type_id: WEB_CONTENT.ARTICLE_CATEGORY,
                    label: <Translate id="global.category"/>,
                },
                content: {
                    fieldProp: {
                        editor: true,
                        label: <Translate id="global.content"/>
                    }
                },
            }
        }),
    },
    news: {
        id: "news",
        name: <Translate id={`side_nav.news.main`}/>,
        url: "/news",
        icon: 'dynamic_feed',
        show_on_main_menu: true,
        layout: "MainLayout",
        parent: "",
        group: "main_nav"
    },
    [WEB_CONTENT.NEWS_CATEGORY]: {
        id: WEB_CONTENT.NEWS_CATEGORY,
        name: <Translate id={`side_nav.news.category`}/>,
        url: "/news/category",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.NEWS_CATEGORY,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "news",
        group: "main_nav"
    },
    [`${WEB_CONTENT.NEWS_CATEGORY}.detail`]: {
        id: `${WEB_CONTENT.NEWS_CATEGORY}.detail`,
        name: <Translate id={`side_nav.news.category`}/>,
        url: "/news/category/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.NEWS_CATEGORY,
            config: {
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
            }
        }),
    },
    [WEB_CONTENT.NEWS]: {
        id: WEB_CONTENT.NEWS,
        name: <Translate id={`side_nav.news.main`}/>,
        url: "/news/content",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.NEWS,
            cat_id: WEB_CONTENT.NEWS_CATEGORY,
        }),
        layout: "MainLayout",
        parent: "news",
        group: "main_nav"
    },
    [`${WEB_CONTENT.NEWS}.detail`]: {
        id: `${WEB_CONTENT.NEWS}.detail`,
        name: <Translate id={`side_nav.news.main`}/>,
        url: "/news/content/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.NEWS,
            config: {
                hasPublishPeriod: true,
                hasSEO: true,
                friendly_url: {
                    prefix: "/news/"
                },
                pic: {
                    fieldProp: {
                        label: <Translate id="global.image"/>,
                        width: 960,
                        height: 530,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                action_date: {
                    fieldProp: {
                        label: <Translate id="global.action_date"/>,
                        required: true,
                    },
                },
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                sub_title: {
                    fieldProp: {
                        label: <Translate id="global.sub_title"/>,
                        required: true,
                        multiline: true
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                cat_id: {
                    type_id: WEB_CONTENT.NEWS_CATEGORY,
                    label: <Translate id="global.category"/>,
                },
                content: {
                    fieldProp: {
                        editor: true,
                        label: <Translate id="global.content"/>
                    }
                },
            }
        }),
    },
    contact: {
        id: 'contact',
        name: <Translate id={`side_nav.contact`}/>,
        url: "/contact",
        icon: 'phone_in_talk',
        show_on_main_menu: true,
        layout: "MainLayout",
        parent: "",
        group: "main_nav",
        component: ContactPage,
        permission: ['delete']
    },
    faq_contact : {
        id: "faq_contact",
        name: <Translate id={`side_nav.faq.main`}/>,
        url: "/faq",
        icon: 'dynamic_feed',
        show_on_main_menu: true,
        layout: "MainLayout",
        parent: "",
        group: "main_nav"
    },
    [WEB_CONTENT.FAQ_CONTACT_CATEGORY]: {
        id: WEB_CONTENT.FAQ_CONTACT_CATEGORY,
        name: <Translate id={`side_nav.faq.category`}/>,
        url: "/faq/category",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.FAQ_CONTACT_CATEGORY,
            config: {
                isSortable: true,
            }
        }),
        layout: "MainLayout",
        parent: "faq_contact",
        group: "main_nav"
    },
    [`${WEB_CONTENT.FAQ_CONTACT_CATEGORY}.detail`]: {
        id: `${WEB_CONTENT.FAQ_CONTACT_CATEGORY}.detail`,
        name: <Translate id={`side_nav.faq.category`}/>,
        url: "/faq/category/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.FAQ_CONTACT_CATEGORY,
            config: {
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
            }
        }),
    },
    [WEB_CONTENT.FAQ_CONTACT]: {
        id: WEB_CONTENT.FAQ_CONTACT,
        name: <Translate id={`side_nav.faq.main`}/>,
        url: "/faq_contact",
        icon: 'view_carousel',
        show_on_main_menu: true,
        component: () => WebContentPage({
            type_id: WEB_CONTENT.FAQ_CONTACT,
            cat_id: WEB_CONTENT.FAQ_CONTACT_CATEGORY,
        }),
        layout: "MainLayout",
        parent: "faq_contact",
        group: "main_nav"
    },
    [`${WEB_CONTENT.FAQ_CONTACT}.detail`]: {
        id: `${WEB_CONTENT.FAQ}.detail`,
        name: <Translate id={`side_nav.faq.main`}/>,
        url: "/faq_contact/detail/:id?",
        icon: 'pets',
        show_on_main_menu: false,
        layout: "MainLayout",
        parent: "",
        group: "",
        component: () => WebContentMainStep({
            isWebContent: true,
            type_id: WEB_CONTENT.FAQ_CONTACT,
            config: {
                title: {
                    fieldProp: {
                        label: <Translate id="global.title"/>,
                        required: true,
                    },
                    validate: Yup.string()
                        .required(<Translate id="error_message.required"/>)
                },
                cat_id: {
                    type_id: WEB_CONTENT.FAQ_CONTACT_CATEGORY,
                    label: <Translate id="global.category"/>,
                },
                content: {
                    fieldProp: {
                        editor: true,
                        label: <Translate id="global.content"/>
                    }
                },
            }
        }),
    },
    testing: {
        id: 'testing',
        name: <Translate id={`side_nav.testing.main`}/>,
        url: "/testing",
        icon: 'science',
        show_on_main_menu: true,
        parent: "",
        group: "main_nav",
    },
    testing_email: {
        id: 'testing_email',
        name: <Translate id={`side_nav.testing.email`}/>,
        url: "/testing/email",
        icon: 'email',
        show_on_main_menu: true,
        layout: "MainLayout",
        parent: "testing",
        component: TestingEmailPage,
        group: "main_nav",
    }
};

const static_content = {
    home: ['index'],
    page: [
        'article',
        'contact_us',
        'claim',
        'download',
        'garage',
        'hospital',
        'news',
        'pay_insurance_premiums',
        'payment_error',
        'payment_pending',
        'payment_reject',
        'payment_thank_you',
        'privacy',
        'service_center',
        'terms'
    ],
    meta: [],
    email: []
}
const config = {
    home: {
        hasSEO: true,
        hasPublishPeriod: true,
        hasPreview: true,
        title: {
            validate: Yup.string()
                .required(<Translate id="error_message.required"/>),
            fieldProp: {
                label: <Translate id="global.title"/>,
                required: true
            }
        },
        content: {
            fieldProp: {
                editor: true,
                label: <Translate id="global.content"/>,
            }
        }
    },
    page: {
        hasSEO: true,
        hasPublishPeriod: true,
        hasPreview: true,
        pic: {
            fieldProp: {
                label: <Translate id="global.image_thai"/>,
                width: 1366,
                height: 668,
            }
        },
        pic_mobile: {
            fieldProp: {
                label: <Translate id="global.image_mobile_tha"/>,
                width: 700,
                height: 1050,
            }
        },
        pic_en: {
            fieldProp: {
                label: <Translate id="global.image_eng"/>,
                width: 1366,
                height: 668,
            }
        },
        pic_mobile_en: {
            fieldProp: {
                label: <Translate id="global.image_mobile_eng"/>,
                width: 700,
                height: 1050,
            }
        },
        title: {
            validate: Yup.string()
                .required(<Translate id="error_message.required"/>),
            fieldProp: {
                label: <Translate id="global.title"/>,
                required: true
            }
        },
        video_link: {
            fieldProp: {
                label: <Translate id="global.video"/>,
                isIframe: true
            }
        },
        content: {
            fieldProp: {
                editor: true,
                label: <Translate id="global.content"/>,
            }
        }
    },
    meta: {
        hasSEO: true,
        pic: {
            fieldProp: {
                label: <Translate id="global.image"/>,
                width: 1366,
                height: 668,
            }
        },
        pic_mobile: {
            fieldProp: {
                label: <Translate id="global.image"/>,
                width: 700,
                height: 1050,
            }
        },
        video_link: {
            fieldProp: {
                label: <Translate id="global.video"/>,
                isIframe: true
            }
        },
    },
    email: {
        hasPreview: true,
        title: {
            validate: Yup.string()

                .required(<Translate id="error_message.required"/>),
            fieldProp: {
                required: true,
                label: <Translate id="global.title"/>,
            }
        },
        content: {
            fieldProp: {
                editor: true,
                label: <Translate id="global.content"/>
            }
        }
    }
}

Object.keys(static_content).map(k => {
    static_content[k].map(v => {
        const id = `static.${k}.${v}`;
        APP_ROUTE[id] = {
            id: id,
            url: "/static/content/" + id,
            icon: 'dynamic_feed',
            show_on_main_menu: false,
            layout: "MainLayout",
            parent: "static.content",
            group: k,
            name: <Translate id={`side_nav.${id}`}/>,
            component: () => WebContentMainStep({type_id: id, config: config[k]}),
        }
    });
});

export default APP_ROUTE;
