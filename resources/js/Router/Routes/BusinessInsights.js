

const businessInsights = [
    {
        path: 'blog',
        component:()=>import('../Pages/BusinessInsights/Blog/Blog'),
        name:'blog'
    },
    {
        path: 'blog-detail',
        component:()=>import('../Pages/BusinessInsights/Blog/BlogDetails/BlogDetails'),
        name:'blog-Detail'
    },
    {
        path: 'article',
        component:()=>import('../Pages/BusinessInsights/Article/Article'),
        name:'article'
    },
    {
        path: 'article-details',
        component:()=>import('../Pages/BusinessInsights/Article/ArticleDetails/ArticleDetails'),
        name:'article-details'
    },
    {
        path: 'case-study',
        component:()=>import('../Pages/BusinessInsights/CaseStudy'),
        name:'case-study'
    },

]

export default businessInsights;
