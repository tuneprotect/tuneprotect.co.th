<?php


namespace App\Enum;

use App\Enum\Base\BaseInsuranceObject;

class FIMPObject extends BaseInsuranceObject
{
    public $channel;
    public $fdAccept_insurance_term;
    public $fdTerms;
    public $fdRevenue;
    public $fdTaxno;

    public $fdAddr_Home;
    public $fdAddr_Village;
    public $fdAddr_Building;
    public $fdAddr_Floor;
    public $fdAddr_Alley;
    public $fdAddr_Street;


    public $fdIDYPE;
    public $loc_fdBuilding;
    public $loc_fdOwner;
    public $loc_fdAddr_Home;
    public $loc_fdAddr_Village;
    public $loc_fdAddr_Building;
    public $loc_fdAddr_Floor;
    public $loc_fdAddr_Alley;
    public $loc_fdAddr_Street;
    public $loc_fdAddr_District;
    public $loc_fdAddr_PostCode;
    public $loc_fdAddr_Amphur;
    public $loc_fdAddr_Province;
    public $loc_fdAddr_Num;

//    public $fdAddress2_Home;
//    public $fdAddress2_Village;
//    public $fdAddress2_Alley;
//    public $fdAddress2_Road;
//    public $fdAddress2_District;
//    public $fdAddress2_PostCode;
//    public $fdAddress2_Amphoe;
//    public $fdAddress2_Province;

}

