// Type

import {STORAGE} from "../../config/config";

export const SystemConstants = {
    CHANGE_DRAWER_STATUS: 'CHANGE_DRAWER_STATUS',
    CHANGE_MAIN_TITLE: 'CHANGE_MAIN_TITLE',
    CHANGE_MAIN_ICON: 'CHANGE_MAIN_ICON',
    CHANGE_ADMIN_DATA: 'CHANGE_ADMIN_DATA',
    CHANGE_LANGUAGE_SUPPORT: 'CHANGE_LANGUAGE_SUPPORT',
    SHOW_ALERT: 'SHOW_ALERT',
    SHOW_LOADING: 'SHOW_LOADING',
    CHANGE_PUBLISH_DATA: 'CHANGE_PUBLISH_DATA',
    TOGGLE_SIDEBAR_OPEN: 'TOGGLE_SIDEBAR_OPEN'
};

let initAdminData = {
    admin_id: null,
    first_name: null,
    last_name: null,
    email: null,
    password_expire: null,
    role: null,
    lang: null,
    accessToken: null,

};

let initLanguageSupport = {};

const adminDataFromStorage = localStorage.getItem(STORAGE.MEMBER_DATA);

if (adminDataFromStorage != null) {
    initAdminData = {...initAdminData, ...JSON.parse(adminDataFromStorage)}
}

const languageSupportFromStorage = localStorage.getItem(STORAGE.LANGUAGE_SUPPORT);
if (languageSupportFromStorage != null) {
    initLanguageSupport = {...initLanguageSupport, ...JSON.parse(languageSupportFromStorage)}
}

// Reducer
const initialState = {
    drawerOpenStatus: true,
    mainTitle: "",
    mainIcon: "",
    adminData: initAdminData,
    languageSupport: initLanguageSupport,
    showAlert: {
        open: false,
        severity: 'info',
        text: ''
    },
    sidebar: [],
    showLoading: false,
    unPublishData: {}
};


export const changeDrawerStatus = (status) => ({
    type: SystemConstants.CHANGE_DRAWER_STATUS,
    status
});

export const changeMainTitle = (title) => ({
    type: SystemConstants.CHANGE_MAIN_TITLE,
    title
});

export const changeMainIcon = (icon) => ({
    type: SystemConstants.CHANGE_MAIN_ICON,
    icon
});

export const changeAdminData = (payLoad) => ({
    type: SystemConstants.CHANGE_ADMIN_DATA,
    payload: payLoad
});

export const changeLanguageSupport = (payLoad) => ({
    type: SystemConstants.CHANGE_LANGUAGE_SUPPORT,
    payload: payLoad
});

export const changeShowAlertStatus = (payLoad) => ({
    type: SystemConstants.SHOW_ALERT,
    payload: payLoad
});

export const changeLoadingStatus = (payLoad) => ({
    type: SystemConstants.SHOW_LOADING,
    payload: payLoad
});

export const changePublishData = (payLoad) => ({
    type: SystemConstants.CHANGE_PUBLISH_DATA,
    payload: payLoad
});

export const toggleSidebarOpen = (payLoad) => ({
    type: SystemConstants.TOGGLE_SIDEBAR_OPEN,
    payload: payLoad
});


export function systemReducer(state = initialState, action) {
    switch (action.type) {
        case SystemConstants.CHANGE_DRAWER_STATUS: {
            return {
                ...state,
                drawerOpenStatus: action.status
            }
        }
        case SystemConstants.CHANGE_MAIN_TITLE: {
            return {
                ...state,
                mainTitle: action.title
            }
        }
        case SystemConstants.CHANGE_MAIN_ICON: {
            return {
                ...state,
                mainIcon: action.icon
            }
        }
        case SystemConstants.CHANGE_ADMIN_DATA: {
            localStorage.setItem(STORAGE.MEMBER_DATA, JSON.stringify({...state.adminData, ...action.payload}));
            return {
                ...state,
                adminData: {...state.adminData, ...action.payload}
            }
        }
        case SystemConstants.CHANGE_LANGUAGE_SUPPORT: {
            localStorage.setItem(STORAGE.LANGUAGE_SUPPORT, JSON.stringify({...state.languageSupport, ...action.payload}));
            return {
                ...state,
                languageSupport: {...state.languageSupport, ...action.payload}
            }
        }
        case SystemConstants.SHOW_ALERT: {
            return {
                ...state,
                showAlert: {...state.showAlert, ...action.payload}
            }
        }
        case SystemConstants.SHOW_LOADING: {
            return {
                ...state,
                showLoading: action.payload
            }
        }
        case SystemConstants.CHANGE_PUBLISH_DATA: {
            return {
                ...state,
                unPublishData: action.payload
            }
        }
        case SystemConstants.TOGGLE_SIDEBAR_OPEN: {

            let newSidebar = [];
            if (state.sidebar.includes(action.payload)) {
                newSidebar = state.sidebar.filter(v => v !== action.payload);
            } else {
                newSidebar = [...state.sidebar, action.payload];
            }

            return {
                ...state,
                sidebar: newSidebar
            }
        }

        default:
            return state
    }
}
