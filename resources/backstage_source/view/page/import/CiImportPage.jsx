import React, {useEffect, useState} from "react";
import {Icon, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
import {isValid, parse} from 'date-fns'
import globalStyle from "../../../asset/jss/standard";
import ImportAction from "../../component/data_display/ImportAction";
import {useTranslation} from "react-i18next";
import {API_STATUS_RESULT, API_URL_LIST, WEB_CONTENT} from "../../../config/config";
import {calInitValidation, connectAPI, ValidateEmail} from "../../../asset/lib/FormHelper";
import APP_ROUTE from "../../../config/route";
import {useHistory} from "react-router-dom";
import SpeedMenu from "../../component/SpeedMenu";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import {useFormik} from "formik";
import * as initial from "lodash";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme),
}));


export default function CiImportPage({type_id, config, fromDB, onSubmit, isSave, setSave}) {

    const classes = useStyles();
    const {t, i18n} = useTranslation();
    const [category, setCategory] = useState([]);
    const [channel, setChannel] = useState("");

    const arr = ['plan_code', 'age_range', 'addb', 'cancer', 'hc', 'nc', 'cvd', 'organ', 'trauma', 'diabetes', 'net_premium',
        'duty', 'gross_premium', 'early_stage', 'late_stage', 'diablete', 'hospital_cash', 'nursing_cash', 'pa',
        'mso', 'health2go', 'channel', 'tax_deduct'];


    const columns = arr.map((col) => {
        let field = {
            field: col,
            title: col,
            errorText: `import.ci.validate.${col}`,
        }

        switch (col) {
            case 'plan_code':
            case 'age_range':
                field = {
                    ...field, validate: (value) => {
                        return !!value;
                    }
                }
                break;
            case 'diabetes':
            case 'addb':
            case 'cancer':
            case 'hc':
            case 'nc':
            case 'cvd':
            case 'organ':
            case 'trauma':
            // case 'sum_insured_7':
            // case 'sum_insured_8':
                field = {
                    ...field, validate: (value) => {
                        return ['Y', 'N'].includes(value)
                    }
                }
                break;
            case 'net_premium':
            case 'gross_premium':
            case 'early_stage':
            case 'late_stage':
            case 'diablete':
            case 'hospital_cash':
            case 'nursing_cash':
            case 'pa':
                field = {
                    ...field, validate: (value) => {
                        return !isNaN(value);
                    }
                }
                break
        }


        return field;
    })

    useEffect(() => {

        (async () => {
            const response = await connectAPI(API_URL_LIST.webContentGetAll, {
                data: {type_id: WEB_CONTENT.IMPORT_CI_CATEGORY},
                showStatus: false,
                showLoading: false
            })
            if (response.status === API_STATUS_RESULT.SUCCESS) {
                setCategory(response.result);
            }
        })();

    }, []);

    const handleImportDone = (response) => {
        console.log('Done');
    }

    return <>
        {console.log(channel)}
        <ImportAction type_id={channel} importUrl={API_URL_LIST.importCi} columns={columns}
                      onImportDone={handleImportDone}>
            <FormControl required style={{display: "block"}} className={"MuiFormControl-marginNormal"}
                         error={channel === ""}
            >
                <InputLabel id="channel">
                    {t('global.channel')}
                </InputLabel>
                <Select
                    labelId="channel"
                    id="channel"
                    name="channel"
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                    style={{width: "100%"}}
                >
                    <MenuItem value=""> <em>{t('global.none')}</em> </MenuItem>
                    {category.map(v => <MenuItem key={v.code}
                                                 value={v.code}>{v.locales[i18n.language].title}</MenuItem>)}
                </Select>
                <FormHelperText>{channel === "" ? t('global.channel') : ''}</FormHelperText>
            </FormControl>

        </ImportAction>

    </>

}
