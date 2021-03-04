import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Draggable} from "react-beautiful-dnd";
import globalStyle from "../../../asset/jss/standard";
import CMSTableRow from "./CMSTableRow";


const useStyles = makeStyles(theme => ({
    td: {
        backgroundColor: '#fff'
    },
    ...globalStyle(theme)
}));

export default function CMSTableRowWithDrag({rowData, index, selected, onToggle, ...props}) {
    const classes = useStyles();
    return <Draggable key={rowData.id} draggableId={rowData.id.toString()} index={index}>
        {(provided, snapshot) => {
            const fixedStyle = (snapshot.isDragging ? {display: "table"} : {})

            const tableRowProp = {
                ref: provided.innerRef,
                style: {
                    ...provided.draggableProps.style,
                    ...props?.option?.rowStyle(rowData),
                    ...fixedStyle
                },
                ...provided.draggableProps,
                ...provided.dragHandleProps
            };


            return <CMSTableRow rowData={rowData} index={index} selected={selected} onToggle={onToggle}
                                tableRowProp={tableRowProp}    {...props}            />
        }}
    </Draggable>
}

