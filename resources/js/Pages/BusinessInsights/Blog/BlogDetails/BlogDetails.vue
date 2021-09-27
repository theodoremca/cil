<template>
    <div class="main-content">
        <!-- Breadcrumbs Section Start -->
        <div class="rs-breadcrumbs bg-9">
            <div class="container">
                <div class="content-part text-center">
                    <h1 class="breadcrumbs-title white-color mb-0">Blog Single</h1>
                </div>
            </div>
        </div>
        <!-- Breadcrumbs Section End -->

        <!-- Blog Section Start -->
        <div  class="rs-blog inner single pt-100 pb-100 md-pt-80 md-pb-80">
            <div class="container">
                <div class="row">
                    <div v-if="blog" class="col-lg-8">
                        <div class="blog-part">
                            <div class="blog-img">
                             <img v-if="blog.image" :src="blog.image" alt="">
                            </div>
                            <div class="article-content shadow mb-60">
                                <ul class="blog-meta mb-22">
                                    <li><i class="fa fa-calendar-check-o"></i> {{createdAt}}</li>
                                    <li  @dblclick="$router.push({name: 'update-blog', params: {id: `${id}`}})"><i class="fa fa-user-o"></i>{{ isAdmin ?  'Edit Blog':'Admin'}}</li>
                                    <li v-if="isAdmin" @dblclick="deleteBlog"><i class="fa fa-user-o"></i>Delete Blog</li>

                                </ul>
                                <h2>{{blog.title}}</h2>

                                <p class="desc">
                                    {{blog.content}}
                                </p>
                            </div>
                            <div class="article-nav">
                                <ul>
                                    <li class="next">
                                        <router-link :to="{path:'/blog'}">
                                            <span class="next-link">back  <i class="flaticon-back"></i></span>
                                        </router-link>
                                    </li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>
<!--                            <div class="bs-contact-form pt-45">-->
<!--                                <h3 class="title">Leave a Reply</h3>-->
<!--                                <p>Your email address will not be published. Required fields are marked *</p>-->
<!--                                <div id="form-messages"></div>-->
<!--                                <form id="contact-form" method="post" action="mailer.php">-->
<!--                                    <div class="row">-->
<!--                                        <div class="col-lg-6">-->
<!--                                            <div class="form-field">-->
<!--                                                <label>Name *</label>-->
<!--                                                <input type="text" id="name" name="name" required="">-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="col-lg-6">-->
<!--                                            <div class="form-field">-->
<!--                                                <label>Email *</label>-->
<!--                                                <input type="email" id="email" name="email" required="">-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="col-lg-12">-->
<!--                                            <div class="form-field mb-30">-->
<!--                                                <label>Comment</label>-->
<!--                                                <textarea rows="7" id="message" name="message"></textarea>-->
<!--                                            </div>-->
<!--                                            <div class="form-button mt-30">-->
<!--                                                <button type="submit" class="readon radius">Post Comment</button>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </form>-->
<!--                            </div>-->
                        </div>
                    </div>

<!--                    <div class="col-lg-4 md-mb-50 pl-35 lg-pl-15 md-order-first">-->
<!--                        <div id="sticky-sidebar" class="blog-sidebar">-->
<!--                            <div class="sidebar-search sidebar-grid shadow mb-50">-->
<!--                                <form class="search-bar">-->
<!--                                    <input type="text" placeholder="Search...">-->
<!--                                    <span>-->
<!--                                          <button type="submit"><i class="flaticon-search"></i></button>-->
<!--                                        </span>-->
<!--                                </form>-->
<!--                            </div>-->

<!--                            <div class="sidebar-popular-post sidebar-grid shadow mb-50">-->
<!--                                <div class="sidebar-title">-->
<!--                                    <h3 class="title mb-20">Recent Post</h3>-->
<!--                                </div>-->
<!--                                <div class="single-post mb-20">-->
<!--                                    <div class="post-image">-->
<!--                                        <a href="blog-single.html"><img src="assets/images/blog/small/1.jpg" alt="post image"></a>-->
<!--                                    </div>-->
<!--                                    <div class="post-desc">-->
<!--                                        <div class="post-title">-->
<!--                                            <h5 class="margin-0"><a href="blog-single.html">Covid-19 threatens the next generation of smartphones </a></h5>-->
<!--                                        </div>-->
<!--                                        <ul>-->
<!--                                            <li><i class="fa fa-calendar"></i> 28 June, 2019</li>-->
<!--                                        </ul>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="single-post mb-20">-->
<!--                                    <div class="post-image">-->
<!--                                        <a href="blog-single.html"><img src="assets/images/blog/small/2.jpg" alt="post image"></a>-->
<!--                                    </div>-->
<!--                                    <div class="post-desc">-->
<!--                                        <div class="post-title">-->
<!--                                            <h5 class="margin-0"><a href="blog-single.html">Covid-19 threatens the next generation of smartphones </a></h5>-->
<!--                                        </div>-->
<!--                                        <ul>-->
<!--                                            <li><i class="fa fa-calendar"></i> 28 June, 2019</li>-->
<!--                                        </ul>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="single-post mb-20">-->
<!--                                    <div class="post-image">-->
<!--                                        <a href="blog-single.html"><img src="assets/images/blog/small/3.jpg" alt="post image"></a>-->
<!--                                    </div>-->
<!--                                    <div class="post-desc">-->
<!--                                        <div class="post-title">-->
<!--                                            <h5 class="margin-0"><a href="blog-single.html">Covid-19 threatens the next generation of smartphones </a></h5>-->
<!--                                        </div>-->
<!--                                        <ul>-->
<!--                                            <li><i class="fa fa-calendar"></i> 28 June, 2019</li>-->
<!--                                        </ul>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="single-post mb-20">-->
<!--                                    <div class="post-image">-->
<!--                                        <a href="blog-single.html"><img src="assets/images/blog/small/4.jpg" alt="post image"></a>-->
<!--                                    </div>-->
<!--                                    <div class="post-desc">-->
<!--                                        <div class="post-title">-->
<!--                                            <h5 class="margin-0"><a href="blog-single.html">Covid-19 threatens the next generation of smartphones </a></h5>-->
<!--                                        </div>-->
<!--                                        <ul>-->
<!--                                            <li><i class="fa fa-calendar"></i> 28 June, 2019</li>-->
<!--                                        </ul>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="single-post">-->
<!--                                    <div class="post-image">-->
<!--                                        <a href="blog-single.html"><img src="assets/images/blog/small/5.jpg" alt="post image"></a>-->
<!--                                    </div>-->
<!--                                    <div class="post-desc">-->
<!--                                        <div class="post-title">-->
<!--                                            <h5 class="margin-0"><a href="blog-single.html">Covid-19 threatens the next generation of smartphones </a></h5>-->
<!--                                        </div>-->
<!--                                        <ul>-->
<!--                                            <li><i class="fa fa-calendar"></i> 28 June, 2019</li>-->
<!--                                        </ul>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->

<!--                            <div class="sidebar-categories sidebar-grid shadow">-->
<!--                                <div class="sidebar-title">-->
<!--                                    <h3 class="title mb-20">Categories</h3>-->
<!--                                </div>-->
<!--                                <ul>-->
<!--                                    <li><a href="#">Consulting</a></li>-->
<!--                                    <li><a href="#">Creative</a></li>-->
<!--                                    <li><a href="#">Development</a></li>-->
<!--                                    <li><a href="#">Finance</a></li>-->
<!--                                    <li><a href="#">Management</a></li>-->
<!--                                    <li><a href="#">Strategy</a></li>-->
<!--                                </ul>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                </div>
                <div id="sticky-end"></div>
            </div>
        </div>
        <!-- Blog Section End -->
    </div>
</template>

<script>
    export default {
        name: 'Blogdetails',
        props:['id'],
        data(){
            return {
                loading:false,
                message:false
            }
        },
        mounted() {
            this.$store.commit('setCurrentBlog',parseInt(this.id))
        },
        methods:{
          async deleteBlog() {
              const that = this;
              await axios
                  .delete(`/api/blog/${that.id}`)
                  .then(function (response) {
                      that.message = response.data;
                  })
                  .catch(function (error) {
                      that.message = error;
                  })
                  .finally(function (response) {
                      that.loading = !that.loading;
                      that.$router.push({name: 'blog'});
                  });
          }
        },
        computed:{
            blog () {
                return this.$store.getters.getCurrentBlog;
            },
            isAdmin(){
                return window.auth_user !== null;
            },
            createdAt(){// The 0 there is the key, which sets the date to the epoch
               return  new Date(this.blog.created_at);
            }
        },


    };
</script>
