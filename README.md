<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Infrastructure Installation

There are several infrastructure environment that developer can implement on development server you can choose on from following

- Docker https://www.docker.com/
- Appserv https://www.appserv.org/en/
- XAMPP https://www.apachefriends.org/

## Prerequisite

You have to install following software on developing machine

- PHP https://www.php.net/
- Composer https://getcomposer.org/
- Nodejs https://nodejs.org/en/


## Code Installation

- Clone code from git
- Run command to Install PHP Library in command prompt

        Composer Install

- Run command to Install JS Library in command prompt

        npm install

- Run command to Install DB and Install Passport

        php artisan migrate:refresh --seed && php artisan passport:install

- Run command to map path storage

        php artisan storage:link

- Run command to start development mode

        npm run watch

- Command To compile for production

        npm run prod

