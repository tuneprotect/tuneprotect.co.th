import React from "react";
import {Link, makeStyles} from "@material-ui/core";
import FlagIcon from "./FlagIcon";
import clsx from 'clsx';

import {useTranslation} from 'react-i18next'
import {LANGUAGE} from "../../../config/config";

const useStyles = makeStyles((theme) => ({
    languageSelector: {
        display: "flex",
        marginRight: 12,
        justifyContent: "center"
    },
    round: {
        display: "block",
        borderRadius: "100%",
        overflow: "hidden",
        width: 38,
        height: 38,
        marginLeft: 5,
        filter: 'grayscale(1)',
        opacity: '0.5',
        border: "3px solid #ffffff"
    },
    active: {
        filter: 'grayscale(0)',
        opacity: '1'
    }
}));

export default function LanguageSelector() {
    const classes = useStyles();
    const { i18n} = useTranslation()
    return (
        <ul className={classes.languageSelector}>
            {LANGUAGE.map((v) => (
                <li key={v}>
                    <Link href='#' onClick={() => {
                        i18n.changeLanguage(v)
                    }}
                          className={clsx(classes.round, {[classes.active]: v === i18n.language})}
                    >
                        <FlagIcon
                            squared={true}
                            code={(v) === 'en' ? 'us' : v}
                            size="2x"/>
                    </Link>
                </li>
            ))}
        </ul>
    );
}


