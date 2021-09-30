<template>
    <div class="row gutter-20">
        <div v-for="(service , idx) in allWeDo" :key="idx" class="col-lg-4 col-md-6 mb-30">
            <div class="service-wrap">
                <div class="image-part">
                    <img :src="service.image" alt="">
                </div>
                <div class="content-part text-center">
                    <h3 class="title"><a :href="'/what-we-do/we-do/'+service.slug">{{service.title}}</a></h3>
                    <div class="desc">{{ service.title.length > 27 ? service.body.slice(0,100) :  service.body.slice(0,150)}} .....</div>

                </div>
                <div class="head-btn text-center mt-30">
                    <a style="    background: #d83030;
                        padding: 13px 28px;
    color: #ffffff;
    border-radius: 30px" :href="'/what-we-do/we-do/'+service.slug">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import allWeDo from "../../../db/allWeDo.json"
    export default {
        name: "WhatWeDo",
        data:()=>({
            allWeDo:allWeDo
        })


    }
</script>

<style scoped>

</style>
