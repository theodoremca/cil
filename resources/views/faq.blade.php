@extends('layouts.app')

@section('content')



    <div class="main-content">
        <!-- Breadcrumbs Section Start -->
        <div class="rs-breadcrumbs bg-2">
            <div class="container">
                <div class="content-part text-center pt-160 pb-160">
                    <h1 class="breadcrumbs-title white-color mb-0">FAQ</h1>
                </div>
            </div>
        </div>
        <!-- Breadcrumbs Section End -->

        <!-- Faq Section Start -->
        <div class="rs-faq inner pt-92 md-pt-72 pb-100 md-pb-80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 pr-55 md-pr-15 md-mb-30">
                        <div class="sec-title mb-43">
                            <div class="sub-title primary">Feel free to contact us</div>
                            <h2 class="title mb-16">Do You Have Any Questions?</h2>
                            <div class="desc">Creation timelines for the standard lorem ipsum passage vary, with some citing the 15th century and others the business data.</div>
                        </div>
                        <div id="accordion" class="accordion">
                            <div class="card">
                                <div class="card-header">
                                    <a class="card-link" data-toggle="collapse" href="#collapseOne">Where should I incorporate my business?</a>
                                </div>
                                <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                    <div class="card-body">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients new and existing with elite construction.</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">Where can I find market research reports?</a>
                                </div>
                                <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                    <div class="card-body">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients new and existing with elite construction.</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">What is social distancing and how can we do that?</a>
                                </div>
                                <div id="collapseThree" class="collapse" data-parent="#accordion">
                                    <div class="card-body">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients new and existing with elite construction.</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#collapseFour">What type of company is measured?</a>
                                </div>
                                <div id="collapseFour" class="collapse" data-parent="#accordion">
                                    <div class="card-body">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients new and existing with elite construction.</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#collapseFive">How can I safely use cleaning chemicals?</a>
                                </div>
                                <div id="collapseFive" class="collapse" data-parent="#accordion">
                                    <div class="card-body">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients new and existing with elite construction.</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#collapseSix">Where should I incorporate my business?</a>
                                </div>
                                <div id="collapseSix" class="collapse" data-parent="#accordion">
                                    <div class="card-body">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Impress clients new and existing with elite construction brochures. Impress clients new and existing with elite construction.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <form class="sidebar-form mt-8">
                            <h3 class="title white-color mb-36">More Questions</h3>
                            <input type="text" name="name" placeholder="Name" required>
                            <input type="email" name="email" placeholder="E-mail" required>
                            <input type="text" name="number" placeholder="Phone Number">
                            <textarea placeholder="Enter Query Here"></textarea>
                            <button class="readon" type="submit">Submit Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Faq Section End -->
    </div>

@endsection
<script>

</script>
