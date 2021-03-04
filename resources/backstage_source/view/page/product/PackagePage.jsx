import React, {useState} from "react";
import PackageTable from "./PackageTable";
import WebContentMainForm from "../web_content/WebContentMainForm";
import {WEB_CONTENT} from "../../../config/config";
import Translate from "../../component/Translate";
import * as Yup from "yup";
import {Step, StepButton, Stepper} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import {makeStyles} from "@material-ui/core/styles";
import globalStyle from "../../../asset/jss/standard";
import {useTranslation} from "react-i18next";
import FaqPage from "./FaqPage";

const config = {
    pic: {
        fieldProp: {
            label: <Translate id="global.image_mobile"/>,
            width: 100,
            height: 100,
        }
    },
    code: {
        fieldProp: {
            label: <Translate id="global.code"/>,
            required: true,
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
    content: {
        fieldProp: {
            editor: true,
            label: <Translate id="global.sub_title"/>
        }
    },
    remark: {
        fieldProp: {
            editor: true,
            label: <Translate id="global.content"/>
        }
    },
};

const useStyles = makeStyles(theme => ({
    tab: {
        marginTop: 20,
        boxShadow: "0 0 5px 5px rgba(0,0,0,.1)",
        "& .MuiTabs-flexContainer": {
            position: "relative",
            zIndex: 1
        },
        "& .Mui-selected": {
            color: theme.palette.primary.contrastText,
            fontWeight: 500
        },
        "& .MuiTabs-indicator": {
            height: '100%'
        }
    },
    ...globalStyle(theme)
}));




export default function PackagePage({product_id}) {
    const classes = useStyles();
    const {t, i18n} = useTranslation();
    const [id, setId] = useState("");
    const [value, setValue] = useState(0);
    const [showSection, setShowSection] = useState('table');
    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };


    return showSection === 'table' ?
        <PackageTable type_id={WEB_CONTENT.PRODUCT_PACKAGE} parent_id={product_id} setId={setId}
                      setShowSection={setShowSection} config={{
            isSortable: true
        }}/> :
        <>
            <Tabs
                value={value}
                onChange={handleChangeTab}
                indicatorColor="secondary"
                textColor="primary"
                variant="fullWidth"
                className={classes.tab}
            >
                <Tab label={t("global.detail")}/>
                <Tab label={t("global.seo")}/>
                <Tab label={t("global.faq")}/>
            </Tabs>
            <br/>

            <div hidden={value !== 0}>
                <WebContentMainForm
                    isWebContent={true}
                    type_id={WEB_CONTENT.PRODUCT_PACKAGE}
                    config={config}
                    id={id}
                    setId={setId}
                    parent_id={product_id}
                    setShowSection={setShowSection}
                    page="detail"/>
            </div>
            <div hidden={value !== 1}>
                <WebContentMainForm
                    isWebContent={true}
                    type_id={WEB_CONTENT.PRODUCT_PACKAGE}
                    config={config}
                    id={id}
                    setId={setId}
                    parent_id={product_id}
                    setShowSection={setShowSection}
                    page="seo"/>
            </div>
            <div hidden={value !== 2}>
                <FaqPage parent_id={id} />
            </div>
        </>
}
