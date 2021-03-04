<?php

namespace App\Jobs;

use App\Helper\StreamingHelper;
use App\Models\AdminLog;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessLiveThumbnail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $video_link;

    /**
     * Create a new job instance.
     *
     * @param $video_link
     */
    public function __construct($video_link)
    {
        $this->video_link = $video_link;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        StreamingHelper::genThumbnailFromStream($this->video_link);
    }
}
