<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use App\Answer;
use App\Question;
use App\Policies\QuestionPolicy;
use App\Policies\AnswerPolicy;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{

    protected $policies = [
        Question::class => QuestionPolicy::class,
        Answer::class => AnswerPolicy::class,
    ];

    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();
    }
}
