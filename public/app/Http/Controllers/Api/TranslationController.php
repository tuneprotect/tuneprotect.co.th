<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Base\BaseApiController;

use App\Http\Requests\TranslationRequest;
use App\Models\AdminLog;
use App\Models\Language;
use App\Models\Translation;
use Illuminate\Support\Facades\Artisan;

class TranslationController extends BaseApiController
{
    protected $model = Translation::class;
    protected $modelName = 'Translation';

    public function getAll()
    {
        $this->apiResult['translation'] = Translation::orderBy("group")->orderBy("key")->get();
        $this->apiStatus = self::SUCCESS;
        $this->apiStatusText['global.save_success'] = self::SUCCESS;

        return $this->send();
    }

    public function loadFromFile()
    {
        try {
            Translation::loadFile();

            $this->apiResult['all_lang'] = Language::select('code', 'title', 'enable')->distinct()->get();
            $this->apiResult['translation'] = Translation::all();
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;
            AdminLog::log($this->modelName, "Load {$this->modelName} From Live Success", $this->currentUser, $this->currentUserId);
            cache()->flush();
        } catch (\Exception $exception) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $exception->getMessage();
            AdminLog::log($this->modelName, "Load {$this->modelName} From Live Error", $this->currentUser, $this->currentUserId, $exception->getMessage());
        }

        return $this->send();
    }

    public function save(TranslationRequest $request)
    {
        $this->handleValidate($request);
        try {
            foreach ($this->validated['changed'] as $k => $v) {
                Translation::find($v['id'])->update([
                    'text' => $v['text'],
                    'publish' => 0
                ]);

                AdminLog::log($this->modelName, "Save {$this->modelName} Success", $this->currentUser, $this->currentUserId, $v);
            }
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;
            Artisan::call('cache:clear');
        } catch (\Exception $exception) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $exception->getMessage();
            AdminLog::log($this->modelName, "Save {$this->modelName} Error", $this->currentUser, $this->currentUserId, $exception->getMessage());
        }
        return $this->send();
    }

    public function publish(TranslationRequest $request)
    {
        $this->handleValidate($request);
        try {

            $arr = [];

            if ($this->validated['id'] === 'all') {
                $all = Translation::where('publish', 0)->get();

                foreach ($all as $v) {
                    Translation::publish($v->id);
                    $arr[] = $v->id;
                }
            } else {
                Translation::publish($this->validated['id']);
                $arr[] = $this->validated['id'];
            }

            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.publish_success'] = self::SUCCESS;
            AdminLog::log($this->modelName, "Publish {$this->modelName} Success", $this->currentUser, $this->currentUserId, $arr);
            cache()->store('file')->flush();

        } catch (\Exception $exception) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $exception->getMessage();
            AdminLog::log($this->modelName, "Publish {$this->modelName} Error", $this->currentUser, $this->currentUserId, $exception->getMessage());
        }
        return $this->send();
    }
}
