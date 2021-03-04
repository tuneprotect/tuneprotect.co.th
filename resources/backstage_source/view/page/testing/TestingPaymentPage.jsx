import React from "react";
import {useSelector} from "react-redux";
import {Icon, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
import {useTranslation} from 'react-i18next';

import globalStyle from "../../../asset/jss/standard";
import SpeedMenu from "../../component/SpeedMenu";
import ProjectCard from "../../component/ProjectCard";
import {calInitValidation} from "../../../asset/lib/FormHelper";
import * as Yup from "yup";
import Translate from "../../component/Translate";
import {useFormik} from "formik";
import CustomField from "../../component/form/CustomField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));


const config = {
    amount: {
        validate: Yup.number()
            .required(<Translate id="error_message.required"/>),
        fieldProp: {
            label: <Translate id={'accounting.amount'}/>,
            required: true
        }
    },
    currency: {
        validate: Yup.string()
            .required(<Translate id="error_message.required"/>)
            .oneOf(['USD', 'THB']),
        fieldProp: {
            label: <Translate id="accounting.currency_code"/>,
            required: true
        }
    }
}


export default function TestingPaymentPage() {
    const classes = useStyles();
    const {t} = useTranslation();
    const {mainIcon, mainTitle} = useSelector(({system}) => system);
    const initial = calInitValidation(config);

    const initValue = {
        to: '',
        subject: '',
        content: ''
    };

    const {values, touched, errors, handleChange, handleSubmit, handleBlur, setValues, submitForm, isSubmitting, setFieldValue} = useFormik({
        initialValues: initValue,
        validationSchema: initial.schema,
        onSubmit: (values) => submitData(values)
    });

    const speedMenuList = (() => {
        let arr = [];

        arr = [
            {
                icon: <Icon>save</Icon>,
                tooltipTitle: t("global.save"),
                className: classes.btnSave,
                onClick: handleSubmit,
                isNew: true
            },
        ]
        return arr;
    })();

    const submitData = async (values) => {
        window.open(`/en/payment/test/${values.amount}/${values.currency}`);
    }


    return (
        <ProjectCard icon={mainIcon} title={mainTitle}>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">

                <CustomField
                    name="amount"
                    error={touched?.["amount"] && errors?.["amount"] !== undefined}
                    helperText={touched?.["amount"] && errors?.["amount"] || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.["amount"] || ''}
                    {...config["amount"].fieldProp} />

                <FormControl required style={{display: "block"}}
                             className={"MuiFormControl-marginNormal"}
                             error={touched?.["currency"] && errors?.["currency"] !== undefined}>
                    <InputLabel id="cat_id">{config["currency"].fieldProp.label}</InputLabel>
                    <Select
                        labelId="currency"
                        id="currency"
                        name="currency"
                        value={values?.["currency"] || ''}
                        onChange={handleChange}
                        style={{width: "100%"}}
                    >
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="THB">THB</MenuItem>

                    </Select>
                    <FormHelperText>{touched?.["currency"] && errors?.["currency"] || ''}</FormHelperText>
                </FormControl>

                <button type="submit" onClick={handleSubmit} style={{display: "none"}} disabled={isSubmitting}/>
            </form>
            <SpeedMenu menu={speedMenuList}/>
        </ProjectCard>

    )
}
