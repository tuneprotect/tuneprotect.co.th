import React, {useEffect, useState} from "react";
import {API_STATUS_RESULT, API_URL_LIST, WEB_CONTENT} from "../../../config/config";
import {Button, Icon, TextField} from "@material-ui/core";
import clsx from "clsx";
import {connectAPI} from "../../../asset/lib/FormHelper";
import {makeStyles} from "@material-ui/core/styles";
import globalStyle from "../../../asset/jss/standard";
import {useTranslation} from 'react-i18next';
import {useSelector} from "react-redux";
import SpeedMenu from "../../component/SpeedMenu";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import {reorder} from "../../../asset/lib/ArrayHelper";
import {getUnPublish} from "../../../asset/lib/SystemHelper";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme),
    table: {
        marginTop: 50,
        width: '100%',
        "& th,& td ": {
            padding: '5px 10px'
        },
        "& th": {
            verticalAlign: 'middle',
            textAlign: "left"
        },
        "& tbody th": {
            textAlign: "center"
        },
    },
}));


export default function PackageDetailPage({product_id}) {
    const classes = useStyles();
    const {t, i18n} = useTranslation();
    const {languageSupport} = useSelector(({system}) => system);
    const locale = i18n.language || i18n.options.fallbackLng[0];
    const [productPackage, setProductPackage] = useState([]);
    const [product, setProduct] = useState({});
    const [header, setHeader] = useState({});
    const [value, setValue] = useState({});
    const [price, setPrice] = useState({});

    const speedMenuList = [
        {
            id: "save",
            icon: <Icon>save</Icon>,
            tooltipTitle: t("global.save"),
            className: classes.btnSave,
            onClick: () => handleSave(),
        },
        {
            id: "add_new_row",
            icon: <Icon>add</Icon>,
            tooltipTitle: t("global.add_new"),
            className: classes.btnEdit,
            onClick: () => addEmptyValue(),
        }
    ];

    const addEmptyValue = () => {
        Object.values(languageSupport).map(v => {
            setHeader(prevState => ({...prevState, [v.code]: [...header[v.code], ""]}));
            Object.values(productPackage).map(col =>
                setValue(prevState => ({
                    ...prevState,
                    [col.id]: {
                        ...prevState[col.id],
                        [v.code]: [...prevState[col.id][v.code], ""]
                    }
                })));
        });


    }

    const handleSave = async () => {
        const response = await connectAPI(API_URL_LIST.webContentSavePackageDetail,
            {
                data: {
                    id: product_id,
                    package_header: header,
                    package_value: value,
                    package_price: price
                },
            });

        if (response.status === API_STATUS_RESULT.SUCCESS) {
            getUnPublish();
        }
    }

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const data = reorder(values.lines, result.source.index, result.destination.index);

        setValue(data);
    };

    useEffect(() => {
        (async () => {

            const productResponse = await connectAPI(API_URL_LIST.webContentGet, {
                data: {id: product_id},
                showStatus: false,
                showLoading: false
            })

            let tmpHeader = {};

            if (productResponse.status === API_STATUS_RESULT.SUCCESS) {
                setProduct(productResponse.result)


                Object.keys(productResponse.result.locales).map(k => {
                    tmpHeader = {...tmpHeader, [k]: JSON.parse(productResponse.result.locales[k].remark) || [""]};
                })

                setHeader(tmpHeader);
            }

            const productPackageResponse = await connectAPI(API_URL_LIST.webContentGetAll, {
                data: {type_id: WEB_CONTENT.PRODUCT_PACKAGE},
                showStatus: false,
                showLoading: false
            })

            if (productPackageResponse.status === API_STATUS_RESULT.SUCCESS) {
                setProductPackage(productPackageResponse.result)
                let tmpValue = {};
                let tmpPrice = {}
                productPackageResponse.result.map(v => {
                    let tmpLocale = {}

                    tmpPrice = {...tmpPrice, [v.id]: v.custom_input_1}

                    Object.keys(v.locales).map(k => {
                        tmpLocale = {
                            ...tmpLocale,
                            [k]: JSON.parse(v.locales[k].remark) || Array(tmpHeader[locale].length).fill("")
                        };
                    })
                    tmpValue = {
                        ...tmpValue, [v.id]: {...tmpLocale}
                    };

                });
                setPrice(tmpPrice);
                setValue(tmpValue);
            }


        })();
    }, [product_id]);

    return <>
        <DragDropContext onDragEnd={onDragEnd}>
            <Table className={clsx(classes.table)}>
                <TableHead>
                    <TableRow>
                        <TableCell>{t("global.title")}</TableCell>
                        {Object.values(productPackage)
                            .map(v => <TableCell className={classes.th}
                                                 key={v.id}>{v.locales[locale].title}</TableCell>)}
                        <TableCell/>
                    </TableRow>
                    <TableRow>
                        <TableCell>{t("global.price")}</TableCell>
                        {Object.values(productPackage)
                            .map(v => <TableCell className={classes.th}
                                                 key={v.id}>
                                <TextField
                                    key={v.id}
                                    fullWidth multiline style={{margin: '0'}}
                                    variant="filled"
                                    type="text"
                                    value={price?.[v.id] || ''}
                                    onChange={(e) => {
                                        setPrice(prevState => ({...prevState, [v.id]: e.target.value}))
                                    }}
                                />
                            </TableCell>)}
                        <TableCell/>
                    </TableRow>
                </TableHead>
                <Droppable droppableId="list">
                    {provided => (
                        <TableBody
                            className={classes.root}
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            {header?.[locale] && header[locale].length > 0
                            && header[locale].map((v, index) => {
                                return <PackageDetailRow
                                    key={index}
                                    productPackage={productPackage} index={index}
                                    header={header}
                                    setHeader={setHeader} setValue={setValue} value={value}/>
                            })}
                            {provided.placeholder}
                        </TableBody>
                    )}
                </Droppable>
            </Table>
        </DragDropContext>
        <SpeedMenu menu={speedMenuList}/>
    </>
}

function PackageDetailRow({productPackage, index, header, setHeader, value, setValue}) {
    const classes = useStyles();
    const {languageSupport} = useSelector(({system}) => system);
    return (<TableRow>
        <TableCell>
            {Object.values(languageSupport)
                .map(v => <TextField
                    key={v.code}
                    fullWidth multiline style={{margin: '0'}}
                    variant="filled"
                    placeholder={v.title}
                    type="text"
                    value={header[v.code][index]}
                    onChange={(e) => {
                        setHeader({...header, [v.code]: header[v.code].map((v, i) => i === index ? e.target.value : v)})
                    }}
                />)}
        </TableCell>
        {Object.values(productPackage)
            .map(col => <TableCell key={col.id} className={classes.th}>
                    {Object.values(languageSupport)
                        .map(v => <TextField
                            key={v.code}
                            fullWidth multiline style={{margin: '0'}}
                            placeholder={v.title}
                            variant="filled"
                            type="text"
                            value={value?.[col.id]?.[v.code]?.[index] || ''}
                            onChange={(e) => {
                                setValue({
                                    ...value,
                                    [col.id]: {
                                        ...value[col.id],
                                        [v.code]: value[col.id][v.code].map((v1, i) => i !== index ? v1 : e.target.value)
                                    }
                                });


                            }}
                        />)}
                </TableCell>
            )}
        <TableCell>
            {index !== 0 && <Button
                className={classes.btnDelete}
                size="small"
                variant="contained"
                onClick={(event) => {

                    Object.values(languageSupport)
                        .map(v => {
                            setHeader(prevState => ({
                                ...prevState,
                                [v.code]: prevState[v.code].filter((v, i) => i !== index)
                            }))
                            Object.values(productPackage)
                                .map(col =>
                                    setValue(prevState => ({
                                        ...prevState,
                                        [col.id]: {
                                            ...prevState[col.id],
                                            [v.code]: prevState[col.id][v.code].filter((v1, i) => i !== index)
                                        }
                                    })));
                        })
                }}
            ><Icon fontSize="small">delete</Icon></Button>}
        </TableCell>
    </TableRow>)
}
