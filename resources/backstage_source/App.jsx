import React from 'react';
import {Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import NoHeaderLayout from "./view/layout/NoHeaderLayout";
import "./asset/scss/style.scss";
import APP_ROUTE from "./config/route";
import {API_URL_LIST, APP_VERSION, STORAGE} from "./config/config";
import MainLayout from "./view/layout/MainLayout";
import {connectAPI} from "./asset/lib/FormHelper";

const hist = createBrowserHistory({
    basename: '/backstage'
});

const unlisten = hist.listen(async (location) => {

    const admin_data = JSON.parse(localStorage.getItem(STORAGE.MEMBER_DATA));

    await connectAPI(API_URL_LIST.adminLogAdd, {
        data: {
            action: "access",
            description: `access page ${location.pathname}${location.search}${location.hash}`,
            user: `${((admin_data || '').first_name || '')} ${((admin_data || '').last_name || '')}`,
            admin_id: ((admin_data || '').admin_id || ''),
            data: null
        },
        showStatus: false,
        showLoading : false
    });
});

export default function App() {
    return <>
        <Router history={hist}>
            <Switch>
                {Object.values(APP_ROUTE).map(
                    ({id, url, layout, component, pattern}) => (
                        <Route key={id} path={pattern || url} exact component={
                            layout === undefined
                                ? component
                                : layout === 'MainLayout' ? MainLayout : NoHeaderLayout
                        }
                        />
                    )
                )}
                <Route path="*" component={NoHeaderLayout}/>
            </Switch>
        </Router>
        <span style={{
            position: "fixed",
            bottom: 5,
            left: 5,
            color: '#fff',
            zIndex: 9999,
            fontSize: '0.7em',
            padding: '0 10px',
            textShadow: "-1px 1px 1px #000000, 1px -1px 1px #000000, 1px 1px 1px #000000, -1px -1px 1px #000000",
        }}>V. {APP_VERSION}</span>
    </>
}
