

const businessInsights = [
    {
        path: 'blog',
        component:()=>import('.././../Pages/BusinessInsights/Blog/Blog'),
        name:'blog'
    },
    {
        path: 'add-blog',
        component:()=>import('.././../Pages/BusinessInsights/Blog/AddBlog'),
        name:'add-blog'
    },{
        path: 'blog-details',
        component:()=>import('.././../Pages/BusinessInsights/Blog/AddBlog'),
        name:'blog-details'
    },
    {
        path: 'article',
        component:()=>import('.././../Pages/BusinessInsights/Article/Article'),
        name:'article'
    },
    {
        path: 'article-details',
        component:()=>import('.././../Pages/BusinessInsights/Article/ArticleDetails/ArticleDetails'),
        name:'article-details'
    },
    {
        path: 'case-study',
        component:()=>import('.././../Pages/BusinessInsights/CaseStudy'),
        name:'case-study'
    },

]

export default businessInsights;
