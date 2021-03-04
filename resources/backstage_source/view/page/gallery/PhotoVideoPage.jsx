import React, {useEffect, useState} from "react";
import {useTranslation} from 'react-i18next';
import {Card, CardActions, CardHeader, CardMedia, Icon, makeStyles} from '@material-ui/core';
import globalStyle from "../../../asset/jss/standard";
import {API_STATUS_RESULT, API_URL_LIST, WEB_CONTENT} from "../../../config/config";
import {checkAction, connectAPI} from "../../../asset/lib/FormHelper";
import {deleteColor, mainColor} from "../../../config/theme";
import {SortableContainer, SortableElement} from "react-sortable-hoc";
import DisplayAction from "../../component/data_display/DisplayAction";
import {basename} from "../../../asset/lib/PathHelper";
import ConfirmPopup from "../../component/ConfirmPopup";
import SpeedMenu from "../../component/SpeedMenu";
import {getUnPublish} from "../../../asset/lib/SystemHelper";
import Uploader from "../../component/form/Uploader";
import ProjectCard from "../../component/ProjectCard";
import {useSelector} from "react-redux";
import CardContent from "@material-ui/core/CardContent";
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from "@material-ui/core/IconButton";
import CustomField from "../../component/form/CustomField";
import {useFormik} from "formik";
import clsx from "clsx";
import TagForm from "./TagForm";
import APP_ROUTE from "../../../config/route";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(theme => ({

    root: {
        minHeight: 600,
        backgroundColor: theme.palette.secondary.light,
        padding: 20,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gridGap: 20
    },
    cardAction: {
        justifyContent: "center"
    },

    handle: {height: 30, cursor: "move"},
    mediaWrapper: {
        position: "relative"
    },
    selected: {
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,.5)"
    },
    cardHeader: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "& .MuiTypography-h5": {
            fontSize: "1rem",
        }
    },
    cardMedia: {
        width: "auto",
        margin: "0 auto",
    },
    tag: {
        display: "inline-block",
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: 50,
        paddingLeft: 10,
        margin: "2px 4px 2px 0",
        fontSize: "0.8rem",
        position: "relative",
        zIndex: 10,
        "& strong": {
            cursor: "pointer"
        },
        "& button": {
            color: theme.palette.primary.contrastText
        }
    },
    tag_big: {
        margin: "5px 10px 5px 0",
        fontSize: "1.2rem",
    },
    filterTagWrapper: {
        marginBottom: 20
    },
    ...globalStyle(theme)
}));

function GalleryCard({rowData, tableActions, handleToggle, selected, handleRemoveTag, handleFilterTag}) {
    const classes = useStyles();
    const tag = _.uniq(Object.keys(rowData.locales).reduce((allTag, k) => {
        const currentTag = rowData.locales[k].remark.split(',');
        if (currentTag !== undefined && currentTag.length > 0) {
            return allTag.concat(_.compact(currentTag));
        }
    }, []));

    return <Card className={classes.card}
                 style={{backgroundColor: (rowData.mark_delete === 1 ? deleteColor[50] : (rowData.publish === 0 ? mainColor[50] : '#fff'))}}>
        <CardHeader
            title={basename(rowData.pic)}
            className={classes.cardHeader}
        />
        <div className={classes.mediaWrapper} onClick={() => handleToggle(rowData.id)}>
            <CardMedia
                component="img"
                alt=""
                height="140"
                image={rowData.pic}
                className={classes.cardMedia}

            />
            {selected.indexOf(rowData.id) !== -1 &&
            <div className={classes.selected}><Icon color="primary" style={{fontSize: 100}}>check</Icon></div>}
        </div>
        <CardContent>
            {tag.map(v => <span key={v} className={classes.tag}>
                <strong onClick={() => handleFilterTag(v)}>{v}</strong>
                <IconButton size="small" aria-label="delete" className={classes.margin}
                            onClick={() => handleRemoveTag(rowData.id, v)}>
                            <CancelIcon fontSize="small"/>
                        </IconButton></span>)}


        </CardContent>
        <CardActions className={classes.cardAction}>
            {tableActions.map((v, i) => <DisplayAction key={i} action={v} data={rowData}/>)}
        </CardActions>

    </Card>

}

const SortableItem = SortableElement(props => {
    return (<div><GalleryCard {...props} /></div>);
});

const SortableList = SortableContainer(props => {
    const classes = useStyles();
    const {images, ...restProps} = props;
    return (
        <div className={classes.root}>
            {images.map((item, index) => (
                <SortableItem
                    key={`item-${item.id}`}
                    index={index}
                    rowData={item}
                    {...restProps}
                />
            ))}
        </div>

    );
});

export default function PhotoVideoPage() {
    const classes = useStyles();
    const {t} = useTranslation();
    const history = useHistory();
    const type_id = WEB_CONTENT.GALLERY_PIC;
    const {mainIcon, mainTitle, languageSupport} = useSelector(({system}) => system);
    const [selected, setSelected] = useState([]);
    const [images, setImages] = useState([]);
    const [menu, setMenu] = useState([]);
    const [filterTag, setFilterTag] = useState([]);
    const permission = {
        edit: checkAction(type_id + '.edit'),
        delete: checkAction(type_id + '.delete'),
        publish: checkAction(type_id + '.publish')
    };
    const [publishPopup, setPublishPopup] = useState({
        open: false,
        id: null
    });
    const [addTagPopup, setAddTagPopup] = useState({
        open: false
    });

    const tableActions = (() => {

        let arr = [];

        if (permission.edit) {
            arr.push({
                icon: 'visibility',
                title: [t("global.disable"), t("global.enable")],
                field: "enable",
                position: "row",
                buttonClass: [classes.btnError, classes.btnSuccess],
                hidden: !permission.edit,
                onClick: (event, rowData) => {
                    handleEnable(rowData.id);
                }
            });

            arr.push({
                icon: 'edit',
                title: t("global.edit"),
                position: "row",
                buttonClass: classes.btnEdit,
                hidden: !permission.edit,
                onClick: (event, rowData) => {
                    history.push(APP_ROUTE[type_id].url + "/detail/" + rowData.id);
                }
            });
        }
        if (permission.delete) {
            arr.push({
                icon: ["delete","restore"],
                title: [t("global.delete"), t("global.restore")],
                field: "mark_delete",
                position: "row",
                buttonClass: [classes.btnDelete, classes.btnRestore],
                hidden: !permission.delete,
                onClick: (event, rowData) => {
                    handleDelete(rowData.id);
                }
            });
        }
        if (permission.publish) {
            arr.push({
                icon: 'publish',
                title: t("global.publish"),
                position: "row",
                buttonClass: classes.btnPublish,
                hidden: !permission.publish,
                hideCondition: ' data.publish === 1 ',
                onClick: (event, rowData) => {
                    setPublishPopup({
                        open: true,
                        id: rowData.id
                    });
                }
            });
        }
        return arr;

    })();
    const speedMenuList = (() => {

        let arr = [{
            icon: <Icon>refresh</Icon>,
            tooltipTitle: t('global.reload'),
            className: classes.btnReload,
            onClick: () => handleReload()
        }];

        if (permission.edit) {

            arr.push({
                icon: <Icon>visibility</Icon>,
                tooltipTitle: t('global.enable'),
                className: classes.btnSuccess,
                isNew: true,
                onClick: () => handleEnable(selected, 1)
            });
            arr.push({
                icon: <Icon>visibility</Icon>,
                tooltipTitle: t('global.disable'),
                className: classes.btnError,
                isNew: true,
                onClick: () => handleEnable(selected, 0)
            });
            arr.push({
                icon: <Icon>local_offer</Icon>,
                tooltipTitle: t('global.add_tag'),
                className: classes.btnEdit,
                isNew: true,
                onClick: () => setAddTagPopup({
                    open: true
                })
            });
        }

        if (permission.delete) {
            arr.push({
                icon: <Icon>restore</Icon>,
                tooltipTitle: t("global.restore"),
                className: classes.btnRestore,
                isNew: true,
                onClick: () => handleDelete(selected, 0)
            });
            arr.push({
                icon: <Icon>delete</Icon>,
                tooltipTitle: t("global.delete"),
                className: classes.btnDelete,
                isNew: true,
                onClick: () => handleDelete(selected, 1)
            });
        }

        if (permission.publish) {
            arr.push({
                id: "publish",
                icon: <Icon>publish</Icon>,
                tooltipTitle: t("global.publish"),
                isNew: true,
                className: classes.btnPublish,
                onClick: () => {
                    setPublishPopup({
                        open: true,
                        id: selected
                    });

                }
            });
        }

        return arr;
    })();
    const handleToggle = (value) => {
        if (selected.includes(value)) {
            setSelected([...selected.filter(i => i !== value)]);
        } else {
            setSelected([...selected, value]);
        }
    };
    const onDrop = async (acceptedFiles) => {
        const formData = new FormData();
        acceptedFiles.forEach((file) => {
            formData.append('files[]', file, file.name);
        })
        formData.append('folder', `/gallery`);
        formData.append('type_id', type_id);

        const response = await connectAPI(API_URL_LIST.webContentUpload, {
            isUploadFile: true,
            data: formData,
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setImages(response.result);
            await getUnPublish();
        }
    };
    const handleReload = async () => {

        const response = await connectAPI(API_URL_LIST.webContentGetAll, {
            data: {
                type_id,
                order_by: {id: 'DESC'},
            },
            showStatus: false
        })

        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setImages(response.result);
        }
    }
    const handleAction = async (url, action, id, status) => {
        setPublishPopup({
            open: false,
            id: null
        });

        const response = await connectAPI(url, {
            data: {selected_id: id, [action]: status},
        });

        if (response.status === API_STATUS_RESULT.SUCCESS) {

            if (action === 'publish') {
                setImages(images
                    .filter(v => response.result?.[v.id] !== 'delete')
                    .map(v => (response.result?.[v.id] === 'publish' ? {...v, publish: 1} : v)));
                getUnPublish();
                return true;
            }

            if (status !== undefined) {
                setImages(images
                    .map(v => (id.indexOf(v.id) !== -1 ? {...v, [action]: status, publish: 0} : v)));
            } else {
                setImages(images
                    .map(v => (v.id === id) ? {...v, [action]: response.result[action], publish: 0} : v));
            }

            getUnPublish();
        }
        setSelected([]);
    }
    const handleEnable = (id, status) => {
        handleAction(API_URL_LIST.webContentSetEnable, 'enable', id, status)
    };
    const handleDelete = async (id, status) => {
        handleAction(API_URL_LIST.webContentSetDelete, 'mark_delete', id, status)
    };
    const handlePublish = async (id, status) => {
        handleAction(API_URL_LIST.webContentPublish, 'publish', id, status)
    };
    const handleAddTag = async (values) => {
        setAddTagPopup({
            open: false
        });

        const response = await connectAPI(API_URL_LIST.webContentAddTag, {
            data: {selected_id: selected, tag: values, type_id},
        });

        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setImages(response.result)
            getUnPublish();
        }
        setSelected([]);
    }
    const handleRemoveTag = async (selected_id, tag) => {

        const response = await connectAPI(API_URL_LIST.webContentRemoveTag, {
            data: {selected_id, tag, type_id},
        });

        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setImages(response.result)
            getUnPublish();
        }
        setSelected([]);
    }

    const showImage = (images, filterTag) => {

        if (filterTag.length > 0) {
            return images.filter(v => Object.keys(v.locales).some(v1 => _.intersectionWith(v.locales[v1].remark.split(','), filterTag).length > 0))
        }
        return images;
    }

    useEffect(() => {
        handleReload();
    }, []);
    useEffect(() => {

        let tempMenu = [...speedMenuList]

        if (selected.length === 0) {
            tempMenu = tempMenu.filter(v => !v.isNew);
        }

        setMenu(tempMenu);

    }, [selected]);
    return (
        <ProjectCard icon={mainIcon} title={mainTitle}>
            <br/>
            {filterTag.length > 0 && <div className={classes.filterTagWrapper}>
                {filterTag.map(v => <span key={v} className={clsx(classes.tag, classes.tag_big)}>
                {v}
                    <IconButton size="small" aria-label="delete" className={classes.margin}
                                onClick={() => setFilterTag(filterTag.filter(v1 => v1 !== v))}>
                            <CancelIcon/>
                        </IconButton></span>)}
            </div>}


            <Uploader accept="image/*" onDrop={onDrop}/>
            <div>
                <SortableList
                    shouldUseDragHandle={true}
                    useDragHandle
                    axis="xy"
                    images={showImage(images, filterTag)}
                    tableActions={tableActions}
                    handleToggle={handleToggle}
                    handleRemoveTag={(selected_id, tag) => handleRemoveTag(selected_id, tag)}
                    handleFilterTag={(tag) => setFilterTag(_.uniq(_.compact([...filterTag, tag])))}
                    selected={selected}
                />
            </div>
            <ConfirmPopup
                open={publishPopup.open}
                handleConfirm={() => handlePublish(publishPopup.id, 1)}
                handleClose={() => setPublishPopup({
                    open: false,
                    id: null
                })}>

                {t("global.publish_alert_description")}

            </ConfirmPopup>
            <TagForm addTagPopup={addTagPopup} setAddTagPopup={setAddTagPopup} handleAddTag={handleAddTag}> </TagForm>
            <SpeedMenu menu={menu}/>
        </ProjectCard>
    );
}
