<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Base\BaseApiController;

use App\Models\AdminLog;
use App\Models\Language;
use App\Models\Setting;
use App\Models\Translation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;

class SystemController extends BaseApiController
{

    protected $model = Setting::class;

    public function overallCheck()
    {

        $this->apiResult['checking'] = array(
            'php_version' => $this->comparePHPVersion(),
            'api_connection' => true
        );
        $this->check_db_version('staging');
        $this->check_db_version('live');
        $this->check_mandatory_folder();


        if ($google_api = @Setting::get(Setting::GOOGLE_AUTH_API_FOR_BACKSTAGE)) {
            $this->apiResult['social_login']['google_api'] = $google_api;
        }

        if ($facebook_api = @Setting::get(Setting::FB_API_FOR_BACKSTAGE)) {
            $this->apiResult['social_login']['facebook_api'] = $facebook_api;
        }
        $this->apiStatus = self::SUCCESS;
        $this->apiStatusText['system_checking.success'] = self::SUCCESS;
        return $this->send();
    }

    public function checkInstallation()
    {

        $this->apiResult['checking'] = array(
            'php_version' => $this->comparePHPVersion(),
            'api_connection' => true
        );
        $this->check_db_version('staging');
        $this->check_db_version('live');
        $this->checkMigration();
        $this->check_mandatory_folder();
        $this->apiStatus = self::SUCCESS;
        $this->apiStatusText['system_checking.success'] = self::SUCCESS;

        return $this->send();
    }

    protected function checkMigration()
    {
        $this->apiResult['checking']["migration"] = Schema::hasTable("migrations");
    }

    protected function comparePHPVersion()
    {
        $content = file_get_contents(base_path() . '/composer.json');
        $content = json_decode($content, true);

        return (boolean)version_compare(PHP_VERSION, $content['require']['php']);
    }

    private function check_db_version($connection)
    {
        try {
            DB::connection($connection)->getPdo();
            $this->apiResult['checking']["db_{$connection}"] = Schema::connection($connection)->hasTable("settings");
            return true;
        } catch (\Exception $e) {
            $this->apiResult['checking']["db_{$connection}"] = false;
            return false;
        }

    }

    private function check_mandatory_folder()
    {
        foreach (['resource_folder' => storage_path(),
                     'public_folder' => public_path(Storage::url('/'))] as $k => $v) {
            $this->apiResult['checking'][$k] = File::isWritable($v);
            if ($k === 'public_folder' && $this->apiResult['checking'][$k] === false) {
                Artisan::call('storage:link');
                $this->apiResult['checking'][$k] = File::isWritable($v);
            }


        }
    }

    public function getDiskSpace()
    {

//        $used_space = FileSystemHelper::dir_size(base_path());
//        $this->apiStatus = self::SUCCESS;
//        $this->apiStatusText['system_checking.success'] = self::SUCCESS;
//        $this->apiResult = array(
//            'used_space' => $used_space,
//            'total_space' => config('project.disk_space') * pow(1024, 3)
//        );

        return $this->send();
    }

    public function checkQueue()
    {
        $this->apiResult = DB::table('jobs')->get();
        $this->apiStatus = self::SUCCESS;
        $this->apiStatusText['global.save_success'] = self::SUCCESS;
        return $this->send();
    }

    public function clearQueue()
    {

        try {

            DB::table('jobs')->truncate();
            $this->apiStatus = self::SUCCESS;
            $this->apiStatusText['global.save_success'] = self::SUCCESS;
            AdminLog::log('Queue', "Clear all queue success", $this->currentUser, $this->currentUserId);
        } catch (\Exception $ex) {
            $this->apiStatusText['error_message.default'] = self::ERROR;
            $this->apiResult['description'] = $ex->getMessage();
            AdminLog::log('Queue', "Clear Queue Error", $this->currentUser, $this->currentUserId, $ex->getMessage());
        }
        return $this->send();
    }

    public function startQueue()
    {
        Artisan::call('queue:work');
        $this->apiStatus = self::SUCCESS;
        $this->apiStatusText['global.save_success'] = self::SUCCESS;
        return $this->send();
    }

    public function clearCache(Request $request)
    {


        Cache::store($request->input('server') === 'staging' ? 'database' : "file")->flush();

        $this->apiStatus = self::SUCCESS;
        $this->apiStatusText['global.save_success'] = self::SUCCESS;
        $this->apiResult = $request->input('server');
        return $this->send();
    }

    public function getUnPublish()
    {

        $this->apiResult['configuration.language'] = Language::where('publish', 0)->count();
        $this->apiResult['configuration.setting'] = Setting::where('publish', 0)->count();
        $this->apiResult['configuration.translation'] = Translation::where('publish', 0)->count();

        foreach ($this->apiResult as $k => $v) {
            $arr = explode('.', $k);
            @$this->apiResult[$arr[0]] += $v;
        }

        $webContent = DB::table('web_contents')
            ->selectRaw('type_id, count(*) as total')
            ->where('publish', 0)
            ->groupBy('type_id')->get();

        foreach ($webContent as $v) {
            $this->apiResult[$v->type_id] = $v->total;
            $arr = explode('.', $v->type_id);



            if (count($arr) > 1) {
                @$this->apiResult[$arr[0]] += $v->total;
            }

            if ($arr[0] === 'static' && in_array($arr[1], ['page', 'meta', 'email'])) {
                @$this->apiResult[$arr[0] . '.content'] += $v->total;
            }
        }

        $partner = DB::table('partners')
            ->selectRaw('type_id, count(*) as total')
            ->where('publish', 0)
            ->groupBy('type_id')->get();

        foreach ($partner as $v) {
            $this->apiResult[$v->type_id] = $v->total;
            $arr = explode('.', $v->type_id);
            if (count($arr) > 1) {
                @$this->apiResult[$arr[0]] += $v->total;
            }
        }


        $this->apiStatus = self::SUCCESS;
        $this->apiStatusText['system_checking.success'] = self::SUCCESS;

        return $this->send();
    }
}
