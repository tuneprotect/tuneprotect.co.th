import Swal from "sweetalert2";

require('./main');
import {$, $$} from "./helper"

document.addEventListener("DOMContentLoaded", function () {
    var myEle = document.getElementById("status_api");
    if(myEle){
        // alert(myEle.value);
        if(!status_api.value)
        {
            Swal.fire({
                title: 'Error!',
                text: 'Error : Member ID not found.',
                icon: 'error',
                        confirmButtonText: 'OK'
            })
        }
    }


    // const $btnValidate = $('#btnValidate');
    // $btnValidate.addEventListener("click", function (e) {
    //     e.preventDefault();
    //
    //
    //     const userAction = fetch('http://webtest1.tuneinsurance.co.th/tunepolicy/api/WEBSITE/Validate',
    //         {
    //             method: "post",
    //             headers: new Headers({
    //                 'Authorization': 'Basic '+btoa('TUNE:TUNE@123'),
    //                 "Content-Type": "application/json"
    //             }),
    //             body: JSON.stringify({
    //                 memberId: '9999990005235411'
    //             })
    //         }
    //     ).then((data) => data.json()
    //     ).catch((error) => console.log(error))
    //
    //     console.log(userAction);
    //

        // const express = require('express')
        // const app = express()
        //
        // app.use((req, res, next) => {
        //     res.header('Access-Control-Allow-Origin', 'http://localhost:52446')
        //     res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
        //     res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
        //     next()
        // })

        // let otoken = document.getElementById("_token");

        // alert(btoa('TUNE:TUNE@123'));


        // let Keys = "";
        // let myEle = document.getElementById("ctrl_memberid");
        // let isMember = false;
        // if(myEle){
        //     Keys= myEle.value;
        //     if(Keys != '') {
        //
        //         let urlValidate = document.getElementById("urllinkvalidate");
        //         let auth = document.getElementById("auth");
        //
        //         const userAction = fetch('http://webtest1.tuneinsurance.co.th/tunepolicy/api/WEBSITE/Validate',
        //             {
        //             method: "post",
        //                 headers: new Headers({
        //                 'Authorization': 'Basic '+btoa('TPTWEBSITE:TPTWEBSITE@123'),
        //                 "Content-Type": "application/json"
        //             }),
        //                 body: JSON.stringify({
        //                     memberId: Keys
        //                 })
        //         }
        //         ).then((data) => data.json()
        //         ).catch((error) => console.log(error))
        //
        //         console.log(userAction);
        //
        //         return;
        //     }
        //
        // }
        // else {
        //     isMember = false;
        // }
        //
        // if(!isMember) {
        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'Error : Member ID not found.',
        //         icon: 'error',
        //         confirmButtonText: 'OK'
        //     })
        //     status = false;
        //
        //     return;
        // }



    // });


});
