<?php


namespace App\Enum\Base;


class BaseInsuranceObject
{
    public $rpcNumber = 184;
    public $fdCard_No;
    public $RefCode;
    public $fdTitle;
    public $fdKeys;
    public $fdName;
    public $fdSurname;
    public $fdSex;
    public $fdNationalID;
    public $fdAge;
    public $fdHBD;
    public $fdAddr_Num;
    public $fdAddr_District;
    public $fdAddr_Amphur;
    public $fdProvince;
    public $fdAddr_PostCode;
    public $fdEmail;
    public $fdTelephone;
    public $fdPayStatus;
    public $fdPayDate;
    public $fdPayTime;
    public $fdPayAMT;
    public $fdIssueDate;
    public $fdFromDate;
    public $fdToDate;
    public $fdAgent = "00DM004D00";
    public $fdPackage;
    public $fdlanguage;
    public $fdBenefit;
    public $fdRelation;
    public $fdOccup;
    public $fdSendType;
    public $fdBenadd;
    public $fdBenpct;
    public $fdETime = "00:01";
    public $fdXTime = "24:00";
    public $fdNationality;
    public $fdInvoice;
    public $fdDestFrom;    
    public $fdDestTo;
    public $fdPaymentType = 2;
    public $fdPaymentCh;
    public $fdInstallment = 1;
    public $fdMember_ID;
    public $fdPromoCode;
    public $fdController;
    public $fdMarketing_Consent;
    public $fdUniqKey;

    public $user_id;
    public $coverdays;
    public $c_class;
    public $flg_ind;
    public $prem_rate;
    public $sum_pr_prem;
    public $ann_prem;
    public $sum_ann_prem;
    public $sum_ins;
    public $gross_amt;
    public $ann_nprem;
    public $stamp_amt;
    public $vat_amt;
    public $total_amt;
    public $ann_days;
    public $packget_peril;
    public $item_nbr;
    public $block_tambun;
    public $risk_loc;
    public $exp_code;
    public $tariff_code;
    public $occupancy;
    public $building_class;
    public $whole_building;
    public $floor_nbr;
    public $dryriser;
    public $external_wall;
    public $upper_floor;
    public $roof_beam;
    public $roof;
    public $column;
    public $internal_area;
    public $nbr_room;
    public $nbr_storey;
    public $owner_ind;
    //public List<InterestModel> interest_item;
    public $interest_item;
    public $sch_sumins;
    public $sch_prem;
    public $risk_rate;

    //Promotion Code 20230706
    public $Code;
    public $CampaignId;
    public $CostAmount;
    public $StatusId;
    public $TypeId;
}
