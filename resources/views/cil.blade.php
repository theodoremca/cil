@extends('layouts.app')

@section('content')
    <script>
        window.auth_user = {!! json_encode($auth_user); !!};
    </script>
    <app></app>
@endsection
