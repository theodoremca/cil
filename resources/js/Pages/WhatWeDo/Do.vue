<template>
    <div class="main-content">
        <!-- Breadcrumbs Section Start -->
        <div class="rs-breadcrumbs bg-3">
            <div class="container">
                <div class="content-part text-center pt-160 pb-160">
                    <h1 class="breadcrumbs-title white-color mb-0">{{service.title}}</h1>
                </div>
            </div>
        </div>
        <!-- Breadcrumbs Section End -->

        <!-- Services Section Start -->
        <div id="rs-services" class="rs-services single pt-100 pb-100 md-pt-80 md-pb-80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 pr-40 md-pr-15 md-mb-50">
                        <img class="mb-39" :src="service.image" alt="">

                        <h2>{{service.title}}</h2>

                        <p class="desc mb-31">Cras enim urna, interdum nec porttitor vitae, sollicitudin eu eros. Praesent eget mollis nulla, non lacinia urna. Donec sit amet neque auctor, ornare dui rutrum, condimentum justo. Duis dictum, ex accumsan eleifend eleifend, ex justo aliquam nunc, in ultrices ante quam eget massa. Sed scelerisque, odio eu tempor pulvinar, magna tortor finibus lorem, ut mattis tellus nunc ut quam. Curabitur quis ornare leo. Suspendisse bibendum nibh non turpis vestibulum pellentesque.</p>

                        <ul class="listing-style regular2 pl-10 sm-pl-0">
                            <li v-for="(quote,idx) in service.list" :key="idx">{{quote}}</li>
                        </ul>

<!--                        <div class="rs-skillbar style3 pt-52 pb-55">-->
<!--                            <div class="row gutter-20">-->
<!--                                <div class="col-md-4 sm-mb-30">-->
<!--                                    <div class="content-part">-->
<!--                                        <div class="rs-pie-content">-->
<!--                                            <div class="rs-pie2" data-percent="89">-->
<!--                                                <span class="rspie-value"></span>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="pie-title">Strategy</div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="col-md-4 sm-mb-30">-->
<!--                                    <div class="content-part">-->
<!--                                        <div class="rs-pie-content">-->
<!--                                            <div class="rs-pie2" data-percent="82">-->
<!--                                                <span class="rspie-value"></span>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="pie-title">Analytics</div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="col-md-4">-->
<!--                                    <div class="content-part">-->
<!--                                        <div class="rs-pie-content">-->
<!--                                            <div class="rs-pie2" data-percent="95">-->
<!--                                                <span class="rspie-value"></span>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="pie-title">Result</div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

                        <p class="desc mb-53">{{service.body}}</p>

<!--                        <div class="row gutter-20">-->
<!--                            <div class="col-6">-->
<!--                                <img class="bdru-4" src="assets/images/services/single/1.jpg" alt="">-->
<!--                            </div>-->
<!--                            <div class="col-6">-->
<!--                                <img class="bdru-4" src="assets/images/services/single/2.jpg" alt="">-->
<!--                            </div>-->
<!--                        </div>-->

<!--                        <div class="rs-testimonial style6 mt-60">-->
<!--                            <div class="testi-wrap">-->
<!--                                <div class="icon-part">-->
<!--                                    <img src="assets/images/testimonial/sign.png" alt="">-->
<!--                                </div>-->
<!--                                <p class="desc">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos et quas molestias data.</p>-->
<!--                                <div class="detail-part">-->
<!--                                    <div class="avatar">-->
<!--                                        <img src="assets/images/testimonial/avatar/5.jpg" alt="">-->
<!--                                    </div>-->
<!--                                    <div class="info">-->
<!--                                        <div class="name">John Doe</div>-->
<!--                                        <span class="designation">Designer</span>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
                    </div>
                    <div class="col-lg-4">
                        <ul class="page-nav-vertical mb-50">
                            <li @click="slug=service.slug" v-for="(service,idx) in allWeDo" :key="idx" :class="{active:slug==service.slug}"><a :href="'/what-we-do/we-do/'+service.slug" >{{service.title}}</a></li>
                        </ul>




                    </div>
                </div>
            </div>
        </div>
        <!-- Services Section End -->
    </div>
</template>

<script>
    import allWeDo from "../../../db/allWeDo.json"

    export default {
        name: "Do",
        props:['slug'],
        data:()=>({
            allWeDo:allWeDo
        }),
        computed:{
            service(){
                return this.allWeDo.filter(service => service.slug === this.slug)[0]
            }
        }



    }
</script>

<style scoped>

</style>
