<template>
    <header  >
        <div class="header-top" >
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6">
                        <form v-if="pageLoaded">
                            <!-- v-on:input="searchBlog" -->
                            <div class="search-input-div" >
                                <label class="line-bottom" ><input type="text" v-on:input="searchBlog"   v-model="searchFilterModel"  class="def-input" placeholder="search" />  </label>
                                <button class="search-button" type="button"> <i class="fa fa-search"></i> </button>
                                <div  class="searc-filter" v-if="loading" >loading . . .</div>
                                <div class="searc-filter" v-if="showFilter" >
                                    <p v-if="this.inputFilter.length == 0"> no searc result ... </p>
                                    <div class="filter-block-ul" >
                                        <div class="filter-block-li" v-for="(blogFilters, index) in inputFilter" v-bind:key="index">
                                            <a href="#"  >
                                                <div class="filter-li-img">
                                                    <img :src="blogFilters.imageUrl" :alt="blogFilters.header" :title="blogFilters.header" />
                                                </div>
                                                <div class="filter-li-text">
                                                    <h3> <span>  {{blogFilters.header}} </span> </h3>
                                                    <p>
                                                        {{blogFilters.body}}
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6 text-right">
                        <span v-if="userIsAuthenticated" class="page-header-small">  Welcome  {{profile.registeredMeetups[0]}} </span>
                        <router-link v-if="!userIsAuthenticated"  class="login-register" to="/login-register"> <i class="fa fa-user-o"></i> login </router-link> 
                        <router-link v-if="!userIsAuthenticated"  class="login-register" to="/login-register"> <i class="fa fa-edit"></i> register </router-link> 
                        <button v-if="userIsAuthenticated" type="button" id="exitButton" class="login-register" href="#" v-on:click="logout" > <i class="fa fa-user-o"></i> log out </button> 
                    </div>
                </div>
            </div>
        </div>
        <div class="header-menu">
            <div class="container">
                <div class="flex flex-spacing">
                    <div class="logo">
                        <router-link to="/"  class="logo">
                            <img src="/assets/image/logo/logo.png" alt="your logo" class="logo-img" />
                        </router-link>
                    </div>
                    <button type="button" ref="mobref"  v-on:click="mobMenu" class="mob-menu">
                        <i></i>
                        <i></i>
                        <i></i>
                    </button>
                    <div class="mob-menus">
                         <ul class="mob-menu-list">
                            <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/"> Home </router-link> </li>
                            <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/blog"> Blog </router-link> </li>
                            <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/portfolio"> portfolio </router-link> </li>
                            <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/worklist"> worklist </router-link> </li>
                            <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/gallery"> Gallery </router-link> </li>
                             <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/admin"> admin </router-link> </li>
                            <!-- <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/addElement"> add blog </router-link> </li>
                            <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/video"> Video  </router-link> </li> -->
                        </ul>
                    </div>
                    <div class="menus">
                        <ul class="menu">
                            <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/"> Home </router-link> </li>
                            <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/blog"> Blog </router-link> </li>
                            <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/portfolio"> portfolio </router-link> </li>
                            <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/worklist"> worklist </router-link> </li>
                            <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/gallery"> Gallery </router-link> </li>
                            <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/admin"> admin </router-link> </li>
                             <!--<li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/addElement"> add blog </router-link> </li> -->
                            <li> <router-link v-on:click.native="pageUp" active="router-link-exact-active" to="/video"> Video  </router-link> </li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import firebase from 'firebase';
    export default {
        data () {
            return {
                showFilter : false,
                searchFilterModel : "",
                profiles : [],
                pageLoaded:false,
                loading:false
            }
        },
        methods : {
            mobMenu: function(e){
               this.$refs.mobref.classList.toggle('active');

               if( this.$refs.mobref.classList.contains('active')) {
                    document.querySelector(".mob-menus").style.cssText = "left:0%";
                    document.querySelector("header").style.cssText = "height:100%"
               }else {
                   document.querySelector(".mob-menus").style.cssText = "";
                   document.querySelector("header").style.cssText = " "
               }
            },
            searchBlog: function(e){
                this.loading = true
                if(e.target.value == "") {
                    this.showFilter = false;
                    this.loading = false
                }
                 
                setTimeout(() => {
                    if(e.target.value !== "") {
                        this.showFilter = true;
                        this.loading = false
                    }
                }, 2000)
                
              
            },

            pageUp: function(){
                window.scrollTo(0,0);
            },

            logout: function(){
               this.$store.dispatch('logout')
            }
        },

        computed: {
            inputFilter: function(){
               
                return  this.$store.getters.bloglists.filter((blog) => {
                    return blog.header.match(this.searchFilterModel)
                })
               
            },
            userIsAuthenticated () {
                return this.$store.getters.user !== null && this.$store.getters.user !== undefined ;
            },
            profile () {
                return this.$store.getters.user
            }

        },
        mounted () {
            document.querySelector("header").nextElementSibling.addEventListener("click", function(){
                  document.querySelector(".mob-menus").style.cssText = "";
                document.querySelector(".mob-menu").classList.remove("active");
               
            });
            window.document.body.onscroll = function(e) {
               if(window.scrollY > 130) {
                   document.querySelector("header").classList = " scale0  ";
               }
               if(window.scrollY > 200) {
                    document.querySelector("header").classList = " header-fixed ";
               }
               if(window.scrollY < 130) {
                    document.querySelector("header").classList = "  ";
               }
            };   

        
              
       
              
        },
        // created () {
        //     return this.$store.dispatch('sendFilter')
        // },
        beforeMount () {
            this.$store.dispatch('sendFilter').then(() => {
                this.pageLoaded = true;
            }, 3000)

              var t;
                window.onload = resetTimer;
                window.onmousemove = resetTimer;
                window.onmousedown = resetTimer; // catches touchscreen presses
                window.onclick = resetTimer;     // catches touchpad clicks
                window.onscroll = resetTimer;    // catches scrolling with arrow keys
                window.onkeypress = resetTimer;

                function logout() {
                   document.getElementById('exitButton').click();
                
                  window.location.pathname = '/login-register'
                }

                function resetTimer() {
                    clearTimeout(t);
                    t = setTimeout(logout, (1000 * 3600) );  // time is in milliseconds
                }
        }
    }
</script>
