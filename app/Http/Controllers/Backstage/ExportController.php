<?php

namespace App\Http\Controllers\Backstage;

use App\Models\LeadForms;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;


class ExportController extends Controller
{

    public function leadform(Request $request)
    {

        $data = json_decode($request->filter);

        $result = LeadForms::with('product')->whereHas('product');

        if (!empty($data)) {

            foreach ($data as $k => $v) {

                if ($k === 'created_at') {
                    if (!empty($v->start_date)) {
                        $result->where($k, '>=', $v->start_date);
                    }
                    if (!empty($v->end_date)) {
                        $result->where($k, '<=', $v->end_date);
                    }
                } elseif (!empty($v)) {
                    $result->where($k, 'like', "%{$v}%");
                }
            }
        }
        $transaction = $result->orderBy('created_at','desc')->get();

        $columns = array('created_at', 'name', 'email',
            'tel', 'message', 'available_time','product','consent');
        $callback = function () use ($transaction, $columns) {
            $file = fopen('php://output', 'w');
            fputcsv($file, $columns);
            foreach ($transaction as $row) {
                fputcsv($file, array(
                    $row->created_at,
                    $row->name,
                    $row->email,
                    $row->tel,
                    $row->message,
                    $row->available_time,
                    $row->product['th']->title,
                    $row->consent
                ));
            }

            fclose($file);
        };

        return Response::stream($callback, 200, $this->genHeader('transaction'));
    }

    protected function genHeader($filename)
    {
        return array(
            "Content-type" => "text/csv",
            "Content-Disposition" => "attachment; filename=$filename.csv",
            "Pragma" => "no-cache",
            "Cache-Control" => "must-revalidate, post-check=0, pre-check=0",
            "Expires" => "0"
        );
    }
}
