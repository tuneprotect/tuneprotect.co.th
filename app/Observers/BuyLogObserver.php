<?php

namespace App\Observers;

use App\Enum\ProjectEnum;
use App\Models\BuyLog;

class BuyLogObserver
{


    protected function genRefCode()
    {
        $document = BuyLog::whereYear("created_at", date("Y"))
            ->whereMonth("created_at", date("m"))
            ->whereDay("created_at", date("d"))
            ->orderBy("RefCode", "DESC")
            ->first();


        if (empty($document)) {
            return date('Ymd00001');
        } else {
            return strval($document->RefCode + 1);
        }
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
            $data['fdInvoice'] = ProjectEnum::INVOICE_PREFIX . $buyLog->fdInvoice;
        } else {
            $buyLog->fdInvoice = str_replace(ProjectEnum::INVOICE_PREFIX, '', $data['fdInvoice']);
        }
        $data['RefCode'] = ProjectEnum::INVOICE_PREFIX . $buyLog->RefCode;

        $buyLog->data = $data;

    }
}
