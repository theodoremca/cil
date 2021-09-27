<template>
    <div class="file-upload">
        <i class="fa fa-arrow-up"></i>
    </div>
</template>
<script>
    export default {
        name: 'add-image'
    }
</script>
<style scoped lang="scss">
    .file-upload{

        height:50px;
        width:200px;
        position:relative;

        display:flex;
        justify-content:center;
        align-items: center;

        border:4px solid #032e42;
        overflow:hidden;
        background-image: linear-gradient(to bottom, #d83030 50%, #032e42 50%);
        background-size: 100% 200%;
        transition: all 1s;
        color: #032e42;
        font-size:100px;

        input[type='file']{

            height:50px;
            width:200px;
            position:absolute;
            top:0;
            left:0;
            opacity:0;
            cursor:pointer;

        }

        &:hover{

            background-position: 0 -100%;

            color:#d83030;

        }


    }
</style>
