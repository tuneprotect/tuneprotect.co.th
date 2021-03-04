import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import {MuiPickersUtilsProvider,} from '@material-ui/pickers';
import "./asset/scss/style.scss";
import backstage_theme from "./config/theme";
import App from "./App";
import store from './store';
import DateFnsUtils from '@date-io/date-fns';
import './i18n';

const theme = createMuiTheme(backstage_theme);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Provider store={store}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <App/>
            </MuiPickersUtilsProvider>
        </Provider>
    </MuiThemeProvider>
    , document.getElementById("root"));
