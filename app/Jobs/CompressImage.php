<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Tinify\Source;
use Tinify\Tinify;


class CompressImage implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $imagePath;

    /**
     * Create a new job instance.
     *
     * @param $imagePath
     */
    public function __construct($imagePath)
    {
        $this->imagePath = $imagePath;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        if (!empty(config('project.tinypng_api'))) {

            Tinify::setKey(config('project.tinypng_api'));
            Source::fromFile($this->imagePath)->toFile($this->imagePath);
        }
    }
}
