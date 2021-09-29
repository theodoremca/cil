@extends('layouts.app')

@section('content')
    {{-- <script>
        window.auth_user = {!! json_encode($auth_user); !!};
    </script>

    <app></app> --}}


    <div class="main-content">
        <!-- Breadcrumbs Section Start -->
        <div class="rs-breadcrumbs bg-1">
            <div class="container">
                <div class="content-part text-center">
                    <h1 class="breadcrumbs-title white-color mb-0">About</h1>
                </div>
            </div>
        </div>
        <!-- Breadcrumbs Section End -->

        <!-- About Section Start -->
        <div class="rs-about inner pt-100 lg-pt-92 md-pt-80 pb-100 md-pb-80">
            <div class="container">
                <div class="row y-middle mb-64 lg-mb-30 md-mb-0">
                    <div class="col-lg-6 md-mb-95">
                        <div class="image-part">
                            <img src="{{asset('uploads/inner4.jpeg')}}" alt="">
                            <div class="author-info">
                                <h3 class="name">OJ Adekoya</h3>
                                <span class="designation">CEO & Founder</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 pl-50 md-pl-15 pr-50 lg-pr-15">
                        <div class="sec-title mb-25">
                            <div class="sub-title primary">About</div>
                            <h2 class="title mb-18">We Provides Best Advice For Your Business</h2>
                            <div class="desc">Reobiz donec pulvinar magna id leoersi pellentesque impered dignissim rhoncus euismod euismod eros vitae.</div>
                        </div>
                        <ul class="listing-style2 mb-33">
                            <li>Production or Trading of Good or Services for Sale</li>
                            <li>Cost of supplies and equipment</li>
                            <li>Change in the volume of expected sales</li>
                            <li>Change in the volume of expected sales</li>
                            <li>Change in the volume of expected sales</li>
                        </ul>
                        <div class="btn-part">
                            <a class="readon" href="#">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- About Section End -->

        <!-- Counter Section Start -->
        <div class="rs-counter style1 modify bg21 pt-92 pb-100 md-pt-72 md-pb-80">
            <div class="container">
                <div class="sec-title text-center mb-52 md-mb-29">
                    <div class="sub-title white-color">Fun Facts</div>
                    <h2 class="title mb-0 white-color">Facts For Choosing Us</h2>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 mb-30">
                        <div class="couter-part thousand">
                            <div class="rs-count">100</div>
                            <h5 class="title">Happy Clients</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 mb-30">
                        <div class="couter-part plus">
                            <div class="rs-count">250</div>
                            <h5 class="title">Projects Done</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 xs-mb-30">
                        <div class="couter-part plus">
                            <div class="rs-count">60</div>
                            <h5 class="title">Expert People</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="couter-part thousand">
                            <div class="rs-count">230</div>
                            <h5 class="title">Portfolios</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Counter Section End -->

        <!-- Team Section Start -->
   
        <!-- Free Quote Section End -->
    </div>
@endsection
