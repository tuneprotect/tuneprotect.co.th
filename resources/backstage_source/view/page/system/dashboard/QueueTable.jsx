import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import globalStyle from "../../../../asset/jss/standard";
import {API_URL_LIST} from "../../../../config/config";
import {format, fromUnixTime} from 'date-fns'
import {connectAPI} from "../../../../asset/lib/FormHelper";
import ProjectCard from "../../../component/ProjectCard";
import CMSDataTable from "../../../component/data_display/CMSDataTable";
import ConfirmPopup from "../../../component/ConfirmPopup";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';


const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));

export default function QueueTable() {
    const classes = useStyles();
    const {t} = useTranslation();
    const [jobQueue, setJobQueue] = useState({
        queue: [],
        color: "infoCardHeader",
        loading: true,
    });
    const [showDataPopup, setShowDataPopup] = useState({
        open: false,
        data: {}
    });
    const [deletePopup, setDeletePopup] = useState({
        open: false
    });
    const [startPopup, setStartPopup] = useState({
        open: false
    });
    const queueTable = {
        columns: [
            {
                field: "id",
                title: t("global.id")
            },
            {
                field: "display",
                title: t("global.name"),
                render: rowData => JSON.parse(rowData.payload).displayName
            },
            {
                field: "created_at",
                title: t("global.created_at"),
                render: rowData => format(fromUnixTime(rowData.created_at), 'dd/MM/yyyy HH:mm:ss')
            }
        ],
        actions: [{
            icon: 'search',
            title: t("global.show_data"),
            position: "row",
            buttonClass: classes.btnEdit,
            onClick: (event, rowData) => {
                setShowDataPopup({
                    open: true,
                    data: JSON.parse(rowData.payload)
                });
            }
        }],
        option: {
            sorting: true
        }
    }

    const clearAllQueue = async () => {
        const queueResult = await connectAPI(API_URL_LIST.systemClearQueue, {
            showLoading: false,
            showStatus: false
        });
        setJobQueue({
            queue: [],
            color: "infoCardHeader",
            loading: false,
        });
    }

    const startQueue = async () => {
        setStartPopup({
            open: false
        })

        const queueResult = await connectAPI(API_URL_LIST.systemStartQueue, {
            showLoading: false,
            showStatus: false
        });
        setJobQueue({
            queue: [],
            color: "infoCardHeader",
            loading: false,
        });
    }

    useEffect(() => {
        (async () => {
            const queueResult = await connectAPI(API_URL_LIST.systemCheckQueue, {
                showLoading: false,
                showStatus: false
            });
            setJobQueue({
                queue: queueResult.result,
                color:
                    (queueResult.result.length > 100 && "errorCardHeader") ||
                    (queueResult.result.length > 50 && "warningCardHeader") ||
                    (queueResult.result.length > 30 && "successCardHeader") ||
                    "infoCardHeader",
                loading: false,
            });
        })();
    }, []);

    return <>
            <Grid component="div" item={true} xs={12} sm={12} md={12} lg={6}>
                <ProjectCard icon="queue" title={t('dashboard.queue')}>
                    <br/>
                    <Button type="button" variant="contained"
                            color="secondary"
                            className={classes.btnDelete}
                            startIcon={<DeleteIcon/>}
                            onClick={() => setDeletePopup({open: true})}
                    >
                        {t('dashboard.delete_all_queue')}
                    </Button>
                    <Button type="button" variant="contained"
                            color="secondary"
                            className={classes.btnSuccess}
                            startIcon={<DirectionsRunIcon/>}
                            onClick={() => setStartPopup({open: true})}
                    >
                        {t('dashboard.start_queue')}
                    </Button>
                    <br/>
                    <CMSDataTable data={jobQueue.queue} {...queueTable} />
                </ProjectCard>
            </Grid>
            <ConfirmPopup
                open={showDataPopup.open}
                handleClose={() => setShowDataPopup({
                    open: false,
                    data: {}
                })}>
                {Object.keys(showDataPopup.data).length > 0 &&
                <Table>
                    <TableBody>
                        {Object.keys(showDataPopup.data).map(k =>
                            showDataPopup.data[k] ?
                                (<TableRow key={k}>

                                    <TableCell>{k}</TableCell>
                                    <TableCell>{showDataPopup.data[k] instanceof Object ? JSON.stringify(showDataPopup.data[k]) : showDataPopup.data[k]}</TableCell>
                                </TableRow>)
                                : null
                        )}
                    </TableBody>
                </Table>
                }
            </ConfirmPopup>
            <ConfirmPopup
                open={deletePopup.open}
                handleConfirm={() => clearAllQueue()}
                handleClose={() => setDeletePopup({
                    open: false
                })}>
                {t("global.delete_alert_description")}
            </ConfirmPopup>
            <ConfirmPopup
                open={startPopup.open}
                handleConfirm={() => startQueue()}
                handleClose={() => setStartPopup({
                    open: false
                })}>
                {t("dashboard.start_queue_alert_description")}
            </ConfirmPopup>
        </>
}
