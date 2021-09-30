
<template>
  <div class="container custom">
    <div
      class="rs-carousel owl-carousel"
      data-loop="true"
      data-items="3"
      data-margin="30"
      data-autoplay="true"
      data-hoverpause="true"
      data-autoplay-timeout="5000"
      data-smart-speed="800"
      data-dots="false"
      data-nav="false"
      data-nav-speed="false"
      data-center-mode="false"
      data-mobile-device="1"
      data-mobile-device-nav="false"
      data-mobile-device-dots="false"
      data-ipad-device="2"
      data-ipad-device-nav="false"
      data-ipad-device-dots="false"
      data-ipad-device2="1"
      data-ipad-device-nav2="false"
      data-ipad-device-dots2="false"
      data-md-device="3"
      data-lg-device="3"
      data-md-device-nav="false"
      data-md-device-dots="false"
    >
      <div  v-for="(portfolio ,idx) in portfolios" :key="idx" class="project-wrap">
        <div class="img-part">
          <img :src="portfolio.primary_image" alt="" />
        </div>
        <div class="content-part">
          <h4 class="title">
            <a href="portfolio-gallery.html">{{portfolio.title}}</a>
          </h4>
          <span class="category"
            ><a href="portfolio-gallery.html">{{portfolio.project_details.category}}</a></span
          >
        </div>
        <div class="btn-part">
          <a :href="'/what-we-do/portfolio/'+ portfolio.slug"><i class="flaticon-next"></i></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import portfolios from '../../db/portFolio.json'
export default {
  name: "Portfolio",

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

