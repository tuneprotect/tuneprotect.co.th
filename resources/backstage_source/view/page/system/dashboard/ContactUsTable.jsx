import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import globalStyle from "../../../../asset/jss/standard";
import {API_URL_LIST} from "../../../../config/config";
import {format, parseISO} from 'date-fns'
import {connectAPI} from "../../../../asset/lib/FormHelper";
import ProjectCard from "../../../component/ProjectCard";
import CMSDataTable from "../../../component/data_display/CMSDataTable";
import ConfirmPopup from "../../../component/ConfirmPopup";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {deleteColor} from "../../../../config/theme";


const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));

export default function ContactUsTable() {
    const classes = useStyles();
    const {t} = useTranslation();
    const [showDataPopup, setShowDataPopup] = useState({
        open: false,
        data: {}
    });
    const [contactData, setContactData] = useState([]);
    const columns = [
        {
            field: "name",
            title: t("global.name"),
        },
        {
            field: "subject",
            title: t("global.title"),
        },
    ];
    const tableActions = [
        {
            icon: 'search',
            title: t("global.show_data"),
            position: "row",
            buttonClass: classes.btnEdit,
            onClick: (event, rowData) => {
                setShowDataPopup({
                    open: true,
                    data: rowData
                });
            }
        }
    ];

    useEffect(() => {
        (async () => {
            const paymentResult = await connectAPI(API_URL_LIST.contactGetLatest, {
                showLoading: false,
                showStatus: false
            });
            setContactData(paymentResult.result);
        })();
    }, []);

    const childPorps = {
        data: contactData,
        columns: columns,
        actions: tableActions,
        option: {
            sorting: true,
            rowStyle: rowData => {
                if (rowData.connection === 'staging') {
                    return {background: `repeating-linear-gradient(-45deg,${deleteColor[100]},${deleteColor[100]} 10px,${deleteColor[50]} 10px,${deleteColor[50]} 20px)`};
                }
            }
        }
    }

    return <>
            <Grid component="div" item={true} xs={12} sm={12} md={12} lg={12}>
                <ProjectCard icon="alternate_email" title={t('dashboard.latest_contact')}>
                    <CMSDataTable {...childPorps} />
                </ProjectCard>
                <ConfirmPopup
                    open={showDataPopup.open}
                    handleClose={() => setShowDataPopup({
                        open: false,
                        data: {}
                    })}>
                    <Table>
                        <TableBody>
                            {Object.keys(showDataPopup.data).map(k => <TableRow key={k}>
                                <TableCell>{k}</TableCell>
                                <TableCell>{showDataPopup.data[k]}</TableCell>
                            </TableRow>)}


                        </TableBody>
                    </Table>
                </ConfirmPopup>
            </Grid>
        </>

}
