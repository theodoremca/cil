

const businessInsights = [
    {
        path: '/blog',
        component:()=>import('.././../Pages/BusinessInsights/Blog/Blog'),
        name:'blog'
    },
    {
        path: '/add-blog',
        component:()=>import('../../Pages/BusinessInsights/Blog/Admin/AddBlog'),
        name:'add-blog',
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/blog-update/:id',
        component:()=>import('../../Pages/BusinessInsights/Blog/Admin/UpdateBlog'),
        name:'update-blog',
        props:true,
        // meta: {
        //     requiresAuth: true
        // }
    },
    {
        path: '/blog-details/:id',
        component:()=>import('../../Pages/BusinessInsights/Blog/BlogDetails/BlogDetails'),
        props:true,
        name:'blog-details'
    },
    {
        path: '/article',
        component:()=>import('.././../Pages/BusinessInsights/Article/Article'),
        name:'article'
    },
    {
        path: '/article-details',
        component:()=>import('.././../Pages/BusinessInsights/Article/ArticleDetails/ArticleDetails'),
        name:'article-details'
    },
    {
        path: '/case-study',
        component:()=>import('.././../Pages/BusinessInsights/CaseStudy'),
        name:'case-study'
    },

]

export default businessInsights;
