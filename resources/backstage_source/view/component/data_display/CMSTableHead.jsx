import React from 'react';
import {useTranslation} from 'react-i18next';
import {Checkbox, makeStyles, TableCell, TableHead, TableRow, TableSortLabel, TextField} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import globalStyle from "../../../asset/jss/standard";
import {DATE_FORMAT} from "../../../config/config";
import {KeyboardDateTimePicker} from "@material-ui/pickers";
import {format} from 'date-fns'
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
    ...globalStyle(theme)
}));


export default function CMSTableHead(props) {
    const classes = useStyles();
    const {t} = useTranslation();

    return <TableHead>
        <TableRow>
            {props.hasDrag === true && <TableCell padding="checkbox"/>}
            {props.option?.selection === true &&
            <TableCell padding="checkbox">
                <Checkbox
                    indeterminate={props.selected.length > 0 && props.selected.length < props.dataList.length}
                    checked={props.dataList.length > 0 && props.selected.length === props.dataList.length}
                    onChange={props.onSelectAllClick}
                    inputProps={{'aria-label': 'select all'}}
                />
            </TableCell>}
            {props.columns.map((v, i) => (
                <TableCell key={i}>
                    {props.option?.sorting && props.hasDrag !== true
                        ? <TableSortLabel
                            active={props.orderBy.field === v.field}
                            direction={props.orderBy.field === v.field ? props.orderBy.direction : 'asc'}
                            onClick={() => props.onSort(v.field)}
                        >
                            {v.title}
                            {props.orderBy.field === v.field ? (
                                <span
                                    className={classes.visuallyHidden}> {props.orderBy.direction === 'desc' ? 'sorted descending' : 'sorted ascending'} </span>
                            ) : null}
                        </TableSortLabel>
                        : v.title
                    }
                </TableCell>
            ))}
            {props?.actions?.length > 0 &&
            <TableCell padding="checkbox" align="center">{t("global.action")}</TableCell>}
        </TableRow>
        {props?.option?.columnSelector && <TableRow>
            {props.hasDrag === true && <TableCell padding="checkbox"/>}
            {props.option?.selection === true && <TableCell padding="checkbox"/>}
            {props.columns.map((v, i) => (
                <TableCell key={i}>
                    <Select
                        labelId={v.field}
                        id={v.field}
                        value={Object.keys(props.data[0]).includes(v.field) ? v.field : ''}
                        onChange={e => props.onSwitchColumn(v.original, e.target.value)}
                        style={{width: "100%"}}
                        displayEmpty>
                        <MenuItem value="">{t('global.none')}</MenuItem>
                        {Object.keys(props.data[0]).map(lookupKey =>
                            <MenuItem key={lookupKey}
                                      value={lookupKey}>{lookupKey}</MenuItem>)}
                    </Select>
                </TableCell>
            ))}
            {props?.actions?.length > 0 &&
            <TableCell padding="checkbox"/>}
        </TableRow>}

        {props?.option?.filtering && <TableRow>
            {props.hasDrag === true && <TableCell padding="checkbox"/>}
            {props.option?.selection === true && <TableCell padding="checkbox"/>}
            {props.columns.map((v, i) => (
                <TableCell key={i}>
                    {v.filtering === false ? null :
                        v.lookup !== undefined
                            ? <Select
                                labelId={v.field}
                                id={v.field}
                                value={props.filter[v.field]}
                                onChange={e => props.setFilter({...props.filter, [v.field]: e.target.value})}
                                style={{width: "100%"}}
                                displayEmpty
                            >
                                <MenuItem value=""> {v.title} </MenuItem>
                                {Object.keys(v.lookup).map(lookupKey => <MenuItem key={lookupKey}
                                                                                  value={lookupKey}>{v.lookup[lookupKey]}</MenuItem>)}
                            </Select>
                            : v.type === 'date'
                            ?
                            <>
                                {['start_date', 'end_date'].map(v1 => <div
                                    key={`${v.field}_${v1}`}
                                ><KeyboardDateTimePicker

                                    clearable
                                    label={t(`global.${v1}`)}
                                    name={`${v1}`}
                                    value={props.filter[v.field][v1] || null}
                                    onChange={date => props.setFilter({
                                        ...props.filter,
                                        [v.field]: {...props.filter[v.field], [v1]: format(date, DATE_FORMAT.LOG_DATE)}
                                    })}
                                    ampm={false}
                                    style={{fontSize: 10}}
                                    labelFunc={(date) => {
                                        if (date !== null) {
                                            return format(date, DATE_FORMAT.SHORT_DATE_TIME);
                                        } else {
                                            return '';
                                        }
                                    }}
                                /></div>)}

                            </>
                            :

                            <TextField
                                value={props.filter[v.field]}
                                onChange={e => props.setFilter({...props.filter, [v.field]: e.target.value})}
                                InputProps={{
                                    endAdornment: <FilterListIcon position="end"/>
                                }}
                                fullWidth={true}
                                placeholder={v.title}
                            />

                    }
                </TableCell>
            ))}
            {props?.actions?.length > 0 &&
            <TableCell padding="checkbox"/>}
        </TableRow>


        }


    </TableHead>
}
