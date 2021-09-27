<template>
  <div class="Image">

    <a class="btn" @click="toggleShow"> <add-image />
        {{this.imageToUpdate ? 'Change image': 'Add Image'}}</a>
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
    import AddImage from "./AddImage";

    export default {
  name: "ImageUpload",
        created() {
      if( this.imageToUpdate){
          this.imgDataUrl = this.imageToUpdate;
      }
        },
        data() {
    return {
      show: false,
      headers: {
        smail: "*_~",
      },
      imgDataUrl: " ", // the datebase64 url of created image
    };
  },
        props:['imageToUpdate'],
  components: {
      AddImage,
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
