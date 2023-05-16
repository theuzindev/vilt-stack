<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    @routes
    @vite(['resources/app.ts', "resources/views/{$page['component']}.vue"])
    @inertiaHead
</head>
<body class="font-sans antialiased bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
    @inertia
</body>
</html>
