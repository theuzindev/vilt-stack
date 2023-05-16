<?php

use Inertia\Testing\AssertableInertia as Assert;

use function Pest\Laravel\get;

it('should render home page', function () {
    $response = get('/');

    $response->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Home/Index'));
});
