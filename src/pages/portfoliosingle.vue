<template>
    <div class="page-main-content">
        <section class="page-cover-section">
            <div class="page-cover-overlay"></div>
            <div class="container">
                <div class="flex flex-down">
                <div class="m-bottom-50">
                        <div class="page-cover-name">
                        <h2> <span>  Blog grid view </span>  </h2>
                        </div>
                        <div class="flex flex-around">
                            <div class="page-cover-times">
                                <ul>
                                    <li>
                                        <i class="fa fa-user-o"></i>
                                        <span> by Alex Poushkin </span>
                                    </li>
                                    <li>
                                        <i class="fa fa-clock-o"></i>
                                        <span> September 31 </span>
                                    </li>
                                    <li>
                                        <i class="fa fa-apos"></i>
                                        <span> September 31 </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="brand-crumb">
                                <ul>
                                    <li>
                                        Home
                                    </li>
                                    <li>
                                        Blog
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </section>
        <section class="page-single">
            <div class="container">
                <div class="row">
                    <div v-if="!pageLoaded" class="pure-loading" ></div>
                    <div class="col-md-9" v-if="pageLoaded">
                        <div class="portsingle-slider">
                            <!-- <swiper :options="swiperOption">
                                <swiper-slide v-for="(sliderImages, index) in ourTeams.ourImageArray"  :key="index"> <img :src="'/assets/image/content/' + sliderImages" /> </swiper-slide>
                               
                                <div class="portsingle-prev" slot="button-prev"> <i class="fa fa-angle-left"></i> </div>
                                <div class="portsingle-next" slot="button-next"> <i class="fa fa-angle-right"></i> </div>
                            </swiper> -->
                            <img   :src="ourTeam.ourImage" :alt="ourTeam.ourImage"  :title="ourTeam.ourImage" />
                        </div>
                        <social-sharing url="https://vuejs.org/" inline-template>
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
                    <div class="col-md-3" v-if="pageLoaded">
                        <div class="fav-count">
                            <i class="fa fa-heart"></i> <span> 45 </span>
                        </div>
                        <div class="port-about-info" >
                            <h3> <span> {{ourTeam.ourName}} </span> </h3>
                            <h3> <span> {{ourTeam.ourJob}} </span> </h3>
                            <p>
                                {{ourTeam.ourContent}}
                            </p>
                        </div>

                        <div class="port-about-list">
                            <span> Work description </span>
                            <ul>
                                <li  v-for="(description, index) in ourTeam.ourDescription" :key="index"> {{description}}  </li>
                            </ul>
                        </div>
                    </div>
                    <div class="clear">

                    </div>
                </div> 
            </div>
        </section>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        data () {
            return {
                swiperOption: {
                    navigation: {
                        nextEl: '.portsingle-next',
                        prevEl: '.portsingle-prev'
                    }
                },
                pageLoaded : false

            }
        },
        methods: {
          
        },
        computed: {
            ourTeam: function(){
                return  this.$store.state.ourTeamSingle;
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        created () {
            return this.$store.dispatch('getOurSingleArray', this.$route.params.id);
        },
        beforeMount () {
            this.$store.dispatch('getOurSingleArray', this.$route.params.id).then(() => {
                setTimeout(()=> {
                    this.pageLoaded = true;
                }, 3000)
            })
        }
    }
</script>


