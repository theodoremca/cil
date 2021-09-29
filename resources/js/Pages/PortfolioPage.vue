
<template>
    <div class="main-content">
        <!-- Breadcrumbs Section Start -->
        <div class="rs-breadcrumbs bg-7">
            <div class="container">
                <div class="content-part text-center pt-160 pb-160">
                    <h1 class="breadcrumbs-title white-color mb-0">Portfolio Standard</h1>
                </div>
            </div>
        </div>
        <!-- Breadcrumbs Section End -->

        <!-- Portfolio Section Start -->
        <div id="rs-portfolio" class="rs-portfolio single pt-100 md-pt-80 pb-100 lg-pb-92 md-pb-72">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 pr-45 md-pr-15">
                        <img class="mb-25" src="assets/images/portfolio/single/1.jpg" alt="">

                        <p class="desc mb-29">European languages are members of the same family. The languages only differ in their grammar, their pronunciation and their most common words. pronunciation and more common words. If several languages coalesce, the grammar of the resulting.</p>

                        <p class="desc mb-29">Languages realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>

                        <p class="desc mb-0">Languages realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting. In compiling the list, we gave additional weight to usage outside Yale.</p>
                    </div>
                    <div class="col-lg-4 md-mb-50 md-order-first">
                        <div class="project-sidebar">
                            <img class="hidden-md" src="assets/images/portfolio/7.jpg" alt="">
                            <div class="sb-project-detail mt-50 md-mt-0">
                                <h4 class="title">Project Details</h4>
                                <ul>
                                    <li><span>Category:</span> Marketing</li>
                                    <li><span>Client:</span> Kers</li>
                                    <li><span>Location:</span> Usa</li>
                                    <li><span>Completed Date:</span> 2020</li>
                                    <li><span>Project Value:</span> 50k</li>
                                    <li><span>Mananer:</span> Rafian Sagar</li>
                                    <li><span>Designer:</span> Istiak</li>
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
      console.log()
  },
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

