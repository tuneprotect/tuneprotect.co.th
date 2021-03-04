import React from 'react';
import {Checkbox, Icon, TableCell, TableRow} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import DisplayAction from "./DisplayAction";
import globalStyle from "../../../asset/jss/standard";
import CustomField from "../form/CustomField";


const useStyles = makeStyles(theme => ({
    td: {
        backgroundColor: '#fff'
    },
    ...globalStyle(theme)
}));

export default function CMSTableRow({rowData, index, selected = [], onToggle, tableRowProp, ...props}) {
    const classes = useStyles();
    const labelId = `checkbox-list-label-${rowData.id}`;
    const isItemSelected = selected.indexOf(rowData) !== -1;

    const renderField = (rowData, column) => {
        return column.render ? column.render(rowData) : rowData[column.field]
    }

    return <TableRow
        hover
        className={classes.td}
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={rowData.id}
        selected={isItemSelected}
        {...tableRowProp}
        style={{...tableRowProp?.style, ...(props?.option?.rowStyle ? props?.option?.rowStyle(rowData) : {})}}
    >
        {props.hasDrag &&
        <TableCell padding="checkbox"
                   style={{lineHeight: 0}}><Icon>drag_indicator</Icon></TableCell>
        }
        {props.option?.selection === true &&
        <TableCell padding="checkbox">
            <Checkbox
                checked={isItemSelected}
                inputProps={{'aria-labelledby': labelId}}
                onClick={() => {
                    onToggle(rowData);
                }}
            />
        </TableCell>
        }

        {props.columns.map((v1, i1) => (
            <TableCell key={i1} style={v1.cellStyle || {}}>
                {v1?.editable === 'always'
                    ? <CustomField
                        value={renderField(rowData, v1) || ''}
                        variant="outlined"
                        onChange={(e) => props.handleChange(e, index, v1)}
                    />
                    : renderField(rowData, v1)
                }
            </TableCell>
        ))}

        {props?.actions?.length > 0 && <TableCell padding="checkbox">
            <div style={{display: 'flex'}}>
                {props?.actions
                    .map((v1, i1) => <DisplayAction key={i1} action={v1} data={rowData} index={index}/>)}
            </div>
        </TableCell>}
    </TableRow>

}

