import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {checkAction, connectAPI} from "../../../asset/lib/FormHelper";
import {API_STATUS_RESULT, API_URL_LIST} from "../../../config/config";
import globalStyle from "../../../asset/jss/standard";
import {makeStyles, TextField} from "@material-ui/core";
import Translate from "../../component/Translate";

const useStyles = makeStyles((theme) => ({
    input: {
        width: '100%'
    },
    table: {
        width: '100%',
        "& th,& td ": {
            padding: '5px 10px'
        },
        "& th": {
            verticalAlign: 'middle',
            textAlign: "left"
        },
        "& tbody th": {
            textAlign: "center"
        },
    },
    ...globalStyle(theme)
}));

export default function ChildContentPage({type_id, parent_id, config, ...props}) {
    const classes = useStyles();
    const [webContentData, setWebContentData] = useState([]);
    const {languageSupport} = useSelector(({system}) => system);
    const allCol = {
        code: <Translate id="global.code"/>,
        en: 'English',
        th: 'Thai',
        custom_input_1: <Translate id="global.postal_code"/>
    };


    const handleReload = async () => {
        const response = await connectAPI(API_URL_LIST.webContentGetAll, {
            data: {type_id, parent_id},
            showStatus: false
        });
        if (response.status === API_STATUS_RESULT.SUCCESS) {
            setWebContentData(response.result);
        }
    }
    useEffect(() => {
        handleReload();
    }, []);

    return (
        <>
            <table className={classes.table}>
                <thead>
                <tr>
                    {Object.keys(allCol)
                        .map((col) => <th className={classes.th} key={col}>{allCol[col]}</th>)
                    }
                </tr>
                </thead>
                <tbody>
                {webContentData.map((row, i) => <tr key={i}>
                    {Object.keys(allCol)
                        .map((col) => <td className={classes.th} key={col}>
                            <TextField
                                style={{margin: '0', minHeight: "100%"}}
                                margin="normal"
                                name={col}
                                type="text"
                                value={webContentData[i]?.[col] || webContentData[i].locales[col].title}
                                onBlur={(e) => {

                                    if(col === 'en' || col === 'th'){

                                    }else{
                                        setWebContentData(webContentData[i][col] )
                                    }




                                }}
                            />
                        </td>)}
                </tr>)}

                </tbody>
            </table>

        </>
    );
}
