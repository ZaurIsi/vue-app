<template>
    <div class="page-main-content" >
        <Pagecover />
        <section class="page-single">
            <div class="container">
                <div class="row" v-if="pageloaded">
                    <div class="col-md-10 col-md-offset-1">
                        <div class="blog-single-image">
                            <img :src="portfolio.portImage" :alt="portfolio.portHeader" :title="portfolio.portHeader" />
                        </div>
                        <div class="blog-single-text">
                            <h3>  <span> {{portfolio.portHeader }} </span> </h3>
                            <p>
                                {{portfolio.portContent }}
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
                    <div class="clear"></div>
                </div>
            </div>
        </section>
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

                portId:  null,
                pageloaded: false
            }
        },

        methods: {
           
        },

        components: {
            swiper,
            swiperSlide,
            Bloglist,
            Pagecover
        },
         created ()  {
           return this.$store.dispatch('getportfolioSingle', this.$route.params.id)
        },
        computed: {
            portfolio: function () {
                return this.$store.state.portfolioSingle;
            }
        },
        beforeMount () {
            this.$store.dispatch('getportfolioSingle', this.$route.params.id).then(() => {
                setTimeout(() => {
                    this.pageloaded = true
                }, 1500)
            })
        }

       
    }
</script>

