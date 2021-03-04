import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import globalStyle from "../../../asset/jss/standard";
import {FileIcon} from 'react-file-icon';
import filesize from 'filesize';
import Icon from "@material-ui/core/Icon";
import clsx from "clsx";
import {basename} from "../../../asset/lib/PathHelper";

export const EXTENSION_ICON = {

    'aac': 'audio',
    'mid': 'audio',
    'midi': 'audio',
    'mp3': 'audio',
    'oga': 'audio',
    'opus': 'audio',
    'wav': 'audio',
    'weba': 'audio',

    'avi': 'video',
    'mpeg': 'video',
    'ogv': 'video',
    'ogx': 'video',
    'ts': 'video',
    'webm': 'video',
    '3gp': 'video',
    '3g2': 'video',

    'bmp': 'image',
    'gif': 'image',
    'ico': 'image',
    'jpg': 'image',
    'jpeg': 'image',
    'png': 'image',
    'svg': 'image',
    'tif': 'image',
    'tiff': 'image',
    'webp': 'image',

    'pdf': 'acrobat',

    'zip': 'compressed',
    '7z': 'compressed',
    'tar': 'compressed',
    'bz': 'compressed',
    'bz2': 'compressed',
    'arc': 'compressed',
    'gz': 'compressed',
    'rar': 'compressed',

    'eot': 'font',
    'otf': 'font',
    'ttf': 'font',
    'woff': 'font',
    'woff2': 'font',

    'jar': 'code',
    'js': 'code',
    'json': 'code',
    'jsonld': 'code',
    'mjs': 'code',
    'csh': 'code',
    'php': 'code',
    'sh': 'code',


    'htm': 'code2',
    'html': 'code2',
    'css': 'code2',
    'xhtml': 'code2',
    'xml': 'code2',
    'xul': 'code2',

    'abw': 'document',
    'doc': 'document',
    'docx': 'document',
    'odt': 'document',
    'rtf': 'document',
    'txt': 'document',

    'csv': 'spreadsheet',
    'ods': 'spreadsheet',
    'xls': 'spreadsheet',
    'xlsx': 'spreadsheet',

    'odp': 'presentation',
    'ppt': 'presentation',
    'pptx': 'presentation',
    'epub': 'presentation',
    'azw': 'presentation',

    'bin': 'binary',
    'mpkg': 'binary',

    'swf': '3d',
    'vsd': '3d',

    'ics': 'settings'
};

export const EXTENSION_ICON_COLOR = {
    'audio': 'tomato',
    'video': 'orange',
    'acrobat': 'gold',
    'compressed': 'lightgreen',
    'code': 'deepskyblue',
    'code2': 'deepskyblue',
    'document': 'orchid',
    'spreadsheet': 'beige',
    'presentation': 'lavender',
    'binary': '#FFB900',
    '3d': '#00D2FF',
    'settings': '#4B2B36',
    'image': '#31C5F0'
}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 10,
        cursor: "pointer",
        overflow: "hidden"
    },
    label: {
        fontSize: "0.8em",
        wordWrap: "break-word",
        display: "block",
        textAlign: "center"
    },
    image: {
        width: 48,
        height: 48,
        backgroundPosition: "center",
        backgroundSize: "cover",
        margin: "0 auto"
    },
    selected: {
        backgroundColor: theme.palette.primary.light
    },
    ...globalStyle(theme),
}));


export default function FileElement(props) {
    const classes = useStyles();

    return props.file.ext === 'folder'
        ? <FolderItem {...props} />
        : <FileItem {...props} onSelectedFile={props.onSelectedFile} />
}


function FolderItem({file, OnFolderClick, onSelectedItem, isSelected}) {
    const classes = useStyles();
    return <div className={clsx(classes.root, isSelected && classes.selected)} onDoubleClick={OnFolderClick}
                onClick={onSelectedItem}>
        <div className="text-center">
            <Icon style={{fontSize: 48}}>folder</Icon>
        </div>
        <span className={classes.label}> {basename(file.url)} </span>
    </div>
}

function FileItem({file, onSelectedItem, isSelected, onSelectedFile}) {
    const classes = useStyles();
    return <div className={clsx(classes.root, isSelected && classes.selected)} onClick={onSelectedItem}
    onDoubleClick={() => onSelectedFile(file.public_url)} >
        <div className="text-center">


            {EXTENSION_ICON[file.ext] === 'image'
                ? <div className={classes.image} style={{backgroundImage: 'url("' + file.public_url + '")'}}/>
                : <FileIcon size={48}
                            type={EXTENSION_ICON[file.ext]}
                            extension={file.ext}
                            labelColor={EXTENSION_ICON_COLOR[EXTENSION_ICON[file.ext]]}
                />
            }


        </div>
        <span className={classes.label}> {basename(file.url)} </span>
        <span className={classes.label}> {filesize(file.size)} </span>
    </div>

}
