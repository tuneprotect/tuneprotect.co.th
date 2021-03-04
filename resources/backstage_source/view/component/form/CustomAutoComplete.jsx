import React, {useEffect, useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from "@material-ui/core";
import globalStyle from "../../../asset/jss/standard";
import CustomField from "./CustomField";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));

export default function CustomAutoComplete({label, onFetch, onChange, value, handleChange, getOptionSelected, getOptionLabel}) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;

    useEffect(() => {
        let active = true;

        (async () => {
            const data = await onFetch();
            if (active) {
                setData(Object.keys(data).map((key) => data[key].item[0]));
            }
        })();

        return () => {
            active = false;
        };
    }, []);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        } else {
            setOptions(data);
        }
    }, [open]);

    return (
        <Autocomplete
            id="country"
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            name="country"
            onChange={onChange}
            getOptionSelected={getOptionSelected}
            getOptionLabel={getOptionLabel}
            options={options}
            loading={loading}
            inputValue={value}
            renderInput={(params) => (
                <CustomField
                    {...params}
                    label={label}
                    onChange={handleChange}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}