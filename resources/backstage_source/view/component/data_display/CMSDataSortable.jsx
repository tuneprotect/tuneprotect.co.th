import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableRow} from '@material-ui/core';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import globalStyle from "../../../asset/jss/standard";
import {reorder} from "../../../asset/lib/ArrayHelper";
import CMSTableHead from "./CMSTableHead";
import CMSToolbar from "./CMSToolbar";
import CMSTableRowWithDrag from "./CMSTableRowWithDrag";
import {handleFilter} from "../../../asset/lib/DataDisplayHelper";

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },

    ...globalStyle(theme)
}));


export default function CMSDataSortable({reordered, setReordered, ...props}) {
    const classes = useStyles();
    const [selected, setSelected] = useState([]);
    const [dataList, setDataList] = useState([]);
    const {t} = useTranslation();
    const [filter, setFilter] = useState(() => {
        let obj = {};
        props.columns.map(function (v, index) {
            if (v.type === 'date') {
                obj[v.field] = {start_date: "", end_date: ""};
            } else {
                obj[v.field] = '';
            }

        });
        return obj;
    });

    const handleToggle = (value) => {
        if (selected.includes(value)) {
            setSelected([...selected.filter(i => i !== value)]);
        } else {
            setSelected([...selected, value]);
        }
    };
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const data = reorder(dataList, result.source.index, result.destination.index);

        setReordered(true);
        setDataList(data);
    };
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = dataList.map((n) => n);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    useEffect(() => {
        setDataList(props.data);
    }, [props.data]);
    useEffect(() => {
        props.onSelectionChange(selected);
    }, [selected]);
    useEffect(() => {
        setSelected([]);
    }, [props.clearSelection]);

    return (
        <>
            <CMSToolbar
                selected={selected}
                reordered={reordered}
                onSaveOrder={() => props.onSaveOrder(dataList)}/>
            <DragDropContext onDragEnd={onDragEnd}>
                <Table>
                    <CMSTableHead
                        selected={selected}
                        dataList={dataList}
                        onSelectAllClick={handleSelectAllClick}
                        filter={filter}
                        setFilter={setFilter}
                        hasDrag={true}
                        {...props} />
                    <Droppable droppableId="list">
                        {provided => (
                            <TableBody
                                className={classes.root}
                                ref={provided.innerRef}
                                {...provided.droppableProps}>

                                {dataList.length > 0
                                    ? dataList
                                        .filter((rowData) => handleFilter(rowData,filter,props))
                                        .map((v, index) => {
                                        return <CMSTableRowWithDrag key={index} rowData={v} index={index} selected={selected}
                                                            onToggle={handleToggle} hasDrag={true} {...props}/>;
                                    })
                                    : <TableRow>
                                        <TableCell style={{textAlign: "center", height: 300}}
                                                   colSpan={20}>{t('global.no_data')}</TableCell>
                                    </TableRow>


                                }
                                {provided.placeholder}
                            </TableBody>
                        )}
                    </Droppable>
                </Table>
            </DragDropContext>
        </>
    );
}

