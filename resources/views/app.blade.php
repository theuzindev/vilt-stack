<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    @routes
    @vite(['resources/app.ts', "resources/views/{$page['component']}.vue"])
    @inertiaHead
</head>
<body class="font-sans antialiased">
    @inertia
</body>
</html>
