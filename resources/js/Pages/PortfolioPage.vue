
<template>
    <div class="main-content">
        <!-- Breadcrumbs Section Start -->
        <div class="rs-breadcrumbs bg-7">
            <div class="container">
                <div class="content-part text-center pt-160 pb-160">
                    <h1 class="breadcrumbs-title white-color mb-0">{{portfolio.title}}</h1>
                </div>
            </div>
        </div>
        <!-- Breadcrumbs Section End -->

        <!-- Portfolio Section Start -->
        <div id="rs-portfolio" class="rs-portfolio single pt-100 md-pt-80 pb-100 lg-pb-92 md-pb-72">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 pr-45 md-pr-15">
                        <img class="mb-25" :src="portfolio.primary_image" alt="">

                        <p v-for="(p,idx) in portfolio.body.split('<br>') "  :key="idx" class="desc mb-29">
{{p}}
                        </p>
                    </div>
                    <div class="col-lg-4 md-mb-50 md-order-first">
                        <div class="project-sidebar">
                            <img class="hidden-md" :src="portfolio.image" alt="">
                            <div class="sb-project-detail mt-50 md-mt-0">
                                <h4 class="title">Project Details</h4>
                                <ul>
                                    <li><span>Category:</span> {{portfolio.project_details.category}}</li>
                                    <li><span>Client:</span> {{portfolio.project_details.client}}</li>
                                    <li><span>Location:</span> {{portfolio.project_details.location}}</li>
                                    <li><span>Completed Date:</span> {{portfolio.project_details.date}}</li>
                                    <li><span>Project Value:</span> {{portfolio.project_details.value}}</li>
                                    <li><span>Mananer:</span> {{portfolio.project_details.mananer}}</li>
                                    <li><span>Designer:</span> {{portfolio.project_details.designer}}</li>
                                </ul>
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
  name: "PortfolioPage",

  created() {

  },
  data() {
    return {
        portfolios:portfolios
    };
  },
  props: ['slug'],
  methods: {},
    computed:{
      portfolio(){
          return this.portfolios.filter(portfolio => portfolio.slug === this.slug)[0]
      }
    }

};
</script>

<style lang="scss" scoped>
</style>

