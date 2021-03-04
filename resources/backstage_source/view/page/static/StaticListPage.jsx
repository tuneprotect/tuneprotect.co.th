import React, {useEffect, useState} from "react";
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import {makeStyles, Typography} from "@material-ui/core";
import globalStyle from "../../../asset/jss/standard";
import APP_ROUTE from "../../../config/route";
import {mainColor} from "../../../config/theme";

const useStyles = makeStyles((theme) => ({
    section: {
        marginBottom: 30
    },
    h2: {
        marginBottom: 30
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gridGap: 20,
    },
    gridItem: {
        height: 180,
        position: "relative",
        '& a': {
            width: '100%',
            height: '100%',
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            top: 0,
            left: 0,
            color: '#fff',
            zIndex: 5,
            fontSize: '1.5em',
            ...globalStyle(theme).textStroke
        },
    },
    ...globalStyle(theme)
}));

export default function StaticListPage() {
    const classes = useStyles();
    const {t} = useTranslation();
    const {unPublishData} = useSelector(({system}) => system);
    const [list, setList] = useState({});

    useEffect(() => {
        let section = {}

        console.log(unPublishData);

        Object.values(APP_ROUTE)
            .filter(v => v.parent === 'static.content')
            .map(v => {

                console.log({[v.id]: unPublishData[v.id]});
                section[v.group] = {
                    ...section[v.group],
                    [v.id]: {
                        ...v,
                        'color': unPublishData[v.id] == "1" ? `repeating-linear-gradient(-45deg,${mainColor[100]},${mainColor[100]} 10px,${mainColor[50]} 10px,${mainColor[50]} 20px)` : "#ffffff"
                    }
                };
            });
        setList(section);
    }, [unPublishData]);

    return <div className={classes.root}>
        {Object.keys(list).map(k => (
            <section className={classes.section} key={k}>
                <Typography component="h2" variant="h4" className={classes.h2}>
                    {t(`side_nav.static.${k}.main`)}
                </Typography>
                <ul className={classes.grid}>
                    {Object.values(list[k]).map((v) => (
                        <li key={v.id} className={classes.gridItem} style={{background: v.color}}>
                            <Link to={v.url}>{t(`side_nav.${v.id}`)}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        ))}
    </div>
}
