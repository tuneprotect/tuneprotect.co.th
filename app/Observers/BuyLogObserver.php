<?php

namespace App\Observers;

use App\Enum\ProjectEnum;
use App\Models\BuyLog;

class BuyLogObserver
{


    protected function genRefCode()
    {
//        $document = BuyLog::whereYear("created_at", date("Y"))
//            ->whereMonth("created_at", date("m"))
//            ->whereDay("created_at", date("d"))
//            ->orderBy("RefCode", "DESC")
//            ->first();
//
//
//        if (empty($document)) {
//            return date('Ymd00001');
//        } else {
//            return strval($document->RefCode + 1);
//        }

        $document = BuyLog::orderBy("id", "DESC")
            ->first();

        if (empty($document)) {
            $max = 1;
        } else {
            $max = $document->id + 1;
        }

        return strval(date('Ymd').str_pad($max, 5, 0, STR_PAD_LEFT));
    }

    protected function genInvoice()
    {
        $document = BuyLog::orderBy("fdInvoice", "DESC")
            ->first();

        if (empty($document)) {
            $max = 1;
        } else {
            $max = $document->fdInvoice + 1;
        }
        return str_pad($max, 11, 0, STR_PAD_LEFT);
    }

    /**
     * Handle the BuyLog "created" event.
     *
     * @param \App\Models\BuyLog $buyLog
     * @return void
     */
    public function creating(BuyLog $buyLog)
    {
        $data = $buyLog->data;


        $buyLog->RefCode = $this->genRefCode();
        if (empty($data['fdInvoice'])) {
            $buyLog->fdInvoice = $this->genInvoice();
            $data['fdInvoice'] = config('project.invoice_prefix') . $buyLog->fdInvoice;
        } else {
            $buyLog->fdInvoice = str_replace(config('project.invoice_prefix'), '', $data['fdInvoice']);
        }
        $data['RefCode'] = config('project.invoice_prefix') . $buyLog->RefCode;

        //if(!empty($data['fdMember_ID']))
        //{
        //    $data['RefCode'] = $data['fdMember_ID'];
        //}

        $buyLog->data = $data;

    }
}
