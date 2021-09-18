

const routes = [
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
        name:'case-st'
    },
    {
        path: 'what-we-do',
        component:()=>import('../Pages/WhatWeDo/WhatWeDo'),
        name:'what-we-do'
    },
    {
        path: 'processes',
        component:()=>import('../Pages/WhatWeDo/Processes'),
        name:'processes'
    },
    {
        path: 'who-we-are',
        component:()=>import('../Pages/WhoWeAre/WhoWeAre'),
        name:'who-we-are'
    },
    {
        path: 'team',
        component:()=>import('../Pages/WhoWeAre/Teams'),
        name:'team'
    },
    {
        path: 'contact',
        component:()=>import('../Pages/Contact/Contact'),
        name:'contact'
    },
    {
        path: 'career',
        component:()=>import('../Pages/Careers/Careers/Careers'),
        name:'career'
    },
    {
        path: 'opportunities',
        component:()=>import('../Pages/Careers/Opportunities/Opportunities'),
        name:'opportunities'
    },

]

export default routes;
