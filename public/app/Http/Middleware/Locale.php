<?php

namespace App\Http\Middleware;

use App\Models\Language;
use Closure;
use Illuminate\Support\Arr;

class Locale
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {


        $segment = $request->segment(1);

        if (in_array($segment, ['file-manager'])) {
            return $next($request);
        }

        if (!in_array($segment, Language::getEnableLanguage('front'))) {
            $segments = $request->segments();
            $fallback = Language::getDefaultLanguage('front');
            $segments = Arr::prepend($segments, $fallback);

            return redirect()->to(implode('/', $segments));
        }

        session(['locale' => $segment]);
        app()->setLocale($segment);


        return $next($request);
    }
}
