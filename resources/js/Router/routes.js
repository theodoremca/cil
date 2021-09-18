const routes = [
    {
        path: '',
        component:()=>import('../Pages/Home.vue'),
        name:'home'
    },
    {
        path: 'blog',
        component:()=>import('../Pages/Blog.vue'),
        name:'home'
    },
    {
        path: 'blog-detail',
        component:()=>import('../Pages/BlogDetails.vue'),
        name:'blog-Detail'
    },

]

export default routes;
