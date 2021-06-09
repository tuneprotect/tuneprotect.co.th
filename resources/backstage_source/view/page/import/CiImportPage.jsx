import React from "react";
import {Icon, makeStyles} from "@material-ui/core";
import {isValid, parse} from 'date-fns'
import globalStyle from "../../../asset/jss/standard";
import ImportAction from "../../component/data_display/ImportAction";
import {useTranslation} from "react-i18next";
import {API_URL_LIST} from "../../../config/config";
import {ValidateEmail} from "../../../asset/lib/FormHelper";
import APP_ROUTE from "../../../config/route";
import {useHistory} from "react-router-dom";
import SpeedMenu from "../../component/SpeedMenu";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme),
}));
export default function CiImportPage() {
    const classes = useStyles();
    const {t} = useTranslation();
    const history = useHistory();
    const columns = [
        {
            field: "no",
            title: 'no',
            validate: function (value) {
                return !!value;
            },
            errorText: "participant.validate.doc_no",
        },{
            field: "code",
            title: 'code'
        },{
            field: "value",
            title: 'value',
        }];

    const handleImportDone = (response) => {
        console.log('a');
    }

    return <ImportAction type_id="participant.list" importUrl={API_URL_LIST.importCi} columns={columns}
                      onImportDone={handleImportDone}/>

}
