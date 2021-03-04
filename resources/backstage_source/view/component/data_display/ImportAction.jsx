import React, {useEffect, useState} from "react";
import {Button, makeStyles} from "@material-ui/core";
import globalStyle from "../../../asset/jss/standard";
import ProjectCard from "../ProjectCard";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import CSVReader from "react-csv-reader";
import CMSDataTable from "./CMSDataTable";
import Alert from "@material-ui/lab/Alert";
import _ from "lodash";
import {connectAPI} from "../../../asset/lib/FormHelper";

const useStyles = makeStyles((theme) => ({
    tableWrapper: {
        overflow: "auto"
    },
    ...globalStyle(theme)
}));

export default function ImportAction({columns, type_id, importUrl, onStartImport, onImportDone, serverValidation, additionalData, ...props}) {

    const classes = useStyles();
    const {mainIcon, mainTitle, languageSupport} = useSelector(({system}) => system);
    const {t} = useTranslation();
    const [csvData, setCsvData] = useState({
        data: [],
        fileInfo: {},
        error: [],
    });
    const [showColumn, setShowColumn] = useState(columns.map(v => ({...v, original: v.field})));

    const handleSwitchColumn = (original, newField) => {
        setShowColumn(showColumn.map(v => (v.original === original ? {
            ...v,
            field: (newField === '' ? v.original : newField)
        } : v)))
    }

    const validateData = async (data) => {
        let validateResult = showColumn.filter(v => v.validate)
            .map(v => {

                let errorValue = [];

                const noError = data.reduce(function (accumulator, rowData) {

                    if (!v.validate(rowData[v.field])) {
                        errorValue.push(rowData[v.field]);
                        return accumulator + 1;
                    }
                    return accumulator;
                }, 0);

                return noError > 0 && t(v.errorText, {
                    count: noError,
                    errorValue: _.uniq(errorValue).join(',')
                })
            })

        if (serverValidation && data.length > 0) {

            const serverResult = await serverValidation(data);
            validateResult = [...validateResult, serverResult];
        }
        return validateResult;
    }

    const handleFileUploaded = async (data, fileInfo) => {
        setCsvData({data, fileInfo, error: await validateData(data)});
    }

    const handleImport = async () => {

        let data = {
            type_id,
            showColumn,
            data: csvData.data

        };


        if (onStartImport) {
            data = onStartImport(data);
            if (data === false) {
                return false;
            }

        }
        const response = await connectAPI(importUrl, {
            data
        });

        onImportDone(response);

    }

    useEffect(() => {

        (async () => {
            setCsvData({...csvData, error: await validateData(csvData.data)});
        })();
    }, [showColumn]);


    return (<>
            <ProjectCard icon={mainIcon} title={mainTitle}>
                <br/>
                {props.children}

                <CSVReader
                    parserOptions={{
                        header: true,
                        dynamicTyping: true,
                        skipEmptyLines: true,
                        transformHeader: header =>
                            header
                                .toLowerCase()
                                .replace(/\W/g, '_')
                    }}
                    onFileLoaded={handleFileUploaded}
                />
            </ProjectCard>
            {csvData.fileInfo?.name &&
            <ProjectCard icon={mainIcon} title={csvData.fileInfo.name}>
                {csvData?.error.filter(v => v)
                    .map((v, i) => <Alert key={i} severity="error"> {v}</Alert>)}
                {csvData?.error.every(v => !v) &&
                <Alert severity="success">
                    {t("participant.validate.success")} <Button onClick={handleImport}
                                                                variant="contained" size="small" color="primary">
                    {t("global.start_import")}
                </Button>
                </Alert>}
                <div className={classes.tableWrapper}>
                    <CMSDataTable
                        data={csvData.data}
                        columns={showColumn}
                        onSwitchColumn={handleSwitchColumn}
                        option={{
                            columnSelector: true,
                            sorting: true,
                        }}
                    />
                </div>
            </ProjectCard>}
        </>
    )
}
