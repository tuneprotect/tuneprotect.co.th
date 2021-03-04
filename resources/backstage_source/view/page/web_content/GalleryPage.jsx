import React, {useEffect, useState} from "react";
import {useTranslation} from 'react-i18next';
import {useParams} from "react-router-dom";
import {Card, CardActions, CardHeader, CardMedia, Icon, makeStyles} from '@material-ui/core';
import globalStyle from "../../../asset/jss/standard";
import {API_STATUS_RESULT, API_URL_LIST} from "../../../config/config";
import {checkAction, connectAPI} from "../../../asset/lib/FormHelper";
import {reorder} from "../../../asset/lib/ArrayHelper";
import {deleteColor, mainColor} from "../../../config/theme";
import {SortableContainer, SortableElement, SortableHandle} from "react-sortable-hoc";
import DisplayAction from "../../component/data_display/DisplayAction";
import {basename} from "../../../asset/lib/PathHelper";
import ConfirmPopup from "../../component/ConfirmPopup";
import SpeedMenu from "../../component/SpeedMenu";
import {getUnPublish} from "../../../asset/lib/SystemHelper";
import Uploader from "../../component/form/Uploader";

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
    },
    cardMedia: {
        width: "auto",
        margin: "0 auto",
    },
    ...globalStyle(theme)
}));

function GalleryCard({rowData, tableActions, handleToggle, selected}) {
    const classes = useStyles();
    return <Card className={classes.card}
                 style={{backgroundColor: (rowData.mark_delete === 1 ? deleteColor[50] : (rowData.publish === 0 ? mainColor[50] : '#fff'))}}>
        <CardHeader
            avatar={<Handle/>}
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
        <CardActions className={classes.cardAction}>
            {tableActions.map((v, i) => <DisplayAction key={i} action={v} data={rowData}/>)}
        </CardActions>

    </Card>

}

const Handle = SortableHandle(({tabIndex}) => {
    const classes = useStyles();
    return <div className={classes.handle} tabIndex={tabIndex}>
        <Icon>drag_indicator</Icon>
    </div>
});

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

export default function GalleryPage({type_id}) {
    const classes = useStyles();
    const {t} = useTranslation();
    const ref_id = useParams().id;
    const [selected, setSelected] = useState([]);
    const [reordered, setReordered] = useState(false);
    const [images, setImages] = useState([]);
    const [menu, setMenu] = useState([]);
    const permission = {
        edit: checkAction(type_id + '.edit'),
        delete: checkAction(type_id + '.delete'),
        publish: checkAction(type_id + '.publish')
    };
    const [publishPopup, setPublishPopup] = useState({
        open: false,
        id: null
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
                hidden: () => {
                    return !permission.edit
                },
                onClick: (event, rowData) => {
                    handleEnable(rowData.id);
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
                hidden: () => {
                    return !permission.delete
                },
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
                hidden: (rowData) => {
                    return !permission.publish || rowData.publish === 1
                },
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
                id: 'save',
                icon: <Icon>save</Icon>,
                tooltipTitle: t("global.save"),
                className: classes.btnSave,
                onClick: () => handleSaveReorder(images)
            });

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
        formData.append('folder', `/${type_id}/${ref_id}`);
        formData.append('type_id', type_id);
        formData.append('ref_id', ref_id);

        const response = await connectAPI(API_URL_LIST.galleryUpload, {
            isUploadFile: true,
            data: formData,
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setImages(response.result);
            getUnPublish();
        }

    };
    const handleReload = async () => {

        const response = await connectAPI(API_URL_LIST.galleryGetAll, {
            data: {
                type_id: type_id,
                ref_id: ref_id
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
        handleAction(API_URL_LIST.gallerySetEnable, 'enable', id, status)
    };
    const handleDelete = async (id, status) => {
        handleAction(API_URL_LIST.gallerySetDelete, 'mark_delete', id, status)
    };
    const handlePublish = async (id, status) => {
        handleAction(API_URL_LIST.galleryPublish, 'publish', id, status)
    };
    const handleSaveReorder = async (data) => {

        const order_data = data.map(v => v.id);
        const response = await connectAPI(API_URL_LIST.gallerySaveReorder, {
            data: {type_id, ref_id, order_data},
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            getUnPublish();
        }

        setReordered(false);
    }
    const onSortEnd = ({oldIndex, newIndex}) => {
        setImages(reorder(images, oldIndex, newIndex));
        setReordered(true);
    };

    useEffect(() => {
        handleReload();
    }, []);
    useEffect(() => {

        let tempMenu = [...speedMenuList]

        if (!reordered) {
            tempMenu = tempMenu.filter(v => v.id !== 'save');
        }

        if (selected.length === 0) {
            tempMenu = tempMenu.filter(v => !v.isNew);
        }

        setMenu(tempMenu);

    }, [selected, reordered]);
    return (
        <>
            <Uploader accept="image/*" onDrop={onDrop}/>
            <div>
                <SortableList
                    shouldUseDragHandle={true}
                    useDragHandle
                    axis="xy"
                    images={images}
                    onSortEnd={onSortEnd}
                    tableActions={tableActions}
                    handleToggle={handleToggle}
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
            <SpeedMenu menu={menu}/>
        </>
    );
}
