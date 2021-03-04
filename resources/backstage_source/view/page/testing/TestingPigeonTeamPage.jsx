import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Icon, makeStyles} from "@material-ui/core";
import {useTranslation} from 'react-i18next';

import globalStyle from "../../../asset/jss/standard";
import SpeedMenu from "../../component/SpeedMenu";
import ProjectCard from "../../component/ProjectCard";
import {calInitValidation, connectAPI} from "../../../asset/lib/FormHelper";
import {API_STATUS_RESULT, API_URL_LIST} from "../../../config/config";
import * as Yup from "yup";
import Translate from "../../component/Translate";
import {useFormik} from "formik";
import CustomField from "../../component/form/CustomField";
import CMSDataTable from "../../component/data_display/CMSDataTable";
import {deleteColor, mainColor} from "../../../config/theme";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));


const config = {

    year: {
        validate: Yup.string()
            .required(<Translate id="error_message.required"/>),
        fieldProp: {
            label: <Translate id="global.year"/>,
            required: true
        }
    },
}


export default function TestingPigeonTeamPage() {
    const classes = useStyles();
    const {t} = useTranslation();
    const {mainIcon, mainTitle} = useSelector(({system}) => system);
    const initial = calInitValidation(config);
    const [result, setResult] = useState([]);
    const initValue = {
        year: '',
    };

    const {values, touched, errors, handleChange, handleSubmit, handleBlur, setValues, submitForm, isSubmitting, setFieldValue} = useFormik({
        initialValues: initValue,
        validationSchema: initial.schema,
        onSubmit: (values) => submitData(values)
    });

    const speedMenuList = [
        {
            icon: <Icon>save</Icon>,
            tooltipTitle: t("global.save"),
            className: classes.btnSave,
            onClick: handleSubmit,
            isNew: true
        },
    ];

    const submitData = async (values) => {
        const response = await connectAPI(API_URL_LIST.testImportTeam, {
            data: values
        });

        if (response.status === API_STATUS_RESULT.SUCCESS) {

            setValues({...initValue})
            setResult(response.result);

        }
    }

    return (
        <>
            <ProjectCard icon={mainIcon} title={mainTitle}>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">

                    {Object.keys(config).map(k => {
                        return <CustomField
                            key={k}
                            name={k}
                            error={touched?.[k] && errors?.[k] !== undefined}
                            helperText={touched?.[k] && errors?.[k] || ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.[k] || ''}
                            {...config[k].fieldProp}
                        />
                    })}
                    <button type="submit" onClick={handleSubmit} style={{display: "none"}} disabled={isSubmitting}/>
                </form>

            </ProjectCard>

            {result.length > 0 &&
            <ProjectCard icon={mainIcon} title={mainTitle}>
                <CMSDataTable
                    data={result}
                    columns={[
                        {
                            field: "ColorCode",
                            title: "ColorCode"
                        }, {
                            field: "CountryCode",
                            title: "CountryCode"
                        }, {
                            field: "CountryName",
                            title: "CountryName"
                        }, {
                            field: "LTeam",
                            title: "LTeam"
                        }, {
                            field: "MemberName",
                            title: "MemberName"
                        }, {
                            field: "RaceLine",
                            title: "RaceLine"
                        }, {
                            field: "RingNumber",
                            title: "RingNumber"
                        }, {
                            field: "STeam",
                            title: "STeam"
                        }, {
                            field: "Seq",
                            title: "Seq"
                        }, {
                            field: "Sex",
                            title: "Sex"
                        }, {
                            field: "Status",
                            title: "Status"
                        }, {
                            field: "StatusDate",
                            title: "StatusDate"
                        }, {
                            field: "YearNo",
                            title: "YearNo"
                        }
                    ]}
                    option={{
                        selection: false,
                        filtering: true,
                        sorting: true,
                    }}
                />

            </ProjectCard>
            }
            <SpeedMenu menu={speedMenuList}/>
        </>
    )
}
