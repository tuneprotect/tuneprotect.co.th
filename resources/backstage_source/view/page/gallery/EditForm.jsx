import React from "react";
import {makeStyles} from '@material-ui/core';
import globalStyle from "../../../asset/jss/standard";
import ConfirmPopup from "../../component/ConfirmPopup";
import CustomField from "../../component/form/CustomField";
import {useFormik} from "formik";
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    ...globalStyle(theme)
}));


export default function TagForm({addTagPopup, setAddTagPopup,handleAddTag}) {
    const classes = useStyles();
    const {languageSupport} = useSelector(({system}) => system);
    const {values, touched, errors, handleChange, handleSubmit, handleBlur, setValues, submitForm, isSubmitting, setFieldValue} = useFormik({
        initialValues: (() => {
            let allTag = {};
            Object.values(languageSupport).map(v => (
                allTag[v.code] = ""
            ));
            return allTag;
        })(),
        onSubmit: () => handleAddTag(values)
    });


    return <ConfirmPopup
        open={addTagPopup.open}
        handleConfirm={() => handleAddTag(values)}
        handleClose={() => setAddTagPopup({
            open: false
        })}>




        {Object.values(languageSupport).map(v => {
            let name = `${v.code}`;
            return <CustomField
                key={name}
                name={name}
                error={touched?.[v.code] && errors?.[v.code] !== undefined}
                helperText={touched?.[v.code] && errors?.[v.code] || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                label={v.title}
                value={values?.[v.code] || ''}
            />

        })}
    </ConfirmPopup>;
}
