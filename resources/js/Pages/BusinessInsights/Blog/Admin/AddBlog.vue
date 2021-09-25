
<template>
  <div class="main-content">
    <!-- Blog Section Start -->
    <div class="rs-blog inner single pt-100 pb-100 md-pt-80 md-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-part">
              <div class="bs-contact-form pt-45">
                <h3 class="title">Add A Post</h3>
                <div id="form-messages"></div>
                <form @submit.prevent="createPost">
                  <div class="row">
                    <div class="col-lg-12">
                      <ImageUpload
                        @get-image-string="setImageValue"
                      ></ImageUpload>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-field">
                        <label>Title</label>
                        <input
                          v-model="title"
                          type="text"

                          name="email"

                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-field mb-30">
                        <label>Content</label>
                        <textarea
                          v-model="content"
                          rows="7"
                          id="message"
                          name="message"
                        ></textarea>
                      </div>
                      <div class="form-button mt-30">
                        <button class="readon radius">Post</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="col-lg-4 md-mb-50 pl-35 lg-pl-15 md-order-first">
            <div id="sticky-sidebar" class="blog-sidebar">
              <div class="sidebar-search sidebar-grid shadow mb-50">
                <form class="search-bar">
                  <input type="text" placeholder="Search..." />
                  <span>
                    <button type="submit">
                      <i class="flaticon-search"></i>
                    </button>
                  </span>
                </form>
              </div>

              <div class="sidebar-popular-post sidebar-grid shadow mb-50">
                <div class="sidebar-title">
                  <h3 class="title mb-20">Recent Post</h3>
                </div>
                <div class="single-post mb-20">
                  <div class="post-image">
                    <a href="blog-single.html"
                      ><img
                        src="assets/images/blog/small/1.jpg"
                        alt="post image"
                    /></a>
                  </div>
                  <div class="post-desc">
                    <div class="post-title">
                      <h5 class="margin-0">
                        <a href="blog-single.html"
                          >Covid-19 threatens the next generation of smartphones
                        </a>
                      </h5>
                    </div>
                    <ul>
                      <li><i class="fa fa-calendar"></i> 28 June, 2019</li>
                    </ul>
                  </div>
                </div>
                <div class="single-post">
                  <div class="post-image">
                    <a href="blog-single.html"
                      ><img
                        src="assets/images/blog/small/5.jpg"
                        alt="post image"
                    /></a>
                  </div>
                  <div class="post-desc">
                    <div class="post-title">
                      <h5 class="margin-0">
                        <a href="blog-single.html"
                          >Covid-19 threatens the next generation of smartphones
                        </a>
                      </h5>
                    </div>
                    <ul>
                      <li><i class="fa fa-calendar"></i> 28 June, 2019</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="sidebar-categories sidebar-grid shadow">
                <div class="sidebar-title">
                  <h3 class="title mb-20">Categories</h3>
                </div>
                <ul>
                  <li><a href="#">Consulting</a></li>
                  <li><a href="#">Creative</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">Finance</a></li>
                  <li><a href="#">Management</a></li>
                  <li><a href="#">Strategy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-end"></div>
      </div>
    </div>
    <!-- Blog Section End -->
  </div>
</template>

<script>
import ImageUpload from "./ImageUpload/ImageUpload";

import {blogPath} from "../../../../bucketPaths";
import {uploadFile} from "../../../../storage";




export default {
  components: { ImageUpload, Image },
  name: "AddBlog",
  created() {},
  data() {
    return {
      imgDataString: "",
      title: "",
      content: "",
      message: "",
      uploadValue: "",
    };
  },
  props: {},
  methods: {
    setImageValue(data) {
      this.imgDatString = data;
    },
    async createPost() {
      const that = this;
      const getResponse = async (url)  => {
          if (!url.status){
              return ;
          }
        await  axios
              .post("/api/blog", {
                  image_data:url.message,
                  title:this.title,
                  content:this.content
              })
              .then(function (response) {
                  that.message = response.data;
              })
              .catch(function (error) {
                  that.message = error;
              })
              .finally(function (response) {
                  console.log(that.message)
              });
      };
        function dataURLtoFile(dataurl, filename) {
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);

            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type:mime});
        }
        const file = dataURLtoFile(that.imgDatString,'file.jpg');
        await uploadFile(that.title, blogPath, file , getResponse);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

