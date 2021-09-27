import VueRouter from 'vue-router';
import routes from "./routes";
import store from "../Store";




const router = new VueRouter({
    mode:'history',
    routes
})

router.beforeEach(async (to, from, next) => {
   if(to.path.startsWith('/blog')){
    await store.dispatch('getBlogs');
   }
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const isLoggedIn = window.auth_user != null;
    if (requiresAuth && !isLoggedIn ) {
        // next('/login')
         window.location.href = '/login';
    }else{
        next()
    }

  });


export default router;
