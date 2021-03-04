<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'first_name' => 'Tommy',
                'last_name' => 'Lee',
                'email' => 'tomojung@gmail.com',
                'role' => "super_admin",
                'enable' => 1
            ],
            [
                'first_name' => 'Test',
                'last_name' => 'Test',
                'email' => 'test@test.com',
                'password' => '123456',
                'role' => "super_admin",
                'password_expire' => date(config('project.log_date'), strtotime("+90 days")),
                'enable' => 1
            ]
        ];

        foreach ($data as $v1) {
            User::create($v1);
        }

    }
}
