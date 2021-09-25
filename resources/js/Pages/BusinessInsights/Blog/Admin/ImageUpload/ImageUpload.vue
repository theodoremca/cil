<template>
  <div class="Image">
    <a class="btn" @click="toggleShow">set avatar</a>
    <my-upload
      field="img"
      @crop-success="cropSuccess"
      v-model="show"
      :width="1200"
      :height="670"
      :lang-type="'en'"
      img-format="png"
      :no-circle="true"
    ></my-upload>
    <img :src="imgDataUrl" />
  </div>
</template>

<script>
import myUpload from "vue-image-crop-upload/upload-2.vue";
export default {
  name: "ImageUpload",
  data() {
    return {
      show: false,
      headers: {
        smail: "*_~",
      },
      imgDataUrl: "", // the datebase64 url of created image
    };
  },
  components: {
    "my-upload": myUpload,
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------");
      this.imgDataUrl = imgDataUrl;
      console.log(this.imgDataUrl);
      this.$emit("get-image-string", this.imgDataUrl);
    },
  },
};
</script>
