<?php

namespace App\Console\Commands;

use App\Models\WebContent;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class ExportData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'data:export';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {





//        $result =  WebContent::with('locales')->get()->toArray();
//        Storage::disk('local')->put('data/web_content.json', json_encode($result));
    }
}
