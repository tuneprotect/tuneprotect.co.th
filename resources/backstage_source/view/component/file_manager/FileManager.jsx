import React, {useEffect, useState} from "react";
import {API_HEADER, API_STATUS_RESULT, API_URL_LIST} from "../../../config/config";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from 'react-i18next';
import globalStyle from "../../../asset/jss/standard";
import {TreeItem, TreeView} from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
    Button,
    ButtonGroup,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Icon,
    TextField
} from "@material-ui/core";
import ProjectCard from "../ProjectCard";
import {useSelector} from "react-redux";
import FileElement from "./FileElement";
import {useDropzone} from "react-dropzone";
import {basename} from "../../../asset/lib/PathHelper";


const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme),
    buttonGroup: {
        marginRight: 20
    },
    fileManagerWrapper: {
        display: "flex",
        borderTop: "1px solid #000",
        borderBottom: "1px solid #000",
        marginTop: 20,
        minHeight: 400
    },
    treeViewWrapper: {
        borderRight: "1px solid #000",
        width: 300,
        padding: "20px 0"
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gridTemplateRows: "repeat(auto-fill, minmax(100px, 1fr))",
        gridGap: 20,
        flex: 1,
        position: "relative"
    },
    on: {
        fontWeight: "bold"
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,.3)"
    }
}));

const validFilename = (filename) => {

    return !filename.match(/\`|\~|\!|\@|\$|\%|\^|\&|\*|\+|\||\\|\'|\>|\?|\/|\""|\;/g);
};

export default function FileManager({onSelectedFile}) {
    const classes = useStyles();
    const {t} = useTranslation();
    const [expanded, setExpanded] = useState(['public']);
    const [isSubmitting, setSubmitting] = useState(false);
    const [folders, setFolders] = useState({});
    const [files, setFiles] = useState([]);
    const {mainIcon, mainTitle} = useSelector(({system}) => system);
    const [currentFolder, setCurrentFolder] = useState('');
    const [formResult, setFormResult] = useState({status: ""});
    const [selectedItem, setSelectedItem] = useState([]);
    const [openDeletePopup, setOpenDeletePopup] = useState(false);
    const [newFolder, setNewFolder] = useState({
        popup: false,
        name: '',
        error: ''
    });

    const onDrop = async (acceptedFiles) => {

        const abortController = new AbortController();
        try {
            const formData = new FormData();
            acceptedFiles.forEach((file) => {
                formData.append('files[]', file, file.name);
            })
            formData.append('folder', currentFolder);
            let res = await fetch(API_URL_LIST.fileManagerUpload,
                {
                    method: 'post',
                    body: formData,
                    signal: abortController.signal
                });
            let data = await res.json();

            setFiles(data.result.files);
            setFormResult({
                status: data.status === API_STATUS_RESULT.SUCCESS,
                statusText: t(Object.keys(data.status_text)[0])
            });


        } catch (e) {
            console.log(e.toString());
        } finally {
            setSubmitting(false);
            abortController.abort();
        }
    };

    const {isDragActive, getRootProps, getInputProps, isDragReject, isFileTooLarge, acceptedFiles, rejectedFiles} = useDropzone({
        onDrop,
        noClick: true,
    })

    const handleSelectedItem = (item) => {
        if (selectedItem.indexOf(item) !== -1) {
            setSelectedItem(selectedItem.filter(v => v !== item));
        } else {
            setSelectedItem([...selectedItem, item]);
        }

    };

    const handleToggleTreeView = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleSelectTreeView = (event, nodeIds) => {
        setCurrentFolder(nodeIds);
    };

    const handleClosePopup = () => {
        setNewFolder({...newFolder, popup: false, name: '', error: ''});
    };

    const handleCloseDeletePopup = () => {
        setOpenDeletePopup(false);
    };

    const handleChangeNewFolderName = (e) => {

        let error = ''

        if (e.target.value === '') {
            error = t("error_message.required");
        }

        if (!validFilename(e.target.value)) {
            error = t("error_message.filename_not_valid");
        }

        setNewFolder({
            ...newFolder,
            name: e.target.value,
            error: error
        });
    };

    const handleCreateNewFolder = async () => {

        if (newFolder.name === '') {
            return;
        }

        if (!validFilename(newFolder.name)) {
            return;
        }

        setSubmitting(true);
        const abortController = new AbortController();
        try {
            let res = await fetch(API_URL_LIST.fileManagerCreateFolder,
                {
                    method: 'post',
                    body: JSON.stringify({
                        folder: currentFolder,
                        new_folder_name: newFolder.name
                    }),
                    signal: abortController.signal
                });
            let data = await res.json();

            setFolders(data.result.folders);
            setFiles(data.result.files);

            handleClosePopup();

            setFormResult({
                status: data.status === API_STATUS_RESULT.SUCCESS,
                statusText: t(Object.keys(data.status_text)[0])
            });


        } catch (e) {
            console.log(e.toString());
        } finally {
            setSubmitting(false);
            abortController.abort();
        }
    }

    const handleDeleteItem = async () => {

        setSubmitting(true);
        const abortController = new AbortController();
        try {
            let res = await fetch(API_URL_LIST.fileManagerDeleteItem,
                {
                    method: 'post',
                    body: JSON.stringify({
                        folder: currentFolder,
                        selectedItem: selectedItem
                    }),
                    signal: abortController.signal
                });
            let data = await res.json();

            setFolders(data.result.folders);
            setFiles(data.result.files);

            setFormResult({
                status: data.status === API_STATUS_RESULT.SUCCESS,
                statusText: t(Object.keys(data.status_text)[0])
            });

            handleCloseDeletePopup();
            setSelectedItem([]);

        } catch (e) {
            console.log(e.toString());
        } finally {
            setSubmitting(false);
            abortController.abort();
        }
    }

    const getAllFileInFolder = async () => {
        setSubmitting(true);
        const abortController = new AbortController();
        try {

            let res = await fetch(API_URL_LIST.fileManagerGetFileInFolder,
                {
                    method: 'post',
                    body: JSON.stringify({
                        folder: currentFolder,
                    }),
                    signal: abortController.signal
                });
            let data = await res.json();

            setFiles(data.result.files);
            setSubmitting(false);
            setSelectedItem([]);
        } catch (e) {
            console.log(e.toString())
        } finally {
            abortController.abort();
        }
    }

    const getFolder = async () => {

        setSubmitting(true);
        const abortController = new AbortController();
        try {
            let res = await fetch(API_URL_LIST.fileManagerGetFolder,
                {
                    method: 'post',
                    body: JSON.stringify({
                        folder: currentFolder,
                    }),
                    signal: abortController.signal
                });
            let data = await res.json();
            setFolders(data.result.folders);
            setFiles(data.result.files);
            setSubmitting(false);
        } catch (e) {
            console.log(e.toString())
        } finally {
            abortController.abort();
        }
    };

    useEffect(() => {
        getFolder();
    }, []);

    useEffect(() => {
        getAllFileInFolder();
    }, [currentFolder]);

    const addTreeItem = (arr, start = '') => {
        return Object.keys(arr).map(k => {

            if (start === '/') {
                start = '';
            }

            const current = (k === 'public' ? '/' : `${start}/${k}`)
            return <TreeItem key={current} nodeId={current} label={k}>
                {arr[k] != null && addTreeItem(arr[k], current)}
            </TreeItem>
        });
    }

    return (<>
        <ProjectCard icon={mainIcon} title={mainTitle} isSubmitting={isSubmitting} formResult={formResult}>
            <br/>
            <div>
                <ButtonGroup color="default" aria-label="outlined primary button group"
                             className={classes.buttonGroup}>
                    <Button aria-label="back" variant={"outlined"}>
                        <Icon>arrow_back</Icon>
                    </Button>
                    <Button aria-label="home" variant={"outlined"} onClick={getFolder}>
                        <Icon>home</Icon>
                    </Button>
                    <Button aria-label="refresh" onClick={getAllFileInFolder}>
                        <Icon>refresh</Icon>
                    </Button>
                </ButtonGroup>
                <ButtonGroup color="default" aria-label="outlined primary button group">
                    <Button aria-label="new folder" onClick={() => setNewFolder({...newFolder, popup: true})}>
                        <Icon>create_new_folder</Icon>
                    </Button>
                    <Button aria-label="upload" onClick={open}>
                        <Icon>cloud_upload</Icon>
                    </Button>
                    <Button aria-label="delete" onClick={() => setOpenDeletePopup(true)}>
                        <Icon>delete</Icon>
                    </Button>
                </ButtonGroup>
            </div>
            <div className={classes.fileManagerWrapper}>
                <div className={classes.treeViewWrapper}>
                    <TreeView
                        className={classes.root}
                        defaultCollapseIcon={<ExpandMoreIcon/>}
                        defaultExpandIcon={<ChevronRightIcon/>}
                        expanded={expanded}
                        selected={currentFolder}
                        onNodeToggle={handleToggleTreeView}
                        onNodeSelect={handleSelectTreeView}
                    >
                        {addTreeItem(folders)}
                    </TreeView>
                </div>
                <div className={classes.grid} {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive
                        ?
                        <div className={classes.dropOverlay}>
                            {!isDragReject && t("file_manager.drop_file")}
                            {isDragReject && t("file_manager.wrong_file_type")}
                            {isFileTooLarge && t("file_manager.file_too_large")}

                        </div>
                        : null}

                    {files.map((v, i) => <FileElement key={i} file={v} OnFolderClick={() => setCurrentFolder(v.url)}
                                                      isSelected={selectedItem.indexOf(v.url) !== -1}
                                                      onSelectedFile={onSelectedFile}
                                                      onSelectedItem={() => handleSelectedItem(v.url)}/>)}
                </div>
            </div>

        </ProjectCard>
        <Dialog
            open={newFolder.popup}
            onClose={handleClosePopup}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{t("file_manager.create_folder")}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {t("file_manager.create_folder_description")}
                </DialogContentText>
                <TextField
                    error={newFolder.error !== ''}
                    helperText={newFolder.error}
                    autoFocus
                    margin="dense"
                    id="newFolder"
                    label={t("file_manager.folder_name")}
                    type="text"
                    fullWidth
                    onChange={handleChangeNewFolderName}
                    value={newFolder.name}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClosePopup} color="primary">
                    {t("global.reset")}
                </Button>
                <Button onClick={handleCreateNewFolder} color="primary">
                    {t("global.submit")}
                </Button>
            </DialogActions>
        </Dialog>
        <Dialog
            open={openDeletePopup}
            onClose={handleCloseDeletePopup}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{t("file_manager.delete_item")}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {selectedItem.length > 0
                        ? t("file_manager.delete_item_description")
                        : t("file_manager.please_select_item")
                    }


                </DialogContentText>
                <ul>
                    {selectedItem.map(v => <li key={v}>{basename(v)}</li>)}
                </ul>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseDeletePopup} color="primary">
                    {t("global.reset")}
                </Button>
                {selectedItem.length > 0 &&
                <Button onClick={handleDeleteItem} color="primary">
                    {t("global.submit")}
                </Button>
                }
            </DialogActions>
        </Dialog>
    </>)
}
