<?php

namespace App\Observers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserObserver
{
    /**
     * Handle the admin user "created" event.
     *
     * @param \App\Models\User $adminUser
     * @return void
     */
    public function created(User $adminUser)
    {
        //
    }

    /**
     * Handle the admin user "updated" event.
     *
     * @param \App\Models\User $adminUser
     * @return void
     */
    public function updated(User $adminUser)
    {

    }

    /**
     * Handle the admin user "deleted" event.
     *
     * @param \App\Models\User $adminUser
     * @return void
     */
    public function deleted(User $adminUser)
    {
        //
    }

    /**
     * Handle the admin user "restored" event.
     *
     * @param \App\Models\User $adminUser
     * @return void
     */
    public function restored(User $adminUser)
    {
        //
    }

    /**
     * Handle the admin user "force deleted" event.
     *
     * @param \App\Models\User $adminUser
     * @return void
     */
    public function forceDeleted(User $adminUser)
    {
        //
    }

    public function saving(User $adminUser)
    {
        if($adminUser->isDirty('password')){
            $hashPwd = Hash::make($adminUser->password);

            $previousPwd = explode(',', $adminUser->previous_pwd);
            $previousPwd[] = $hashPwd;

            $adminUser->token = null;
            $adminUser->previous_pwd = implode(',', array_slice($previousPwd, -1 * config('project.password_history')));
            $adminUser->password = $hashPwd;
            $adminUser->password_expire = date(config('project.log_date'), strtotime("+90 days"));
        }

    }
}
