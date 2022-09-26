<section style="display: none" id="step2" class="product-detail">
<style>
    #notshow{
        display:none !important;
    }
    .d-none{
        display: none !important;
    }
    .check-true{
        text-align: center;
        width: auto;
    }
    .text-amount{
        width: auto;
        background-color: gainsboro; 
        margin-bottom: 10px;
        text-align:center;
    }
    .amt-center{
        text-align: center; 
        position: absolute;
        bottom: 20px;
        width: 85%;
    }
    .md-center{
        text-align: right;
    }
    .position-relative{
        position: relative;
    }
    .text-center{
        text-align:center;
    }
    @media (min-width: 1024px) {
        .orange th form div label{
            font-size: 24px !important;
            width: 700px;
            display: inline-block;
        }
        .orange th strong{
            width: 700px;
            display: inline-block;
        }
        .td-onmhs {
            display: table-cell !important;
        }
        
    }
    @media (max-width: 1025px) {
        #btnPlan3year{
            display:block !important;
        }
        .amt-center{
            position: unset;
            width: auto;
        }
        .md-center{
            text-align: center;
        }
    }
</style>

    


    <div class="wrapper">
        <table id="table-detail">
            <thead>
            <tr style="display:none;">
                <th>
                    <h3>@lang('global.coverage')</h3>                  
                    <?php $i = 1 ?>
                    <div class="choose-plan-mobile">
                        @foreach ($package_detail as $k => $v)
                            <div class="wrapper-choose-plan">
                                <a href=" #"
                                   data-package="{{$k}}"
                                   data-index="{{$i}}"
                                   data-gtm="product-{{strtolower($selected)}}-mobile-choose-plan-{{$i}}"
                                   class="btn btn-block btn-outline btn-choose-plan {{$i == 1 ? 'on' : '' }}">
                                    @if(isset($v->no))
                                        @if($v->no == 0)
                                            <strong>@lang('product.no_plan')</strong>
                                        @else
                                            @if(isset($v->name))
                                                <strong>{{$v->name}} @lang('product.plan') {{$v->no}}</strong>
                                            @else
                                                <strong>@lang('product.plan') {{$v->no}}</strong>
                                            @endif
                                        @endif
                                   
                                    @endif
                                </a>

                                <?php $i++ ?>
                            </div>

                        @endforeach

                    </div>
                </th>
                <?php $i = 1 ?>
                @foreach ($package_detail as $k => $v)
                    <th id="{{$k}}" data-package="{{$k}}">
                        @if($k=="ONMHS1")
                            <strong>แผนความคุ้มครอง 1 ปี</strong>
                        @else  
                            <strong>แผนความคุ้มครอง 3 ปี</strong>
                        @endif

                        <a href="#"
                           data-gtm="product-{{strtolower($selected)}}-top-choose-plan-{{$i}}"

                           @if(isset($v->no))
                               @if($v->no == 0)
                                    data-step="3" data-package="{{$k}}" data-sub-package="" data-plan=""
                               @else
                                   @if(isset($v->name))
                                       data-step="3" data-package="{{$k}}" data-sub-package=""
                                       data-plan="{{$v->name}} @lang('product.plan') {{$v->no}}"
                                   @else
                                       data-step="3" data-package="{{$k}}" data-sub-package=""
                                       data-plan="@lang('product.plan') {{$v->no}}"
                                    @endif
                               @endif
                           @else
                               data-step="3" data-package="{{$k}}" data-sub-package=""
                               data-plan="@lang('product.plan') {{$i}}"
                           @endif

                           class="btn btn-block btn-outline btn-goto">@lang('product.choose_plan')</a>
                    </th>
                    <?php $i++ ?>
                @endforeach
            </tr>
            <tr>
                <th>
                    <h3>@lang('global.coverage')</h3>
                    <div class="choose-plan-mobile">
                        <div class="wrapper-choose-plan">
                            <a id="btnPlan1year" href="javascript:void(0)" data-package="ONMHS1" data-index="1" data-gtm="product-onmhs-mobile-choose-plan-1" class="btn btn-block btn-outline btn-choose-plan on">
                                <strong>แผนประกันภัย 1 ปี</strong>
                            </a>
                        </div>
                        <div class="wrapper-choose-plan">
                            <a id="btnPlan3year" href="javascript:void(0)" data-package="ONMHS2" data-index="2" data-gtm="product-onmhs-mobile-choose-plan-2" class="btn btn-block btn-outline btn-choose-plan off">
                                <strong>แผนประกันภัย 3 ปี</strong>
                            </a>
                        </div>
                       

                    </div>
                </th>
                <th>
                    <strong> 
                        @if($locale == 'en')
                            Insurance plan for 1 year
                        @else
                            แผนความคุ้มครอง 1 ปี
                        @endif
                    </strong>
                    <a href="#" data-gtm="product-onmhs-top-choose-plan-1" data-step="3" data-package="ONMHS1" data-sub-package="" data-plan="" class="btn btn-block btn-outline btn-goto">เลือกแผนนี้</a>
                </th>
                <th>
                    <strong> 
                        @if($locale == 'en')
                            Insurance plan for 3 year
                        @else
                            แผนความคุ้มครอง 3 ปี
                        @endif
                    </strong>
                    <a href="#" data-gtm="product-onmhs-top-choose-plan-2" data-step="3" data-package="ONMHS2" data-sub-package="" data-plan="" class="btn btn-block btn-outline btn-goto">เลือกแผนนี้</a>
                </th>
            </tr>
            </thead>
            <tbody>
                <!-- not show -->
                <tr id="notshow" class="orange" style="display:none !important;">
                    <th data-cover-cov1><strong>1. หมวดการประกันอัคคีภัยและภัยเพิ่มเติม</strong></th>
                    <?php $i = 1 ?>
                    @foreach ($package_detail as $k => $v)
                        <td id="head-{{$k}}" class=hide data-index="{{$i}}" data-package="{{$k}}"><strong
                                data-price-{{$k}} ></strong></td>
                        <?php $i++ ?>
                    @endforeach
                </tr>
                <!-- end not show -->

            <tr class="orange">
                <th>
                    <strong>
                        @if($locale == 'en')
                            1. Fire Insurance and additional details
                        @else
                            1. หมวดการประกันอัคคีภัยและภัยเพิ่มเติม
                        @endif   
                    </strong>
                </th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th> 
                    @if($locale == 'en')
                        Concerning this Insurance category, it will provide protection against damage to property structures (excluding foundations) and assets inside the structure, not more than / per insurance policy year.
                        <br/>
                        The hazards covered include fire, lightning, explosion, collisions of vehicles, water damage (excluding floods) or hazards from aircraft, falling objects from aircraft. 
                    @else
                        หมวดการประกันภัยนี้ จะให้ความคุ้มครองสำหรับความเสียหายต่อสิ่งปลูกสร้าง (ไม่รวมฐานราก) และทรัพย์สินภายในสิ่งปลูกสร้างสูงสุดไม่เกิน / ต่อปีกรมธรรม์ประกันภัย<br/>
                        ภัยที่คุ้มครองได้แก่ ไฟไหม้  ฟ้าผ่า ระเบิด ภัยจากการเฉี่ยวและ/หรือการชนของยานพาหนะหรือสัตว์พาหนะ ภัยจากอากาศยาน วัตถุตกจากอากาศยาน และ ภัยเนื่องจากน้ำ (ไม่รวมน้ำท่วม)
                    @endif     
                </th>
                <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                    <strong id="rate_1">300,000</strong> 
                </td>
                <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                    <strong id="rate_1_3">300,000</strong>
                </td>

            </tr>
            <tr>
                <th>                    
                    @if($locale == 'en')
                        1.1) Fire-fighting expenses      
                    @else
                        1.1) ค่าใช้จ่ายในการดับเพลิง
                    @endif
                </th>
                <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                    <strong id="rate_2">0</strong> 
                </td>
                <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                    <strong id="rate_2_3">0</strong>
                </td>
                
                </tr>
                <tr>
                    <th>                    
                        @if($locale == 'en')
                            1.2) Loss or damage to electrical appliances     
                        @else
                            1.2) ความสูญเสียหรือความเสียหายต่อเครื่องใช้ไฟฟ้า
                        @endif
                    </th>
                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <strong id="rate_3">50,000</strong>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <strong id="rate_3_3">50,000</strong>
                    </td>
                    
                  
                </tr>
                <tr>
                    <th>                    
                        @if($locale == 'en')
                            1.3) Expenses for moving the wreckage    
                        @else
                            1.3) ค่าใช้จ่ายในการขนย้ายซากทรัพย์สิน
                        @endif
                    </th>
                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <strong id="rate_4">10,000</strong>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <strong id="rate_4_3">10,000</strong>
                    </td>
                </tr>
                <tr>
                    <th>
                        @if($locale == 'en')
                            1.4) Professional expenses   
                        @else
                            1.4) ค่าวิชาชีพ
                        @endif
                    </th>
                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <strong id="rate_5">20,000</strong>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <strong id="rate_5_3">20,000</strong>
                    </td>
                </tr>
                <tr>
                    <th>                        
                        @if($locale == 'en')
                            1.5) Temporary accommodation expenses during the repair of damaged buildings (Referring to coverage no.1 )  
                        @else
                            1.5) ค่าเช่าที่พักชั่วคราวระหว่างซ่อมแซมอาคารที่เสียหายจากความคุ้มครองในข้อ 1.
                        @endif
                        <div class="md-center">                       
                            @if($locale == 'en')
                                The maximum compensation per day <br/>
                                Maximum amount not more than/per insurance policy year  
                            @else
                                ชดเชยสูงสุดวันละ<br/>
                                รวมสูงสุดไม่เกิน / ต่อปีกรมธรรม์ประกันภัย
                            @endif
                        </div>
                    </th>
                    <td class="position-relative td-onmhs" data-index="1" data-package="ONMHS1">                  
                        <div class="amt-center">
                            <strong id="rate_6">1,000</strong><br/>
                            <strong id="rate_7">100,000</strong>
                        </div>
                    </td>
                    <td class="position-relative hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <div class="amt-center">
                            <strong id="rate_6_3">1,000</strong><br/>
                            <strong id="rate_7_3">100,000</strong>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>               
                        @if($locale == 'en')
                            1.6) Expenses for protection against damaged buildings that are under repair or rebuilding. 
                        @else
                            1.6) ค่าใช้จ่ายเพื่อการป้องกันภัยอาคารที่ได้รับความเสียหายซึ่งอยู่ระหว่างรอการซ่อมแซมหรือสร้างใหม่ 
                        @endif
                    </th>
                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <strong id="rate_8">20,000</strong>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <strong id="rate_8_3">20,000</strong>
                    </td>
                </tr>
                <tr>
                    <th>  
                        @if($locale == 'en')
                            1.7) Damage caused by a strike, riot or act with malicious intent. (except for acts for political, religious or ideological reasons) 
                        @else
                            1.7) ความเสียหายอันเกิดขึ้นจากภัยการนัดหยุดงาน การจลาจล หรือการกระทำอันมีเจตนาร้าย (ยกเว้นการกระทำเพื่อผลทางการเมือง ศาสนา หรือลัทธินิยม) 
                        @endif
                    </th>
                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <strong id="rate_10">50,000</strong>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <strong id="rate_10_3">50,000</strong>
                    </td>
                </tr>
                <tr>
                    <th >     
                        @if($locale == 'en')
                            1.8) Loss or damage to antiques or objects of art
                        @else
                            1.8) ความสูญเสียหรือความเสียหายต่อโบราณวัตถุหรือศิลปวัตถุ 
                        @endif
                    </th>
                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <strong id="rate_11">35,000</strong>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <strong id="rate_11_3">35,000</strong>
                    </td>
                </tr>
                <tr class="orange">
                    <th>
                        <strong>
                            @if($locale == 'en')
                                2. Damage to insured property from natural disasters 
                            @else
                                2. ความเสียหายต่อทรัพย์สินที่เอาประกันภัยจากภัยธรรมชาติ 
                            @endif 
                        </strong>
                    </th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>    
                        @if($locale == 'en')
                            Protection from floods, storms, earthquakes or volcanic eruptions or undercurrents or a tsunami, and danger caused by hail
                        @else
                            คุ้มครองภัยจากน้ำท่วม ภัยจากลมพายุ ภัยจากแผ่นดินไหวหรือภูเขาไฟระเบิดหรือคลี่นใต้น้ำหรือสึนามิ และภัยจากลูกเห็บ 
                        @endif                      
                    </th>
                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <strong id="rate_13">50,000</strong>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <strong id="rate_13_3">50,000</strong>
                    </th>
                </tr>  
                <tr class="orange">
                    <th>
                        <form>
                            <div>
                                <input id="check_rate_3" type="checkbox" name="check_rate" value="P">
                                <label for="check_rate_3">
                                    @if($locale == 'en')
                                        3. Personal accident insurance 
                                    @else
                                        3. หมวดการประกันภัยอุบัติเหตุส่วนบุคคล 
                                    @endif 
                                </label>
                            </div>
                        </form> 
                    </th>
                    <th></th>
                    <th></th>
                </tr>       
                <tr>
                    <th>    
                        @if($locale == 'en')
                            Death protection, Loss of organs, eyesight, or total permanent disability from an accident that occurs within the insured place and is caused by the aforementioned hazards.
                            per person, up to a maximum of 5 people, who must be named as the insured person.
                        @else
                            คุ้มครองการเสียชีวิต สูญเสียอวัยวะ สายตา หรือทุพพลภาพถาวรสิ้นเชิงจากอุบัติเหตุซึ่งเกิดขึ้นภายในสถานที่เอาประกันภัย อันเนื่องมาจากภัยที่ได้รับความคุ้มครอง ต่อคน สูงสุดไม่เกิน 5 คนซึ่งต้องระบุชื่อเป็นผู้ได้รับความคุ้มครอง 
                        @endif   
                    </th>
                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <strong id="rate_15">0</strong>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <strong id="rate_15_3">0</strong>
                    </td>
                </tr>
                <tr class="orange">
                    <th>
                        <form>
                            <div>
                                <input id="check_rate_4" type="checkbox" name="check_rate" value="G">
                                <label for="check_rate_4">
                                    @if($locale == 'en')
                                        4. Glass insurance 
                                    @else
                                        4. หมวดการประกันภัยกระจก 
                                    @endif                        
                                </label>
                            </div>
                        </form> 
                    </th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>  
                        @if($locale == 'en')
                            Covers loss or damage to fixed glass that forms part of the building or structures from being broken or damaged due to accidents.
                        @else
                            คุ้มครองความสูญเสียหรือความเสียหายต่อกระจกที่ติดตั้งตรึงตาซึ่งเป็นส่วนหนึ่งของตัวอาคารหรือสิ่งปลูกสร้างจากการแตกหรือ เสียหายไปอันเนื่องมาจากอุบัติเหตุ 
                        @endif
                    </th>
                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <strong id="rate_17">0</strong>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <strong id="rate_17_3">0</strong>
                    </td>
                </tr>
                <tr class="orange">
                    <th>
                        <form>
                            <div>
                                <input id="check_rate_5" name="check_rate" type="checkbox" value="C">
                                <label for="check_rate_5">
                                    @if($locale == 'en')
                                        5. Cash Insurance
                                    @else
                                        5. หมวดประกันภัยเงินสด 
                                    @endif
                                </label>
                            </div>
                        </form>
                    </th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>
                        @if($locale == 'en')
                            Cover for loss or damage within the insured place
                        @else
                            คุ้มครองความสูญเสียหรือความเสียหายภายในสถานที่เอาประกันภัย 
                        @endif
                    </th>
                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <strong id="rate_19">0</strong>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <strong id="rate_19_3">0</strong>
                    </td>
                </tr>
                <tr class="orange">
                    <th>
                        <form>
                            <div>
                                <input id="check_rate_6" name="check_rate"  type="checkbox" value="T">
                                <label for="check_rate_6">
                                    @if($locale == 'en')
                                        6. Theft Insurance
                                    @else
                                        6. หมวดการประกันภัยโจรกรรม 
                                    @endif 
                                </label>
                            </div>
                        </form>
                    </th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>  
                        @if($locale == 'en')
                            Protection against burglary, tampering, or robbery
                        @else
                            คุ้มครองการลักทรัพย์ที่ปรากฎร่องรอยงัดแงะ การชิงทรัพย์ หรือการปล้นทรัพย์ 
                        @endif 
                    </th>
                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <strong id="rate_21">100,000</strong>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <strong id="rate_21_3">100,000</strong>
                    </td>
                </tr>
                <tr class="orange">
                    <th>
                        <form>
                            <div>
                                <input id="check_rate_7" name="check_rate" type="checkbox" value="D">
                                <label for="check_rate_7">
                                    @if($locale == 'en')
                                        7. Temporary housing
                                    @else
                                        7. ความคุ้มครองค่าเช่าที่อยู่อาศัยชั่วคราวอันเนื่องมาจากการรั่วไหลหรือการปนเปื้อนของสารเคมีอันตราย 
                                    @endif    
                                </label>
                            </div>
                        </form>    
                    </th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>  
                        @if($locale == 'en')
                            Rental coverage due to the leakage or contamination of hazardous chemicals. The Company will compensate the temporary housing rent due to leakage or contamination of hazardous chemicals in an area within a radius of not more than 10 km from a residential house (up to 30 days compensation per incident.
                        @else
                            บริษัทจะชดเชยค่าเช่าที่อยู่อาศัยชั่วคราวอันเนื่องมาจากการรั่วไหลหรือการปนเปื้อนของสารเคมีอันตรายในพื้นที่บริเวณรัศมีไม่เกิน    10 กม. จากบ้านพักอาศัย จนไม่สามารถอยู่อาศัยได้ (ชดเชยสูงสุด 30 วันต่อเหตุการณ์)
                        @endif    
                        <div class="md-center">
                            @if($locale == 'en')
                                The maximum compensation per day <br/>
                                Maximum amount not more than/per insurance policy year 
                            @else
                                ชดเชยสูงสุดวันละ<br/>
                                รวมสูงสุดไม่เกิน ต่อปีกรมธรรม์ประกันภัย
                            @endif 
                        </div>
                    </th>
                    <td class="position-relative td-onmhs" data-index="1" data-package="ONMHS1">                  
                        <div class="amt-center">
                            <strong id="rate_22">1,000</strong><br/>
                            <strong id="rate_23">100,000</strong>
                        </div>
                    </td>
                    <td class="position-relative hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <div class="amt-center">
                            <strong id="rate_22_3">1,000</strong><br/>
                            <strong id="rate_23_3">100,000</strong>
                        </div>
                    </td>
                </tr>
                <tr class="orange">
                    <th>
                        <strong>
                            @if($locale == 'en')
                                8. Additional protection categories, Home care service, home care Fixit, 
                            @else
                                8. หมวดความคุ้มครองเพิ่มเติม (รายละเอียดความคุ้มครองตามชีทบริการ Europ Assistance)
                            @endif 
                        </strong>
                    </th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>   
                        @if($locale == 'en')
                            A special service just for you. Sending a repair technician to take care of your home. Whether it is air conditioning cleaning, roof leaks, water pipe repairs, general repairs, electrical work or waterworks, etc., you can use the service for 1 right per 1 policy* (as determined by the company). It can be used from the effective date of the policy
                        @else
                            บริการดูแลบ้านโฮมแคร์ Home Care Pack   1 ครั้ง/ปี
                        @endif
                        <br/>
                        <img src="/storage/fixit.png">
                    </th>

                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <div>                            
                            @if($locale == 'en')
                                <strong >Free</strong>
                            @else
                                <strong >ฟรี</strong>
                            @endif
                        </div>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <div>                            
                            @if($locale == 'en')
                                <strong >Free</strong>
                            @else
                                <strong >ฟรี</strong>
                            @endif
                        </div>                      
                    </td>
                </tr>
                <tr id="tr-condo-9" class="orange">
                    <th>
                        <form>
                            <div>
                                <input id="check_rate_9" type="checkbox" name="check_rate"  value="R">
                                <label for="check_rate_9">
                                    @if($locale == 'en')
                                        9. Installment Payment Compensation Coverage
                                    @else
                                        9. ความคุ้มครองเงินชดเชยค่างวดผ่อนชำระ
                                    @endif
                                </label>
                            </div>
                        </form>    
                    </th>
                    <th></th>
                    <th></th>
                </tr>
                <tr id="tr-condo-9-detail" class="select-condo">
                    <th>              
                        @if($locale == 'en')
                            Pay the installment payment as shown in the loan agreement. a maximum of not more than a month
                        @else
                            จ่ายค่างวดผ่อนชำระตามที่ปรากฎในสัญญาเงินกู้ สูงสุดไม่เกินเดือนละ
                        @endif  
                    </th>
                   
                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <form>
                            <select id="drpCompensation1">
                                @if($locale == 'en')
                                    <option value="10000">Coverage 10,000 baht premium is at 99 baht per year</option>
                                    <option value="15000">Coverage 15,000 baht premium is at 99 baht per year</option>
                                    <option value="20000">Coverage 20,000 baht premium is at 99 baht per year</option>
                                @else
                                    <option value="10000">ความคุ้มครอง 10,000 บาท เบี้ย 99 บาท/ 1 ปี</option>
                                    <option value="15000">ความคุ้มครอง 15,000 บาท เบี้ย 148 บาท/ 1 ปี</option>
                                    <option value="20000">ความคุ้มครอง 20,000 บาท เบี้ย 197 บาท/ 1 ปี</option>
                                @endif  
                            </select>
                        </form>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <form>
                            <select id="drpCompensation3">
                                @if($locale == 'en')
                                    <option value="10000">Coverage 10,000 baht premium is at 99 baht 3 year</option>
                                    <option value="15000">Coverage 15,000 baht premium is at 99 baht 3 year</option>
                                    <option value="20000">Coverage 20,000 baht premium is at 99 baht 3 year</option>
                                @else
                                    <option value="10000">ความคุ้มครอง 10,000 บาท เบี้ย 99 บาท/ 3ปี</option>
                                    <option value="15000">ความคุ้มครอง 15,000 บาท เบี้ย 148 บาท/ 3ปี</option>
                                    <option value="20000">ความคุ้มครอง 20,000 บาท เบี้ย 197 บาท/ 3ปี</option>
                                @endif  
                                
                            </select>
                        </form>
                    </td>
                </tr>
                <tr id="tr-condo-10" class="orange">
                    <th>
                        <form>
                            <div>
                                <input id="check_rate_10" type="checkbox" name="check_rate" value="L">
                                <label for="check_rate_10">
                                @if($locale == 'en')
                                    10. Legal liability to third parties
                                @else
                                    10. ความรับผิดตามกฏหมายต่อบุคคลภายนอก
                                @endif                        
                                </label>
                            </div>
                        </form>
                    </th>
                    <th></th>
                    <th></th>
                </tr>
                <tr id="tr-condo-10-detail">
                    <th>       
                        @if($locale == 'en')
                            10% of the Sum insured Fire insurance and additional perils up to 200,000 baht
                        @else
                            10% ของจำนวนเงินเอาประกันภัยหมวดการประกันอัคคีภัยและภัยเพิ่มเติม สูงสุดไม่เกิน 200,000 บาท
                        @endif   
                    </th>
                    <td class="td-onmhs" data-index="1" data-package="ONMHS1">
                        <form>
                            <select id="drpDeposit1" name="drpDeposit1" style="width: auto;">
                                <option value="50000">50,000</option>
                                <option value="60000">60,000</option>
                                <option value="70000">70,000</option>
                                <option value="80000">80,000</option>
                                <option value="90000">90,000</option>
                                <option value="100000">100,000</option>
                                <option value="150000">150,000</option>
                                <option value="200000">200,000</option>
                            </select>
                            <input id="txtDeposit1" name="txtDeposit1" type="text" readonly="" style="width: 90px;background-color: gainsboro;">
                        
                            @if($locale == 'en')
                                baht/ 1 year
                            @else
                                บาท / 1 ปี
                            @endif  
                        </form>
                    </td>
                    <td class="hide td-onmhs" data-index="2" data-package="ONMHS2">
                        <form>
                            <select id="drpDeposit3" name="drpDeposit3" style="width: auto;">
                                <option value="50000">50,000</option>
                                <option value="60000">60,000</option>
                                <option value="70000">70,000</option>
                                <option value="80000">80,000</option>
                                <option value="90000">90,000</option>
                                <option value="100000">100,000</option>
                                <option value="150000">150,000</option>
                                <option value="200000">200,000</option>                                
                            </select>
                            <input id="txtDeposit3" name="txtDeposit3" type="text" readonly="" style="width: 90px;background-color: gainsboro;">                            
                            @if($locale == 'en')
                                baht/ 3 year
                            @else
                                บาท / 3 ปี
                            @endif  
                        </form>
                    </td>
                </tr>





            </tbody>

            <tfoot>
                <tr class="d-none">
                    <th>&nbsp;</th>
                    <?php $i = 1 ?>
                    @foreach ($package_detail as $k => $v)
                        <th id="foot-{{$k}}" data-package="{{$k}}">
                            @if($k=="ONMHS1")
                                <strong>แผนความคุ้มครอง 1 ปี</strong>
                            @else  
                                <strong>แผนความคุ้มครอง 3 ปี</strong>
                            @endif

                            <a href="#"
                            data-gtm="product-{{strtolower($selected)}}-top-choose-plan-{{$i}}"

                            @if(isset($v->no))
                                @if($v->no == 0)
                                        data-step="3" data-package="{{$k}}" data-sub-package="" data-plan=""
                                @else
                                    @if(isset($v->name))
                                        data-step="3" data-package="{{$k}}" data-sub-package=""
                                        data-plan="{{$v->name}} @lang('product.plan') {{$v->no}}"
                                    @else
                                        data-step="3" data-package="{{$k}}" data-sub-package=""
                                        data-plan="@lang('product.plan') {{$v->no}}"
                                        @endif
                                @endif
                            @else
                                data-step="3" data-package="{{$k}}" data-sub-package=""
                                data-plan="@lang('product.plan') {{$i}}"
                            @endif

                            class="btn btn-block btn-outline btn-goto">@lang('product.choose_plan')</a>
                        </th>
                        <?php $i++ ?>
                    @endforeach
                </tr>
                <tr>
                    <th>
                        <div>
                            <p>         
                            @if($locale == 'en')
                                Premium (including stamp duty and VAT)
                            @else
                                ราคาเบี้ยประกันภัย (รวมอากรแสตมป์และภาษีมูลค่าเพิ่ม
                            @endif  
                            </p>
                        <div>                   
                    </th>
                    <td class="td-onmhs text-center" data-index="1" data-package="ONMHS1">
                        <strong> 
                            @if($locale == 'en')
                                Insurance plan for 1 year
                            @else
                                แผนความคุ้มครอง 1 ปี
                            @endif
                        </strong>
                        <form>
                            <input id="txtAmount1" type="text" readonly="" class="text-amount" />
                        </form>
                        <a href="#" data-gtm="product-onmhs-top-choose-plan-1" data-step="3" data-package="ONMHS1" data-sub-package="" data-plan="" class="btn btn-block btn-outline btn-goto">เลือกแผนนี้</a>
                    </td>
                    <td class="hide td-onmhs text-center" data-index="2" data-package="ONMHS2">
                        <strong> 
                            @if($locale == 'en')
                                Insurance plan for 3 year
                            @else
                                แผนความคุ้มครอง 3 ปี
                            @endif
                        </strong>
                        <form>
                            <input id="txtAmount3" type="text" readonly="" class="text-amount" />
                        </form>
                        <a href="#" data-gtm="product-onmhs-top-choose-plan-2" data-step="3" data-package="ONMHS2" data-sub-package="" data-plan="" class="btn btn-block btn-outline btn-goto">เลือกแผนนี้</a>
                    </td>                
                </tr>
            </tfoot>
        </table>

        <br><br>
        <a href="#" data-gtm="product-{{strtolower($selected)}}-more" id="btn-more" data-expand="@lang('product.more')"
           data-collapse="@lang('product.collapse')">
            @lang('product.more')
        </a>


    </div>
</section>
