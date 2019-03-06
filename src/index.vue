<template>
    <div class="full-width">
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>

import Header from './component/header.vue';
import Home from './pages/home.vue';
import Blog from './pages/blog.vue';
import Portfolio from './pages/portfolio.vue';
import Gallery from './pages/gallery.vue';
import Worklist from './pages/worklist.vue';
import Portfoliosingle from './pages/portfoliosingle.vue';
import Blogsingle from './pages/blogsingle.vue';
import Loginregister from './pages/login-register.vue';
import Footer from './component/footer.vue';

    export default {
        data() {
            return {
                //some data
            }
        }, 

        methods: {
            //some methods
        },

        mounted () {
            
        },
        
        components: {
            Header,
            Home,
            Blog,
            Portfolio,
            Gallery,
            Worklist,
            Portfoliosingle,
            Blogsingle,
            Loginregister,
            Footer
        }
    }
</script>