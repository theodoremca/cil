<template>
    <div class="rs-carousel owl-carousel dot-style1" data-loop="true" data-items="2" data-margin="0" data-autoplay="true" data-hoverpause="true" data-autoplay-timeout="5000" data-smart-speed="800" data-dots="true" data-nav="false" data-nav-speed="false" data-center-mode="false" data-mobile-device="1" data-mobile-device-nav="false" data-mobile-device-dots="false" data-ipad-device="1" data-ipad-device-nav="false" data-ipad-device-dots="false" data-ipad-device2="1" data-ipad-device-nav2="false" data-ipad-device-dots2="false" data-md-device="2" data-lg-device="2" data-md-device-nav="false" data-md-device-dots="true" data-doteach="true">
        <div v-for="(testimonial ,idx) in testimonials" :key="idx" class="testi-wrap mb-39 md-mb-0">
            <div class="icon-part">
                <img src="assets/images/quote4.png" alt="">
            </div>
            <div class="wraping">
                <p class="desc mb-32">{{testimonial.comment}}</p>
                <div class="posted-by">
                    <div class="avatar">
                        <img :src="testimonial.photo" alt="">
                    </div>
                    <div class="info">

                        <h4 class="name" :text="testimonial.author"></h4>
                        <span class="designation" :text="testimonial.designation">CEO, Keen IT Solution</span>
                        <ul class="ratings">
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star-half-o"></i></li>
                            <li><i class="fa fa-star-o"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Testimonials",
        data:()=>({
            testimonials:[
                {
                    author:"Adeyika Moni",
                    designation:"Ceo CrazyScript",
                    comment:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
                    photo:"https://firebasestorage.googleapis.com/v0/b/cil-2021.appspot.com/o/teams%2Fyinka.jpeg?alt=media&token=05e8549a-5354-40d7-a8da-f2b1844a405c"
                },
                {
                    author:"Adeyika Moni",
                    designation:"Ceo CrazyScript",
                    comment:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
                    photo:"https://firebasestorage.googleapis.com/v0/b/cil-2021.appspot.com/o/teams%2Fyinka.jpeg?alt=media&token=05e8549a-5354-40d7-a8da-f2b1844a405c"
                },
                {
                    author:"Adeyika Moni",
                    designation:"Ceo CrazyScript",
                    comment:"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
                    photo:"https://firebasestorage.googleapis.com/v0/b/cil-2021.appspot.com/o/teams%2Fyinka.jpeg?alt=media&token=05e8549a-5354-40d7-a8da-f2b1844a405c"
                }
            ]
        })
    }
</script>

<style scoped>

</style>
