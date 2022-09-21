<?php


namespace App\Http\Controllers\Api\Base;


use App\Models\AdminLog;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BaseApiController extends Controller
{
    const SUCCESS = 'success';
    const ERROR = 'error';

    const API_STATUS = 'status';
    const API_STATUS_TEXT = 'message';
    const API_RESULT = 'result';

    protected $apiStatus = self::ERROR;
    protected $apiStatusText = null;
    protected $apiResult = null;

    protected $validated;
    protected $currentUser;
    protected $currentUserId;
    protected $model;
    protected $modelName;

    public function __construct()
    {
        if ($currentUser = Auth::user()) {
            $this->currentUserId = $currentUser->id;
            $this->currentUser = @"{$currentUser->first_name} {$currentUser->last_name}";
        }
    }

    protected function handleValidate($request)
    {
        $this->validated = $request->validated();
        if (isset($this->validated['error'])) {
            foreach ($this->validated['error'] as $v) {
                $this->apiStatusText[$v] = $v;
            }
            return $this->send();
        }

        foreach ($this->validated as $k => $v) {

            if (!is_array($v) && !is_object($v)) {
                $this->validated[$k] = trim($v);
            }
        }
    }

    protected function send()
    {
        return response()->json([
            self::API_STATUS => $this->apiStatus,
            self::API_STATUS_TEXT => $this->apiStatusText,
            self::API_RESULT => $this->apiResult
        ]);
    }


    protected function toggleField($field, $id)
    {

        try {
            $result = $this->model::find($id);
            $result->{$field} = !$result->{$field};
            $result->save();

            $this->apiResult[$field] = (int)$result->{$field};
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;

            AdminLog::log($this->modelName,
                "Change {$field} {$this->modelName} Success",
                $this->currentUser,
                $this->currentUserId,
                "Change {$field} {$id} status to {$this->apiResult[$field]}");
        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Change {$field} {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }
    }

    protected function massToggleField($field, $status, $id)
    {

        try {
            $this->apiResult[$field] = $this->model::whereIn('id', $id)->update([$field => $status]);
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;

            AdminLog::log($this->modelName,
                "Change {$field} {$this->modelName} Success",
                $this->currentUser,
                $this->currentUserId,
                "Change {$field}  " . json_encode($id) . " status to {$this->apiResult[$field]}");
        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Change {$field} {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }
    }

    protected function handleAction($action)
    {

        if (is_array($this->validated['selected_id'])) {
            $this->massToggleField($action, $this->validated[$action], $this->validated['selected_id']);
        } else {
            $this->toggleField($action, $this->validated['selected_id']);
        }
        return $this->send();
    }

    protected function saveAction()
    {

        try {


            if (!empty($this->validated['id'])) {
                $this->apiResult = $this->model::updateOrCreate(['id' => $this->validated['id']], $this->validated);

            } else {
                unset($this->validated['id']);
                $this->apiResult = $this->model::create($this->validated);
            }

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

    public function deleteAction()
    {
        try {

            $id = $this->validated['selected_id'];

            if (!is_array($this->validated['selected_id'])) {
                $id = [$this->validated['selected_id']];
            }
            foreach ($id as $v) {
                $result = $this->model::find($v);
                $result->delete();
            }
            $this->apiResult = true;
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;

            AdminLog::log($this->modelName,
                "Delete {$this->modelName} Success",
                $this->currentUser,
                $this->currentUserId,
                "Delete {$this->modelName} " . json_encode($this->validated['selected_id']) . " success");
        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Delete {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }

        return $this->send();
    }

    public function get(Request $request)
    {
        $this->validated = $request->validate([
            'id' => 'required|integer'
        ]);

        try {
            $this->apiResult = $this->model::find($this->validated['id']);
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.success'] = self::SUCCESS;
        } catch (\Exception $ex) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
        }

        return $this->send();
    }

    protected function saveReorderAction()
    {

        try {
            foreach ($this->validated['order_data'] as $k => $v) {
                $this->model::saveReorder($v, $k);
            }
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;
            AdminLog::log($this->modelName, "Reorder {$this->modelName} Success", $this->currentUser, $this->currentUserId, json_encode($this->validated['order_data']));

        } catch (\Exception $ex) {

            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();

            AdminLog::log($this->modelName, "Get All {$this->modelName} Error", $this->currentUser, $this->currentUserId, $ex->getMessage());

        }

        return $this->send();

    }

    public function publishAction()
    {

        try {

            $this->apiResult = $this->model::publish($this->validated['selected_id']);

            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.publish_success'] = self::SUCCESS;
            AdminLog::log($this->modelName, "Publish {$this->modelName} Success", $this->currentUser, $this->currentUserId, $this->validated['selected_id']);

        } catch (\Exception $exception) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $exception->getMessage();
            AdminLog::log($this->modelName, "Publish {$this->modelName} Error", $this->currentUser, $this->currentUserId, $exception->getMessage());
        }
        return $this->send();
    }
}
