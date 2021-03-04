import React from "react";
import * as Yup from "yup";
import {ROLE} from "../../config/config";
import store from '../../store/index';
import Translate from "../../view/component/Translate";
import {changeLoadingStatus, changeShowAlertStatus} from "../../store/system/SystemReducer";
import APP_ROUTE from "../../config/route";

const defaultValue = {
    parent_id: 0,
    partner_language: {
        en : false,
        th : false
    }
}

export const calInitValidation = (config, languageSupport = {}, mainField = [], localeField = []) => {
    let obj = {
        value: {},
        schema: {}
    };

    let localeSchema = {};
    let allLocaleSchema = {};
    let mainSchema = {};

    mainField.map(v => obj.value[v] = defaultValue[v] !== undefined ? defaultValue[v] : '');
    Object.keys(config).map(k => {
        if (localeField.indexOf(k) !== -1) {
            Object.values(languageSupport).map(v => {
                if (config[k].validate !== undefined) {
                    localeSchema[k] = config[k].validate;
                }
            });
        } else if (config[k].validate !== undefined) {
            mainSchema[k] = config[k].validate;
        }
    });


    if (localeField.length > 0) {
        Object.values(languageSupport).map(v => {
            if (v.enable === 1) {
                allLocaleSchema[v.code] = Yup.object().shape(localeSchema);
            }
        });

        obj.schema = Yup.object().shape({
            ...mainSchema,
            locales: Yup.object().shape(allLocaleSchema)
        });
    } else {
        obj.schema = Yup.object().shape(
            mainSchema
        );
    }

    return obj;
}

export const arrangeValue = (fromDB, languageSupport, mainField, localeField) => {
    let data = {
        locales: {}
    };

    mainField.map(v => {
        data[v] = fromDB?.[v] || (defaultValue[v] !== undefined ? defaultValue[v] : '');
    });

    Object.values(languageSupport).map(v => {
        data.locales[v.code] = {};
        localeField.map(v1 => {
            data.locales[v.code][v1] = fromDB.locales?.[v.code]?.[v1];
        });
    });
    return data;
}

/**
 * @param {*} url
 * @param {{showStatus: boolean,
 *          showLoading: boolean,
 *          data: *,
 *          isUploadFile : boolean
 * }} settings
 */
export const connectAPI = async (url, settings) => {

    const defaultSetting = {
        data: {},
        isUploadFile: false,
        showStatus: true,
        showLoading: true
    };

    let fetchOption = {};

    if (settings.signal) {
        fetchOption = {signal: settings.signal}
    }

    settings = {...defaultSetting, ...settings};

    let headers = {
        Authorization: "Bearer " + store.getState().system.adminData.accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };
    let body;

    if (settings.isUploadFile) {
        delete headers.Accept;
        delete headers['Content-Type'];
        body = settings.data;
    } else {
        body = JSON.stringify(settings.data);
    }

    if (settings.showLoading) {
        store.dispatch(changeLoadingStatus(true));
    }

    let response = null;

    try {
        let res = await fetch(url, {
            method: 'post',
            headers,
            body,
            ...fetchOption
        });
        response = await res.json();

        if (response.message === 'Unauthenticated.') {
            window.location = '/backstage' + APP_ROUTE.logout.url;
            return false;
        }

        if (settings.showStatus && response.message) {
            store.dispatch(changeShowAlertStatus({
                open: true,
                severity: response.status,
                text: <Translate id={Object.keys(response.message)[0]}/>
            }));
        }

    } catch (err) {

        store.dispatch(changeShowAlertStatus({
            open: true,
            severity: 'error',
            text: err.toString()
        }));

        response = {err};
    }
    if (settings.showLoading) {
        store.dispatch(changeLoadingStatus(false));
    }

    return response;
}

export const checkAction = (action) => {
    const role = store.getState().system.adminData.role;
    return role === ROLE.SUPER_ADMIN || role.some(v => v === action);
}

export const ValidateEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
