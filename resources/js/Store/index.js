import Vue from  'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const test = () => {
    console.log('Testing');
}

const store = new Vuex.Store({
    state:{
        user: null,
        processing:false,
        isAdmin:false,
        blogs: [
            {
                id: 1,
                image: "https://firebasestorage.googleapis.com/v0/b/cil-2021.appspot.com/o/blog%2Fimages%2Ftheodoreimonigierrrrrre%40gmail.com?alt=media&token=96467baa-2f9b-4dbb-a586-f7a12207072b",
                title: "Leverage agile frameworks",
                content:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
                dateCreated: Date.now(),
            },
            {
                id: 2,
                image: "https://firebasestorage.googleapis.com/v0/b/cil-2021.appspot.com/o/blog%2Fimages%2Ftheodoreimonigierrrrrre%40gmail.com?alt=media&token=96467baa-2f9b-4dbb-a586-f7a12207072b",
                title: "2 agile frameworks",
                content:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
                dateCreated: Date.now(),
            },
            {
                id: 3,
                image: "https://firebasestorage.googleapis.com/v0/b/cil-2021.appspot.com/o/blog%2Fimages%2Ftheodoreimonigierrrrrre%40gmail.com?alt=media&token=96467baa-2f9b-4dbb-a586-f7a12207072b",
                title: " 3agile frameworks",
                content:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
                dateCreated: Date.now(),
            },
        ],
        currentBlog:{}
    },
    mutations:{
        setAuthUser(state, user) {
            state.user = user;
        },
        process(state){
            state.processing = !state.processing;
        },
        updateAuthStatus(state, isAdmin){
          state.isAdmin  = isAdmin;
        },
        setCurrentBlog(state,id){
            state.currentBlog = state.blogs.filter(blog => blog.id === id)[0];
        },
        updateBlogs(state,newBlogs){
            // state.blogs.unshift(...newBlogs)
            state.blogs = newBlogs
        }
    },
    actions:{
            async getBlogs(state) {
                let res;
                await axios
                    .get("/api/blog")
                    .then(function (response) {
                        res = response.data;
                    })
                    .catch(function (error) {
                        res = error;
                    })
                    .finally(function (response) {
                       console.log(res)
                    });
                state.commit('updateBlogs',res)
            }
    },
    getters:{
        getAdminStatus: function (state) { return state.isAdmin; },
        getCurrentBlog: function (state) { return state.currentBlog; },
        getBlogs: function (state) { return state.blogs; },
        getProcessingStatus: function (state) { return state.processing; },
        isLoggedIn: function (state) {  return state.user !== null; }

    }

})

export default store;
