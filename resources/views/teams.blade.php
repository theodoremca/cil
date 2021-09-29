@extends('layouts.app')

@section('content')
    {{-- <script>
        window.auth_user = {!! json_encode($auth_user); !!};
    </script>

    <app></app> --}}
    <div class="rs-breadcrumbs bg-3">
        <div class="container">
            <div class="content-part text-center pt-160 pb-160">
                <h1 class="breadcrumbs-title white-color mb-0">Our Team</h1>
            </div>
        </div>
    </div>

    <div class="rs-team grid1 modify pt-100 pb-36 md-pt-80 md-pb-16">
        <div class="container">

<teams></teams>

        </div>
    </div>
@endsection
