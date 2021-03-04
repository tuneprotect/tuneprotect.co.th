import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useFormik} from "formik";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from 'react-i18next';
import {Checkbox, Icon, Switch, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@material-ui/core';
import * as Yup from "yup";
import {API_STATUS_RESULT, API_URL_LIST, ROLE} from "../../../config/config";
import APP_ROUTE from "../../../config/route";
import {calInitValidation, checkAction, connectAPI} from "../../../asset/lib/FormHelper";
import Form from "../../component/form/Form";
import CustomField from "../../component/form/CustomField";
import SpeedMenu from "../../component/SpeedMenu";
import globalStyle from "../../../asset/jss/standard";
import ConfirmPopup from "../../component/ConfirmPopup";
import Translate from "../../component/Translate";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme),
}));

const columns = [
    {id: 'name', label: <Translate id="admin_user.role"/>, minWidth: 170},
    {id: 'edit', label: <Translate id="global.edit"/>, minWidth: 50, align: "center"},
    {id: 'delete', label: <Translate id="global.delete"/>, minWidth: 50, align: "center"},
    {id: 'publish', label: <Translate id="global.publish"/>, minWidth: 50, align: "center"},
];

const config = {
    first_name: {
        validate: Yup.string()
            .max(50, <Translate id="error_message.too_long"/>)
            .required(<Translate id="error_message.required"/>),
        fieldProp: {
            label: <Translate id={'global.first_name'}/>,
            required: true,
        }
    },
    last_name: {
        validate: Yup.string()
            .max(50, <Translate id="error_message.too_long"/>)
            .required(<Translate id="error_message.required"/>),
        fieldProp: {
            label: <Translate id="global.last_name"/>,
            required: true,
        }
    },
    email: {
        validate: Yup.string()
            .email(<Translate id="error_message.email_not_valid"/>)
            .required(<Translate id="error_message.required"/>),
        fieldProp: {
            label: <Translate id="global.email"/>,
            required: true,
        }
    },
    password: {
        validate: Yup.string()
            .min(6, <Translate id="error_message.too_short"/>)
            .max(16, <Translate id="error_message.too_long"/>),
        fieldProp: {
            type: "password",
            label: <Translate id={'global.password'}/>,
        }
    },
    password_confirmation: {
        validate: Yup.string()
            .oneOf([Yup.ref('password'), null], <Translate id="error_message.password_mismatch"/>),
        fieldProp: {
            label: <Translate id={'global.password_confirm'}/>,
            type: "password",
        }
    },
};

const defaultValue = {
    first_name: '',
    last_name: '',
    email: '',
    password: "",
    password_confirmation: "",
    super_admin: true,
    role: []
}

export default function UserFormPage() {
    const classes = useStyles();
    const {t} = useTranslation();
    const initial = calInitValidation(config);
    const history = useHistory();
    const [enable, setEnable] = useState(0);
    const {mainIcon, mainTitle} = useSelector(({system}) => system);
    const [id, setId] = useState(useParams().id);
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState();
    const {values, touched, errors, handleChange, handleSubmit, handleBlur, setValues, submitForm, isSubmitting} = useFormik({
        initialValues: defaultValue,
        validationSchema: initial.schema,
        onSubmit: (values) => handleSave(values)
    });
    const speedMenuList = (() => {
        let arr = [
            {
                icon: <Icon>arrow_back</Icon>,
                tooltipTitle: t("global.back"),
                className: classes.btnBack,
                onClick: () => history.push(APP_ROUTE["user.management"].url),
                isNew: true
            },
            {
                icon: <Icon>save</Icon>,
                tooltipTitle: t("global.save"),
                className: classes.btnSave,

                onClick: () => submitForm(),
                isNew: true
            },
            {
                icon: <Icon>add</Icon>,
                tooltipTitle: t("global.add_new"),
                className: classes.btnEdit,
                onClick: () => {
                    history.push(APP_ROUTE["user.management.detail"].url.replace(':id?', ''));
                    setId(undefined)
                }
            },
            {
                icon: <Icon>visibility</Icon>,
                tooltipTitle: t('global.' + (enable ? 'enable' : 'disable')),
                className: (enable ? classes.btnSuccess : classes.btnError),
                onClick: () => handleEnable()
            },
        ]

        if (checkAction('user.management.delete')) {
            arr.push({
                icon: <Icon>delete</Icon>,
                tooltipTitle: t("global.delete"),
                className: classes.btnDelete,
                onClick: () => setOpen(true)
            });
        }

        return arr;
    })();

    const handleClose = () => {
        setOpen(false);
    }
    const handleEnable = async () => {
        const response = await connectAPI(API_URL_LIST.userSetEnable, {
            data: {
                selected_id: id,
            }
        });

        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setEnable(response.result.enable);
        }

    };
    const handleDelete = async () => {
        setOpen(false);
        const response = await connectAPI(API_URL_LIST.userDelete, {
            data: {selected_id: id,}
        });

        history.push(APP_ROUTE["user.management"].url)
    };
    const handleSave = async (values) => {
        let send_data = {
            id: id || "",
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            role: values.super_admin ? ROLE.SUPER_ADMIN : values.role,
        };

        if (values.password !== '') {
            send_data = {
                ...send_data,
                password: values.password,
                password_confirmation: values.password_confirmation,
            };
        }

        const response = await connectAPI(API_URL_LIST.userSave, {
            data: send_data
        });
        if (response.status === API_STATUS_RESULT.SUCCESS && id === undefined) {
            setEnable(response.result.enable);
            setId(response.result.id)
            history.push(APP_ROUTE["user.management.detail"].url.replace(':id?', response.result.id))
        }

    }

    useEffect(() => {
        if (id !== undefined) {
            (async () => {
                const response = await connectAPI(API_URL_LIST.userGet, {
                    data: {id: id,},
                    showStatus: false
                });

                setValues({
                    first_name: response.result.first_name,
                    last_name: response.result.last_name,
                    email: response.result.email,
                    password: "",
                    password_confirmation: "",
                    super_admin: response.result.role === ROLE.SUPER_ADMIN,
                    role: response.result.role === ROLE.SUPER_ADMIN ? [] : response.result.role
                });
                setEnable(response.result.enable);


            })();
        } else {
            setValues(defaultValue);
            setMenu(speedMenuList.filter(v => v.isNew === true));
        }
    }, [id]);
    useEffect(() => {
        if (id !== undefined) {
            setMenu(speedMenuList);
        }
    }, [enable]);

    return (
        <>
            <Form
                icon={mainIcon}
                title={mainTitle}
                handleSubmit={handleSubmit}
                className={classes.centerBox}>
                {Object.keys(config).map(k => <CustomField
                    key={k}
                    config={config[k]}
                    name={k}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched[k] && errors[k] !== undefined}
                    helperText={touched[k] && errors[k]}
                    value={values[k]}
                    {...config[k].fieldProp}
                />)}

                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id} align={column.align} style={{minWidth: column.minWidth}}>
                                    {column.id === "name"
                                        ? <>
                                            {t("admin_user.role")} : &nbsp;

                                            <Switch
                                                checked={values.super_admin}
                                                onChange={(e) => setValues({
                                                    ...values,
                                                    [e.target.name]: e.target.checked
                                                })}
                                                color="primary"
                                                name="super_admin"
                                                inputProps={{'aria-label': 'primary checkbox'}}
                                            />

                                            <Typography component="span">{t("admin_user.super_admin")}</Typography>
                                        </>
                                        : column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    {!values.super_admin && <TableBody>
                        {Object.values(APP_ROUTE)
                            .filter(v => v.group === "main_nav" && v.id !== "dashboard")
                            .map((v, i) => {
                                let space = (v.id.match(new RegExp("\\.", "g")) || []).length;
                                return <TableRow hover tabIndex={-1} key={v.id}>
                                    {columns.map((column) => {
                                        const cellKey = `${v.id}.${column.id}`;
                                        return <TableCell key={cellKey} align={column.align}>
                                            {column.id === "name"
                                                ? <div style={{paddingLeft: space * 20}}>{v.name}</div>
                                                : v?.component && (v?.permission?.indexOf(column.id) !== -1) &&
                                                <Checkbox
                                                    name="role"
                                                    onChange={handleChange}
                                                    checked={values.role !== null && values.role.indexOf(cellKey) > -1}
                                                    value={cellKey}/>
                                            }
                                        </TableCell>
                                    })}
                                </TableRow>
                            })}
                    </TableBody>}
                </Table>
                <button type="submit" onClick={handleSubmit} style={{display: "none"}}
                        disabled={isSubmitting}/>

            </Form>
            <ConfirmPopup open={open} handleClose={handleClose} handleConfirm={() => handleDelete()}>
                {t("global.delete_alert_description")}
            </ConfirmPopup>
            <SpeedMenu menu={menu}/>
        </>
    )
}
