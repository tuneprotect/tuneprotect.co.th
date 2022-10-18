import Swal from "sweetalert2";

require('./main');
import {$, $$} from "./helper"

document.addEventListener("DOMContentLoaded", function () {
    var myEle = document.getElementById("status_api");
    if(myEle){
        if(!status_api.value)
        {
            Swal.fire({
                title: 'Warning!',
                text: 'Warning : Code not found.',
                icon: 'info',
                        confirmButtonText: 'OK'
            })
        }
    }
});
