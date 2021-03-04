<?php

namespace App\Http\Controllers\Api;

use App\Enum\ProjectEnum;
use App\Helper\ImageHelper;
use App\Http\Controllers\Api\Base\BaseApiController;
use App\Http\Requests\WebContentRequest;
use App\Jobs\CompressImage;
use App\Models\AdminLog;
use App\Models\Language;
use App\Models\WebContent;
use App\Models\WebContentLocale;
use GuzzleHttp\Client;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class WebContentController extends BaseApiController
{
    protected $model = WebContent::class;
    protected $modelLocale = WebContentLocale::class;
    protected $modelName = 'WebContent';

    protected function getItem($id = '', $type_id = '')
    {
        if (!empty($id)) {
            $this->apiResult = $this->model::where('id', $id)->with('locales')->firstOrNew();
        } else {
            $this->apiResult = $this->model::where('type_id', $type_id)->with('locales')->firstOrNew();
        }
    }

    public function getDetail(WebContentRequest $request)
    {
        $this->handleValidate($request);
        try {
            $this->getItem(@$this->validated['id'], @$this->validated['type_id']);
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.success'] = self::SUCCESS;
        } catch (\Exception $ex) {
            $this->apiStatusText['error_message.default'] = self::ERROR . ' ' . $ex->getMessage();
        }

        return $this->send();
    }

    public function save(WebContentRequest $request)
    {
        $this->handleValidate($request);

        $this->validated['start_date'] = (empty($this->validated['start_date']) ? null : $this->validated['start_date']);
        $this->validated['end_date'] = (empty($this->validated['end_date']) ? null : $this->validated['end_date']);

        try {
            /* update main */
            if (!empty($this->validated['id'])) {
                $webContent = $this->model::updateOrCreate(['id' => $this->validated['id']], array_merge($this->validated, ['publish' => 0]));
            } else {
                unset($this->validated['id']);
                $webContent = $this->model::create(array_merge($this->validated, ['publish' => 0]));
            }


            if (isset($this->validated['locales'])) {
                foreach ($this->validated['locales'] as $k => $v) {
                    $this->modelLocale::updateOrCreate(['locale' => $k, 'web_content_id' => $webContent->id], $v);
                }
            }

            $this->getItem($webContent->id);
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;

            AdminLog::log($this->modelName, "Save {$this->modelName} Success", $this->currentUser, $this->currentUserId, $this->validated);

        } catch (\Exception $ex) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();
            AdminLog::log($this->modelName, "Save {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());
        }


        return $this->send();
    }

    public function getAll(WebContentRequest $request)
    {
        $this->handleValidate($request);
        try {

            $sql = $this->model::where('type_id', $this->validated['type_id'])->with('locales');

            if (isset($this->validated['parent_id'])) {
                $sql->where('parent_id', $this->validated['parent_id']);
            }

            if (isset($this->validated['order_by'])) {
                foreach ($this->validated['order_by'] as $k => $v) {
                    $sql->orderBy($k, $v);
                }
            } else {
                $sql->orderBy('s_order');
            }

            $this->apiResult = $sql->get();
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

                $webContent = new WebContent;
                $webContent->type_id = $request->input('type_id');
                $webContent->pic = Storage::url($path);
                $webContent->publish = 0;
                $webContent->save();

                if (ImageHelper::checkCanCompress($v->getMimeType())) {
                    $full_path = public_path(Storage::url($path));
//                    CompressImage::dispatch($full_path);
                }

                AdminLog::log($this->modelName,
                    "Upload {$this->modelName} Success",
                    $this->currentUser,
                    $this->currentUserId,
                    ['path' => $path, 'type_id' => $request->input('type_id')]);

            }

            $this->apiResult = $this->model::where('type_id', $request->input('type_id'))->with('locales')->orderBy('id', 'DESC')->get();
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;
        } catch (QueryException $ex) {
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


    protected function combineTag($oldTag, $newTag)
    {

        return implode(',', array_unique(array_merge(explode(',', $oldTag), explode(',', $newTag))));
    }

    public function addTag(WebContentRequest $request)
    {
        $this->handleValidate($request);
        try {

            if (empty($this->validated['selected_id']) || empty($this->validated['tag'])) {
                $this->apiStatusText['global.not_selected'] = "Not Selected";
                AdminLog::log($this->modelName, "Add Tag {$this->modelName} Error", $this->currentUser, $this->currentUserId, "Not Selected");
                return $this->send();
            }

            foreach ($this->validated['selected_id'] as $v) {
                foreach ($this->validated['tag'] as $k1 => $v1) {
                    $locale = $this->modelLocale::firstOrCreate(['web_content_id' => $v, 'locale' => $k1]);

                    if (!empty($locale->remark)) {
                        $locale->remark = $this->combineTag($locale->remark, $v1);
                    } else {
                        $locale->remark = $v1;
                    }


                    $locale->save();
                }
            }

            $this->model::whereIn('id', @$this->validated['selected_id'])->update(['publish' => 0]);

            $this->apiResult = $this->model::where('type_id', $this->validated['type_id'])->with('locales')->orderBy('id', 'DESC')->get();
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;
            AdminLog::log($this->modelName, "Save {$this->modelName} Success", $this->currentUser, $this->currentUserId, $this->validated);

        } catch (\Exception $ex) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();
            AdminLog::log($this->modelName, "Save {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());
        }

        return $this->send();
    }

    protected function deleteTag($oldTag, $filterTag)
    {
        $collection = collect(explode(',', $oldTag));

        $filtered = $collection->filter(function ($value, $key) use ($filterTag) {
            return $value != $filterTag;
        });

        return implode(',', $filtered->all());
    }

    public function removeTag(WebContentRequest $request)
    {
        $this->handleValidate($request);
        try {
            if (empty($this->validated['selected_id']) || empty($this->validated['tag'])) {
                $this->apiStatusText['global.not_selected'] = "Not Selected";
                AdminLog::log($this->modelName, "Add Tag {$this->modelName} Error", $this->currentUser, $this->currentUserId, "Not Selected");
                return $this->send();
            }

            $locales = $this->modelLocale::where(['web_content_id' => $this->validated['selected_id']])->get();


            foreach ($locales as $v) {

                $v->remark = $this->deleteTag($v->remark, $this->validated['tag']);
                $v->save();

            }

            $this->model::where('id', @$this->validated['selected_id'])->update(['publish' => 0]);

            $this->apiResult = $this->model::where('type_id', $this->validated['type_id'])->with('locales')->orderBy('id', 'DESC')->get();
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;
            AdminLog::log($this->modelName, "Save {$this->modelName} Success", $this->currentUser, $this->currentUserId, $this->validated);

        } catch (\Exception $ex) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();
            AdminLog::log($this->modelName, "Save {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());
        }

        return $this->send();
    }

    public function setEnable(WebContentRequest $request)
    {
        $this->handleValidate($request);
        return $this->handleAction('enable');
    }

    public function setDelete(WebContentRequest $request)
    {
        $this->handleValidate($request);
        return $this->handleAction('mark_delete');
    }

    public function saveReorder(WebContentRequest $request)
    {
        $this->handleValidate($request);
        return $this->saveReorderAction();
    }

    public function publish(WebContentRequest $request)
    {
        $this->handleValidate($request);
        return $this->publishAction();
    }

    public function savePackageDetail(WebContentRequest $request)
    {
        $this->handleValidate($request);
        try {
            foreach ($this->validated['package_header'] as $locale => $v) {
                $this->modelLocale::where('web_content_id', $this->validated['id'])
                    ->where('locale', $locale)->update(
                        ['remark' => json_encode($v)]
                    );
            }

            foreach ($this->validated['package_value'] as $id => $v) {
                foreach ($v as $locale => $v1) {
                    $this->modelLocale::where('web_content_id', $id)
                        ->where('locale', $locale)->update(
                            ['remark' => json_encode($v1)]
                        );
                }
            }

            foreach ($this->validated['package_price'] as $id => $v) {
                $this->model::where('id', $id)
                    ->update(
                        ['custom_input_1' => $v]
                    );
            }

            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;
            AdminLog::log($this->modelName, "Save Package Detail Success", $this->currentUser, $this->currentUserId, $this->validated);

        } catch (\Exception $ex) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();
            AdminLog::log($this->modelName, "Save {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());
        }

        return $this->send();
    }

}
