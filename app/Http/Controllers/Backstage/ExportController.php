<?php

namespace App\Http\Controllers\Backstage;

use App\Models\LeadForms;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

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


        $spreadsheet = new Spreadsheet();
        $spreadsheet->getActiveSheet()->setCellValue('A1', 'created_at');
        $spreadsheet->getActiveSheet()->setCellValue('B1', 'name');
        $spreadsheet->getActiveSheet()->setCellValue('C1', 'email');
        $spreadsheet->getActiveSheet()->setCellValue('D1', 'tel');
        $spreadsheet->getActiveSheet()->setCellValue('E1', 'message');
        $spreadsheet->getActiveSheet()->setCellValue('F1', 'available_time');
        $spreadsheet->getActiveSheet()->setCellValue('G1', 'product');
        $spreadsheet->getActiveSheet()->setCellValue('H1', 'consent');

        $i = 2;
        foreach ($transaction as $row) {

            $spreadsheet->getActiveSheet()->setCellValue('A' . $i, $row->created_at);
            $spreadsheet->getActiveSheet()->setCellValue('B'. $i, $row->name);
            $spreadsheet->getActiveSheet()->setCellValue('C'. $i, $row->email);
            $spreadsheet->getActiveSheet()->setCellValue('D'. $i, $row->tel);
            $spreadsheet->getActiveSheet()->setCellValue('E'. $i, $row->message);
            $spreadsheet->getActiveSheet()->setCellValue('F'. $i, $row->available_time);
            $spreadsheet->getActiveSheet()->setCellValue('G'. $i,   $row->product['th']->title);
            $spreadsheet->getActiveSheet()->setCellValue('H'. $i,  $row->consent);
            $i++;
        }




        $filename = "Leadform-" . date('YmdHis') . ".xls";

        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="' . $filename . '"');
        header('Cache-Control: max-age=0');

        $workbook = IOFactory::createWriter($spreadsheet, "Xls");
        $workbook->save('php://output');


    }


}
