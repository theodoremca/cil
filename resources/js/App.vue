<template>
    <div class="app">
        <NavBar></NavBar>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "App",
        components:{
            NavBar:()=>import('./components/NavBar.vue')
        }
    }
</script>

<style scoped>

</style>
