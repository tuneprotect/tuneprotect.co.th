import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useTranslation} from 'react-i18next';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SmallWidget from "../../../component/SmallWidget";
import globalStyle from "../../../../asset/jss/standard";
import {API_URL_LIST, DATE_FORMAT} from "../../../../config/config";
import {differenceInDays, format} from 'date-fns'
import Button from "@material-ui/core/Button";
import {connectAPI} from "../../../../asset/lib/FormHelper";
import ContactUsTable from "./ContactUsTable";


const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme)
}));

export default function DashboardPage() {
    const classes = useStyles();
    const {adminData} = useSelector(({system}) => system);
    const {t} = useTranslation();

    const [pwdExpire, setPwdExpire] = useState({
        timeLeft: " ",
        description: "-",
        color: "infoCardHeader",
        loading: true,
    });
    const [cache, setCache] = useState({
        loading: false,
    });


    useEffect(() => {
        const timeLeft = differenceInDays(new Date(adminData.password_expire), new Date());
        setPwdExpire({
            timeLeft,
            description: format(new Date(adminData.password_expire), DATE_FORMAT.LONG_DATE_TIME),
            color:
                (timeLeft < 10 && "errorCardHeader") ||
                (timeLeft < 30 && "warningCardHeader") ||
                (timeLeft < 50 && "successCardHeader") ||
                "infoCardHeader",
            loading: false,
        });

    }, []);
    const handleClearCache = async (server) => {

        setCache({loading: true});

        const response = await connectAPI(API_URL_LIST.systemClearCache, {
            data: {
                server
            }
        });

        setCache({loading: false});
    }
    return (
        <>
            <Grid component="section" container spacing={2}>
                <Grid component="div" item={true} xs={12} sm={6} md={6} lg={4}>
                    <SmallWidget icon="data_usage" iconClassName={classes["infoCardHeader"]}
                                 footer={t("dashboard.clear_cache_description")} loading={cache.loading}>
                        <p>{t("dashboard.clear_cache")}</p>
                        <div>
                            <Button onClick={() => handleClearCache('staging')}
                                    variant="contained" size="small"
                                    color="secondary">{t("system_checking.db_staging")}</Button>
                            &nbsp;
                            <Button onClick={() => handleClearCache('live')}
                                    variant="contained" size="small"
                                    color="primary">{t("system_checking.db_live")}</Button>
                        </div>
                    </SmallWidget>
                </Grid>

                {adminData.password_expire &&

                <Grid component="div" item={true} xs={12} sm={6} md={6} lg={4}>
                    <SmallWidget icon="lock" iconClassName={classes[pwdExpire.color]}
                                 footer={pwdExpire.description} loading={pwdExpire.loading}>
                        <p>{t("dashboard.password_expire")}</p>
                        <h3>
                            {pwdExpire.timeLeft + " "}<small>{t("global.day")}</small>
                        </h3>
                    </SmallWidget>
                </Grid>}
            </Grid>
            <Grid component="section" container spacing={2}>
                <ContactUsTable/>
            </Grid>
        </>
    )
}
