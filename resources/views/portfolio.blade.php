@extends('layouts.app')

@section('content')


  <script>
        window.portfolioSlug = {!! json_encode($slug); !!};
    </script>

<portfolio-page></portfolio-page>

@endsection
<script>

</script>
