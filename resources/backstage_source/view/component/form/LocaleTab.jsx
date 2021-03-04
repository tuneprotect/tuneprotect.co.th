import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import {Badge, Tab, Tabs} from "@material-ui/core";
import globalStyle from "../../../asset/jss/standard";

const useStyles = makeStyles(theme => ({
    ...globalStyle(theme)
}));

export default function LocaleTab({locale, handleChangeLocale, errors}) {
    const classes = useStyles();
    const {languageSupport} = useSelector(({system}) => system);

    return (
        <Tabs
            value={locale}
            onChange={handleChangeLocale}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs"
            className={classes.localeSection}
        >
            {Object.values(languageSupport).map(v => {
                return <Tab label={<Badge color="secondary" variant="dot"
                                          invisible={errors?.locales?.[v.code] === undefined}>{v.title}</Badge>}
                            value={v.code} key={v.code} wrapped/>
            })}
        </Tabs>
    );

}
