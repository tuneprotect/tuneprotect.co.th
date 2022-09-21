<?php

namespace App\Models;

use App\Models\Base\BaseModel;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Passport\HasApiTokens;

class User extends BaseModel implements
    AuthenticatableContract,
    AuthorizableContract
{
    use HasApiTokens, Authenticatable, Authorizable;

    protected $guarded = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'previous_pwd', 'created_at', 'updated_at', 'token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'last_login' => 'datetime',
        'password_expire' => 'datetime',
        'role' => 'array',
        'enable' => 'integer'
    ];


    public static function processForgot($email)
    {

        $adminUser = self::where('email', $email)->first();
        if (!empty($adminUser)) {
            $adminUser->token = Str::random();
            $adminUser->save();
            return $adminUser;
        } else {
            return false;
        }
    }

    public static function isDuplicateWithOldPassword($password, $id = null)
    {

        $adminUserModel = new User();
        $adminUserModel->makeVisible('previous_pwd');
        $adminUser = self::find($id);

        if (empty($adminUser->previous_pwd)) {
            return false;
        }
        $arr = explode(',', $adminUser->previous_pwd);
        foreach ($arr as $v) {
            if (Hash::check($password, $v)) {
                return true;
            }
        }
        return false;
    }
}
