import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import APP_ROUTE from "../../../../config/route";

export default function LogoutPage() {

    const [status, setStatus] = useState(false);


    useEffect(() => {
        localStorage.clear();
        setStatus(true);

    }, []);

    return (
        (status && <Redirect to={APP_ROUTE.login.url}/>)
    );

}


