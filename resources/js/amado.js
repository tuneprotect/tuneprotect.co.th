import Swal from "sweetalert2";

require('./main');


document.addEventListener("DOMContentLoaded", function () {
    var myEle = document.getElementById("status_api");
    if(myEle){
        let myMsg = document.getElementById("massage_key");
        if(!status_api.value)
        {
            Swal.fire({
                title: 'Error!',
                text: myMsg.value,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }
});
