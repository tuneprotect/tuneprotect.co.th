<?php


namespace App\Enum\Base;


class BaseTAObject extends BaseInsuranceObject
{
    public $rpcNumber = 181;
    public $fdDestFrom;
    public $fdDestTo;
    public $fdFlightFrom;
    public $fdFlightTo;
    public $fdFlgInbound;
    public $fdDay;
    public $health2go;

    //Promotion Code 20230706
    public $PromotionCode;
    public $CampaignId;
    public $CostAmount;
    public $StatusId;
    public $TypeId;

}
