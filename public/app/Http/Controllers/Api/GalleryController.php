<?php


namespace App\Http\Controllers\Api;

use App\Helper\ImageHelper;
use App\Http\Controllers\Api\Base\BaseApiController;
use App\Http\Requests\GalleryRequest;
use App\Jobs\CompressImage;
use App\Models\AdminLog;
use App\Models\Gallery;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class GalleryController extends BaseApiController
{
    protected $model = Gallery::class;
    protected $modelName = 'Gallery';

    public function getAll(GalleryRequest $request)
    {
        $this->handleValidate($request);

        try {
            $this->apiResult = Gallery::where('type_id', $this->validated['type_id'])->where('ref_id', $this->validated['ref_id'])->orderBy('s_order')->get();
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;

        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Get All {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }

        return $this->send();
    }

    public function upload(Request $request)
    {

        try {

            foreach ($request->file('files') as $v) {

                $path = $v->storeAs($request->input('folder'), $v->getClientOriginalName());

                $gallery = new Gallery;
                $gallery->type_id = $request->input('type_id');
                $gallery->ref_id = $request->input('ref_id');
                $gallery->pic =  Storage::url($path);
                $gallery->save();

                if (ImageHelper::checkCanCompress($v->getMimeType())) {
                    $full_path = public_path(Storage::url($path));
                    CompressImage::dispatch($full_path);
                }

                AdminLog::log($this->modelName,
                    "Upload {$this->modelName} Success",
                    $this->currentUser,
                    $this->currentUserId,
                    ['path' => $path, 'type_id' => $request->input('type_id'), 'ref_id' => $request->input('ref_id')]);

            }

            $this->apiResult = Gallery::where('type_id', $request->input('type_id'))->where('ref_id', $request->input('ref_id'))->orderBy('s_order')->get();
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;
        } catch (QueryException $ex ){
            $this->apiStatusText['error_message.duplicate_record'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Upload  {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        } catch (\Exception $ex) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Upload  {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }
        return $this->send();
    }



}
