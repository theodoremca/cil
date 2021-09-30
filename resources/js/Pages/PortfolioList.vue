
<template>
    <div class="main-content">
        <!-- Breadcrumbs Section Start -->
        <div class="rs-breadcrumbs bg-6">
            <div class="container">
                <div class="content-part text-center pt-160 pb-160">
                    <h1 class="breadcrumbs-title white-color mb-0"> Our Portfolios </h1>
                </div>
            </div>
        </div>
        <!-- Breadcrumbs Section End -->

        <!-- Portfolio Section Start -->
        <div class="rs-portfolio style3 pt-100 pb-70 md-pt-80 md-pb-50">
            <div class="container">
                <div class="row">
                    <div v-for="(portfolio ,idx) in portfolios" :key="idx" class="col-lg-4 col-md-6 mb-30">
                        <div class="portfolio-item">
                            <div class="image-part">
                                <img :src="portfolio.image" alt="">
                            </div>
                            <div class="content-part">
                                <div class="middle">
                                    <h4 class="title"><a :href="'/what-we-do/portfolio/'+portfolio.slug">{{portfolio.title}}</a></h4>
                                    <span class="categories"><a :href="'/what-we-do/portfolio/'+portfolio.slug" >{{portfolio.project_details.category}}</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio Section End -->
    </div>
</template>

<script>
    import portfolios from '../../db/portFolio.json'
    export default {
        name: "PortfolioList",

        created() {},
        data() {
            return {
                portfolios:portfolios
            };
        },
        props: {},
        methods: {},
    };
</script>

<style lang="scss" scoped>
</style>

