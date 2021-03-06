<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="/js/app.js" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    @include('layouts.styles')

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
</head>
<body class="home-eleven" >
    <div id="app">
            @include('layouts.header')
            @include('layouts.nav')
            @yield('content')
            @include('layouts.footer')
            @include('layouts.scripts')

    </div>
</body>
</html>
