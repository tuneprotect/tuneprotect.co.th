<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Base\BaseApiController;
use App\Http\Requests\AdminLogRequest;
use App\Models\AdminLog;
use Illuminate\Support\Carbon;


class AdminLogController extends BaseApiController
{
    protected $model = AdminLog::class;
    protected $modelName = 'adminLog';

    public function add(AdminLogRequest $request)
    {
        $this->handleValidate($request);
        AdminLog::log($this->validated['action'],
            $this->validated['description'],
            $this->currentUser,
            $this->currentUserId,
            $this->validated['data']
        );

        $this->apiStatus = self::SUCCESS;
        $this->apiStatusText['global.save_success'] = 'global.save_success';

        return $this->send();
    }

    public function getAll(AdminLogRequest $request)
    {
        $this->handleValidate($request);
        $result = AdminLog::where('created_at', '>=', Carbon::now()->subMonth());

        if (!empty($this->validated['filter'])) {

            foreach ($this->validated['filter'] as $k => $v) {

                if ($k === 'created_at') {
                    if (!empty($v['start_date'])) {
                        $result->where($k, '>=', $v['start_date']);
                    }
                    if (!empty($v['end_date'])) {
                        $result->where($k, '<=', $v['end_date']);
                    }
                } elseif (!empty($v)) {
                    $result->where($k, 'like', "%{$v}%");
                }
            }
        }
        $this->apiResult = $result->get();
        $this->apiStatus = self::SUCCESS;
        $this->apiStatusText['global.save_success'] = self::SUCCESS;

        return $this->send();
    }
}
