<template>
    <div class="blog-wrap shadow mb-70 xs-mb-50">
        <div class="image-part">
            <router-link :to="{ path: '/blog-details/' + blog.id  }"
            ><img v-if="blog.image" :src="blog.image" alt=""
            /></router-link>
        </div>
        <div class="content-part">
            <h3 class="title mb-10">
                <router-link :to="{ path: '/blog-details/' + blog.id  }"
                >
                    {{blog.title}}
                </router-link
                >
            </h3>
            <ul class="blog-meta mb-22">
                <li><i class="fa fa-calendar-check-o"></i> {{createdAt}}</li>
                <li  @dblclick="$router.push('/add-blog')"><i class="fa fa-user-o"></i> {{ isAdmin ? 'add Blog' : 'Admin'}}</li>



                <!--                                    <li><i class="fa fa-book"></i>  <router-link :to="{name:'blog-details'}">Covid-19 threatens the next generation of smartphones</router-link></li>-->
            </ul>
            <p class="desc mb-20">
                {{ blog.content.slice(0,200)}}  ...
            </p>
            <div class="btn-part">
                <router-link :to="{ path: '/blog-details/' + blog.id }"
                >Continue Reading
                </router-link
                >
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'a-blog',
     computed:{
         isAdmin(){
             return window.auth_user !== null;
         },
         createdAt(){// The 0 there is the key, which sets the date to the epoch
             return  new Date(this.blog.created_at);
         }
     },

        props: {
            blog: {}
        }
    }
</script>
