<template>
  <div class="main-content">
    <!-- Breadcrumbs Section Start -->
    <div class="rs-breadcrumbs bg-8">
      <div class="container">
        <div class="content-part text-center pt-160 pb-160">
          <h1 class="breadcrumbs-title white-color mb-0">Blog</h1>
        </div>
      </div>
    </div>
    <!-- Breadcrumbs Section End -->

    <!-- Blog Section  Start -->
    <div   class="rs-blog inner pt-100 pb-100 md-pt-80 md-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
              <a-blog v-for="(blog,idx) in blogs" :key="idx" :blog="blog"/>
          </div>

          <side-bar v-if="false" />
        </div>
        <div id="sticky-end"></div>
      </div>
    </div>
    <!-- Blog Section  End -->
  </div>
</template>

<script>
    import SideBar from "./SideBar";
    import ABlog from "./ABlog";

    export default {
  name: "Blog",
  components: {ABlog, SideBar },
        created() {
      this.$store.dispatch('getBlogs');
        },
        data() {
    return {
    };

  },
        computed:{
      blogs(){
          return this.$store.getters.getBlogs;
      }
        }
};
</script>
