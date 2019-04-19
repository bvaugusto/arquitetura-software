<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(\L5Swagger\L5SwaggerServiceProvider::class);

        // Para chamar ClientRepositoryEloquent
        $this->app->bind(
            'App\Repositories\Contracts\AddressRepositoryInterface',
            'App\Repositories\AddressRepositoryEloquent',
            'App\Repositories\Contracts\CompanyRepositoryInterface',
            'App\Repositories\CompanyRepositoryEloquent',
            'App\Repositories\Contracts\SegmentRepositoryInterface',
            'App\Repositories\SegmentRepositoryEloquent'
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
