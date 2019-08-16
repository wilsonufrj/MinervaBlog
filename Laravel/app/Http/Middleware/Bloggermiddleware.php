<?php

namespace App\Http\Middleware;

use Closure;
use App\User;
class Bloggermiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->isblogger == 1){
            return $next($request);
        }else{
            return response()->json(["Voce nao eh usuario"]);
        }
    }
}
