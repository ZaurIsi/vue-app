import Vue from 'vue'
import App from './index.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Router from 'vue-router';
import * as firebase from 'firebase';
import * as VueGoogleMaps from 'vue2-google-maps';
var SocialSharing = require('vue-social-sharing');
import {store} from './store/index'
import Auth from './store/auth'
import Http from 'vue-resource';
import AsyncComputed from 'vue-async-computed'
Vue.use(Http);
Vue.use(SocialSharing);
Vue.use(Router);
Vue.use(AsyncComputed);




//import pages
import Home from './pages/home.vue';
import Blog from './pages/blog.vue';
import BlogDetail from './pages/blogsingle.vue';
import Loginregister from './pages/login-register.vue';
import Portfolio from './pages/portfolio.vue';
import portSingle from './pages/portsingle.vue';
import PortfolioSingle from './pages/portfoliosingle.vue';
import Worklist from './pages/worklist.vue';
import Gallery from './pages/gallery.vue';
import Admin from './pages/admin.vue';
import Update from './pages/update.vue';
import AddElement from './pages/addElement.vue';
import Video from './pages/video.vue';
import NotFound from './pages/error.vue';

 const router = new Router ({
    routes : [
        {path : "/", component: Home, name: 'home'},
        {path : "/blog", component: Blog, name: 'blog', beforeEnter:Auth},
        {path : "/blog/:id", component: BlogDetail, name: 'Home / blog', props:true, beforeEnter:Auth},
        {path : "/login-register", component: Loginregister, name: 'login & register'},
        {
            path : "/portfolio",
            component: Portfolio,
            name:'portfolio',
            beforeEnter:Auth
        },
        {path : "/port/:id", component: portSingle, name:'Home / single', beforeEnter:Auth},
        {path : "/portfolio/:id", component: PortfolioSingle, name:'Home / portfolio', beforeEnter:Auth},
        {path : "/worklist", component: Worklist, name:'worklist', beforeEnter:Auth},
        {path : "/gallery", component: Gallery , name:'gallery', beforeEnter:Auth},
        {path : "/admin", component: Admin , name:'admin', beforeEnter:Auth},
        {path : "/update/:id", component: Update , name:'update', props:true, beforeEnter:Auth},
        {path : "/addElement", component: AddElement, name:'add element'},
        {path : "/video", component: Video, name:'video', beforeEnter:Auth},
        { path: '/404', component: NotFound , name:'404'},  
        { path: '*', redirect: '/404' }, 
    ],
    mode: "history"
});


Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyADueK_7ucRcIRtanlAhdwpwNp_Jwex-jY',
      libraries: 'places , drawing, visualization'
    }
  });

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  
  created () {
    firebase.initializeApp ({
        apiKey: "AIzaSyA47ZSVc8EOeXAi_OMrpVcXDCW8sX7R-4I",
        authDomain: "asus-bc332.firebaseapp.com",
        databaseURL: "https://asus-bc332.firebaseio.com",
        projectId: "asus-bc332",
        storageBucket: "gs://asus-bc332.appspot.com/"
    });
    this.$store.dispatch('sendGallery')
    firebase.auth().onAuthStateChanged((user) => {

        if(user) {
            this.$store.dispatch('autoSignIn', user);
        }
    });

    

   
  }
})
