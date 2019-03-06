<template>
    <div class="page-main-content" >
        <Pagecover />
        <section class="page-single">
            <div class="container">
                <div class="row">        
                    <div class="col-md-9" >
                        <div v-if="!isPageLoaded" class="pure-loading" ></div>
                        <div v-if="isPageLoaded">
                            <div class="blog-single-image">
                                <img :src="blogSingle.imageUrl" :alt="blogSingle.header" :title="blogSingle.header" />
                            </div>
                            <div class="blog-single-text">
                                <h3>  <span> {{blogSingle.header}} </span> </h3>
                                <p>
                                {{blogSingle.body}}
                                </p>
                            </div>
                            <div class="blog-single-tags">
                                <span> Tags :  </span> 
                                <a href="#"> amber </a>
                                <a href="#"> dance </a>
                                <a href="#"> fashion </a>
                                <a href="#"> onmouseover </a>
                                <a href="#"> amber </a>
                            </div>
                            <social-sharing :url="'https://demo.com/'" inline-template>
                                <div class="sharing">
                                    <span> Sharing: </span>
                                    <network network="facebook"><i class="fa  fa-facebook"></i> </network>
                                    <network network="googleplus"> <i class="fa fa-google-plus"></i> </network>
                                    <network network="linkedin"><i class="fa  fa-linkedin"></i> </network>
                                    <network network="pinterest"> <i class="fa  fa-pinterest"></i> </network>
                                    <network network="reddit"> <i class="fa fa-reddit"></i> </network>
                                    <network network="twitter"><i class="fa  fa-twitter"></i> </network>
                                    <network network="vk"><i class="fa fa-vk"></i> </network>
                                    <network network="weibo"> <i class="fa fa-weibo"></i> </network>
                                    <network network="whatsapp"><i class="fa  fa-whatsapp"></i> </network>
                                </div>
                            </social-sharing>
                        </div>
                    </div>
                    <div class="col-md-3" >
                        <div class="blog-single-category">
                            <h3 class="right-block-name" > <span> Categories </span> </h3>
                            <ul>
                                <li> <a href="#"> Creative portfolio </a> </li>
                                <li> <a href="#"> Onmouseover category </a> </li>
                                <li> <a href="#"> Amber golden </a> </li>
                                <li> <a href="#"> Amsterdam fight gear </a> </li>
                                <li> <a href="#"> Creamy cucumber </a> </li>
                            </ul>
                        </div>
                        <div class="recent-comment">
                            <h3 class="right-block-name" > <span> Recent comments </span> </h3>
                            <ul>
                                <li> 
                                    <span> Igor Ligay on </span>
                                    <p>
                                        The hope of a young naval lieutenant bravely patrolling
                                    </p>
                                 </li>
                                 <li> 
                                    <span> Farhad Yusupov on </span>
                                    <p>
                                        Politicians routinely exploited fears of crime
                                    </p>
                                 </li>
                                 <li> 
                                    <span> John Doe on </span>
                                    <p>
                                        There was even a time when the Christian Coalition determined that its number one 
                                    </p>
                                 </li>
                            </ul>
                        </div>
                        <div class="latest-work-block">
                            <h3 class="right-block-name" > <span> Latest works </span> </h3>
                            <div class="latest-work-slider">
                                <swiper :options="swiperOption">
                                        <swiper-slide> <img src="/assets/image/content/screen1.jpg" alt="blog slider" title="sslider" /> </swiper-slide>
                                        <swiper-slide> <img src="/assets/image/content/screen2.jpg" alt="blog slider" title="sslider" />  </swiper-slide>
                                        <swiper-slide> <img src="/assets/image/content/screen3.jpg" alt="blog slider" title="sslider" />  </swiper-slide>
                                    <div class="blog-latest-wlider-prev" slot="button-prev"> <i class="fa fa-angle-left"></i> </div>
                                    <div class="blog-latest-wlider-next" slot="button-next"> <i class="fa fa-angle-right"></i> </div>
                                </swiper>
                            </div>
                        </div>
                        <div class="blog-single-tag">
                            <h3 class="right-block-name" > <span> Tag cloud </span> </h3>
                           <div class="flex">
                                <a href="#"> bad boy </a> <a href="#"> winter </a>  <a href="#"> is coming </a>
                                <a href="#"> south </a> <a href="#"> mouseover </a> <a href="#"> asia </a>
                                <a href="#"> surfing </a> <a href="#"> iceland </a> <a href="#"> she </a>
                                <a href="#"> china </a>  <a href="#"> daytona </a>  <a href="#"> element </a>
                           </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </section>
        <div class="blog-single-add-form">
            <div class="container">
                <form class="add-form" v-on:submit.prevent >
                    <h3 class="form-header"> <span> Add comment </span> </h3>
                    <label class="for-input">
                        <span> Name </span>
                        <input type="text" id="name" v-model="name" v-on:input="formValide" class="add-form-input def-input" placeholder="ex: scott" />
                    </label>
                    <label class="for-input">
                        <span> Email </span>
                        <input type="email" id="email" v-model="email" v-on:input="formValide" class="add-form-input def-input" placeholder="ex: info@gmail.com" />
                    </label>
                    <label class="for-input">
                        <span> Website (optional) </span>
                        <input type="text" id="web" v-model="web" v-on:input="formValide" class="add-form-input def-input" placeholder="ex: www.default.com" />
                    </label>

                    <label class="for-textarea">
                        <span> Message </span>
                        <textarea  v-model="textarea" id="textarea" v-on:input="formValide" class="add-form-textarea def-input" placeholder="ex: lorem ipsum dolor"> </textarea>
                    </label>

                    <div class="text-right"><button class="blog-submit" v-on:click.prevent="sendForm" type="submit" > Add comment </button></div>
                </form>

                <div class="add-blog-list">
                    <h3 class="form-header" v-if="commentCount > 0" > <span> {{commentCount}} Comments </span> </h3>
                    <div class="add-block-one" v-if="commentCount > 0"  v-for="(comment, index) in comments" :key="index">
                        <button type="button" class="pull-right"> reply </button>
                        <h5> <span> {{comment.commentName}}  /  {{comment.commentEmail}}  / {{comment.commentWebsite}} </span> </h5>
                        <span>  {{comment.commentTime}}  </span>
                        <p>
                           {{comment.commentContent}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <Bloglist  startShow="0" endShow="3" /> -->
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Bloglist from '../component/bloglist.vue';
import Pagecover from '../component/pagecover.vue';
import { mapGetters } from 'vuex';
import { mapState } from 'vuex';
    export default {
        data () {
            return {
                  swiperOption: {
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    navigation: {
                        nextEl: '.blog-latest-wlider-next',
                        prevEl: '.blog-latest-wlider-prev'
                    }
                },
                comments:[],
                commentCount : 0,
                blogId:  null,
                name:null,
                email:null,
                web:null,
                textarea:null,
                demosa:[],
                isPageLoaded:false
            }
        },
        methods: {
            formValide: function(){
             if(this.name && 0 !== this.name.length) {
                  document.querySelector('#name').classList.remove('input-error');
                }else if (this.email && 0 !== this.email.length) {
                    document.querySelector('#email').classList.remove('input-error');
                }else if (this.web && 0 !== this.web.length) {
                    document.querySelector('#web').classList.remove('input-error');
                }else if (this.textarea && 0 !== this.textarea.length) {
                    document.querySelector('#textarea').classList.remove('input-error');
                }
           },
           sendForm: function(){
                function filterInput(inputname) {
                     document.querySelector('#' + inputname).classList.add('input-error');
                }

               let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if(!this.name || 0 === this.name.length) {
                   filterInput('name');
                }else if (!this.email || 0 === this.email.length) {
                    filterInput('email');
                }else if(!filter.test(this.email) ){
                      filterInput('email');
                } else if (!this.web || 0 === this.web.length) {
                    filterInput('web');
                }else if (!this.textarea || 0 === this.textarea.length) {
                    filterInput('textarea');
                }else {
                    let comTimes= new Date();
                   this.commentTime  =  comTimes.getFullYear() + " / "  + parseInt(comTimes.getMonth() + 1)  + " / " + comTimes.getDate();
                      this.comments.push({
                          commentName : this.name,
                          commentEmail :this.email,
                          commentWebsite :this.web,
                          commentTime:this.commentTime,
                          commentContent:this.textarea
                      });
                   this.commentCount ++;
                }
           }
        },
        components: {
            swiper,
            swiperSlide,
            Bloglist,
            Pagecover
        },
      
         beforeCreate ()  {
             return this.$store.dispatch('blogSingle', this.$route.params.id);
        },
        beforeMount () {
            this.$store.dispatch('blogSingle', this.$route.params.id).then(() => {
                setTimeout(() => {
                    this.isPageLoaded = true
                }, 3000)
            })
        },
        computed: {
            blogSingle: function () {
              return this.$store.getters.bloglist;
            }
        }
    }
</script>

