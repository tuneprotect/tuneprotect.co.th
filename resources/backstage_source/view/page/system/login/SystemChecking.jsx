import React, {useEffect, useState} from "react";
import {CircularProgress, Icon, Table, TableBody, TableCell, TableRow, Typography} from "@material-ui/core";
import {useTranslation} from 'react-i18next';
import {green} from "@material-ui/core/colors";
import {API_URL_LIST} from "../../../../config/config";
import {connectAPI} from "../../../../asset/lib/FormHelper";

export default function SystemChecking({checkingUrl = API_URL_LIST.systemOverallCheck, onCheckingDone, setSocialLogin}) {
    const [feature, setFeature] = useState({
        "api_connection": false,
        "php_version": false,
        "db_staging": false,
        "db_live": false,
        "resource_folder": false,
        "public_folder": false,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const {t} = useTranslation();

    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await connectAPI(checkingUrl, {
                showStatus: false,
                showLoading: false
            });

            if (response.err) {
                setError(response.err.toString());
                setLoading(false);
                onCheckingDone(false);
            } else {
                setFeature(response.result.checking);

                if (setSocialLogin !== undefined) {
                    setSocialLogin(response.result.social_login);
                }
                onCheckingDone(Object.values(response.result.checking).every((v) => v === true));
            }

        })();
    }, []);

    return <Table>
        <TableBody>
            {Object.keys(feature).map((key, i) =>
                <TableRow key={i}>
                    <TableCell component="th" scope="row">
                        <Typography component="p" color={feature[key] ? "inherit" : "error"}>
                            {t("system_checking." + key)}
                        </Typography>
                    </TableCell>
                    <TableCell align="center">
                        {loading
                            ? <CircularProgress/>
                            : (feature[key] ? <Icon style={{color: green[500]}}>done</Icon> :
                                <Icon color="error">clear</Icon>)
                        }
                    </TableCell>
                </TableRow>)}
            {error !== '' ?
                <TableRow>
                    <TableCell align="center" colSpan={2} className="error_message">
                        <Typography component="p" color="error">{error}</Typography>
                    </TableCell>
                </TableRow>
                : null}
        </TableBody>
    </Table>
}
