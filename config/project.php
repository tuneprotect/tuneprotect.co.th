<?php

return [
    'short_date' => env('SHORT_DATE', 'd/m/Y'),
    'short_date_time' => env('SHORT_DATE_TIME', 'd-m-y H:i:s'),
    'long_date' => env('LONG_DATE', 'd F Y'),
    'long_date_time' => env('LONG_DATE_TIME', 'd F Y H:i:s'),
    'file_name_date_time' => env('FILE_NAME_DATE_TIME', 'Y-m-d-H-i-s'),
    'log_date' => env('LOG_DATE', 'Y-m-d H:i:s'),

    'strict_password' => (bool)env('PROJECT_STRICT_PASSWORD', true),
    'disk_space' => env('PROJECT_DISK_SPACE', 1),

    'password_history' => env('PASSWORD_HISTORY', 5),

    'tinypng_api' => env('PROJECT_TINYPNG_API', ''),
    'staging_prefix' => env('PROJECT_STAGING_PREFIX', 'staging.'),

    'api_token' => env('MIX_REACT_APP_API_TOKEN', 'oUpmq2xAayR5GKtvJrPlSgFCseEu1T7/Qk8IN6ichznwdXLZ0VBH9MYOj+3bfW4D'),
    'google_auth_api' => env('MIX_GOOGLE_AUTH_API', null),
    'facebook_api' => env('MIX_FACEBOOK_API', null),
    'react_app_api_url' => env('MIX_REACT_APP_API_URL', 'api'),
    'react_app_name' => env('MIX_REACT_APP_NAME',  config('app.name')),
    'gtm' => env('PROJECT_GTM',  ''),
    'gtm_body' => env('PROJECT_GTM_BODY',  ''),
    'gtm_staging' => env('PROJECT_GTM_STAGING',  ''),
];
