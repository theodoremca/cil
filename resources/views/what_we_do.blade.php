@extends('layouts.app')

@section('content')
    <div class="main-content">
        <!-- Breadcrumbs Section Start -->
        <div class="rs-breadcrumbs bg-2">
            <div class="container">
                <div class="content-part text-center">
                    <h1 class="breadcrumbs-title white-color mb-0">What We DO</h1>
                </div>
            </div>
        </div>
        <!-- Breadcrumbs Section End -->

        <!-- Premium Services Section Start -->
        <div id="rs-services" class="rs-services style2 gray-bg2 pt-100 pb-70 md-pt-80 md-pb-50 sm-pt-72">
            <div class="container">
                <div class="sec-title style2 mb-60 md-mb-50 sm-mb-42">
                    <div class="first-half text-right">
{{--                        <div class="sub-title primary">Premium Services</div>--}}
                        <h2 class="title mb-0">What we do</h2>
                    </div>
                    <div class="last-half">
                        <p class="desc mb-0 pr-50">
                            We are a leading global technology consultancy that integrates strategy, design and software engineering to enable enterprises and technology disruptors across the globe to thrive as modern digital businesses.

                        </p>
                    </div>
                </div>
   <what-we-do></what-we-do>
            </div>
        </div>
        <!-- Premium Services Section End -->

        <!-- Cta Section Start -->

        <!-- Cta Section End -->

        <!-- Free Quote Section Start -->

        <!-- Free Quote Section End -->
    </div>
@endsection
<script>
    import WhatWeDo from "../js/Pages/WhatWeDo/WhatWeDo";
    export default {
        components: {WhatWeDo}
    }
</script>
