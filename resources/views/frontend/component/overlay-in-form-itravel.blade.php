<style>


    /*@media all and (min-width: 1080px) {
    /*    .popup-wrapper {
    /*        min-width: 1080px;
    /*    }
    /*}

    /*@media all and (min-width: 768px) {*/
    /*    .overlay-section {*/
    /*        display: flex;*/
    /*        margin-left: auto;*/
    /*        margin-right: auto;*/
    /*    }*/
    /*}*/

    .overlay-section.move-up {
        transform: translateY(-50px);
    }

    /*.overlay-section address {*/
    /*    padding: 30px;*/
    /*    flex: 1 1 350px;*/
    /*}*/

    .overlay-section form {
        padding: 15px;
        flex: 1 1 650px;
        border-radius: 20px;
        /*background: #e3306c;*/
        /*background: linear-gradient(152deg, #e3306c 0%, #f7e01f 100%);*/
    }

    .overlay-section form h3,
    .overlay-section form cite {
        color: #ffffff;
    }

    .overlay-section form .btn-wrapper {
        text-align: center;
    }

    #overlayform-section {
        z-index: 0;
    }

    /*@media all and (max-width: 600px) {*/
    /*    #overlayform-section .insurance-form .form-inner {*/
    /*        padding: 0;*/
    /*    }*/
    /*}*/
	.popup-wrapper{
			width:35vw;
		}

</style>
<div class="popup-wrapper">
    <a data-gtm="index-question-close" class="close"><i class="icofont-close"></i></a>
    <div class="popup-inner-wrapper">

        <div class="overlay-section" id="overlayform-section">
            <form class="insurance-form" style="text-align: center;" id="frm_overlay">
                <div class="form-inner">
                    <picture>                        
                        <img src="https://www.tuneprotect.co.th/storage/Banner/BuyiTravel_02.jpg" alt="overlay">
                    </picture>
                </div>
            </form>
        </div>
    </div>
</div>
