<template>
    <div class="app">
        <NavBar></NavBar>
       <add-blog></add-blog>
    </div>

</template>

<script>
    import AddBlog from "./Pages/BusinessInsights/Blog/AddBlog";
    export default {
        name: "App",
        components:{
            AddBlog,
            NavBar:()=>import('./components/NavBar.vue')
        }
    }
</script>

<style scoped>

</style>
