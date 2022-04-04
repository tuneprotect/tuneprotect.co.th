<div class="page-overlay" style="display: flex;">
    <style>


        @media all and (min-width: 1080px) {
            .popup-wrapper {
                min-width: 1080px;
            }
        }

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


    </style>
    <div class="popup-wrapper">
        <a data-gtm="index-question-close" class="close"><i class="icofont-close"></i></a>
        <div class="popup-inner-wrapper">

            <div class="overlay-section" style="margin-top: 0;width: 100%" id="overlayform-section">
                <form class="insurance-form" id="frm_overlay">
                    <div class="form-inner">
                        <picture>
{{--                            <source media="(min-width:768px)" srcset="https://www.tuneprotect.co.th/storage/Banner/Banner_Overlay.png">--}}
                            <img src="https://www.tuneprotect.co.th/storage/Banner/Banner_OverlayV2.png" alt="overlay">
                        </picture>
                    </div>
                    <div class="btn-wrapper hideField" style="">
{{--                        <button data-gtm="contact-form-submit" class="btn btn-primary">คลิกดาวน์โหลดที่นี่</button>--}}
                        <div class="btn-wrapper">
                            <a class="btn btn-primary" target="_blank" href="https://www.tuneprotect.co.th/storage/claim-insurance/isafe-extra/claim-form-isafe-extra.pdf">คลิกดาวน์โหลดที่นี่</a>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    </div>
</div>
