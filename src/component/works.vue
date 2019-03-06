<template>
  <section class="latest-work" >
        <div class="container">
            <div class="flex flex-center">
                <div>
                    <div class="div-header">
                        <h3> Latest works </h3>
                        <p>
                            That we can tuck in our children at night and know that they are fed and clothed and safe from harm. Our trials and triumphs became at once unique and universal.
                        </p>
                    </div>
                </div>
            </div>
            <div class="l-work-pop-overlay" >
                <div class="container flex flex-around">
                    <div class="l-work-compile">
                        <button type="button" v-on:click="exitPop" class="l-work-compile-exit"> <i class="fa fa-times"></i> </button>
                        <div class="l-work-compile-image">
                            <img :src="mainImageUrl" :alt="mainTextHeader" :title="mainTextHeader"/>
                        </div>
                        <div class="l-work-compile-content">
                            <h3>  {{mainTextHeader}} </h3>
                            <p>
                                {{mainTextContent}} 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="l-work-list">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(latestWorks, index) in latestWork" v-bind:key="index">
                        <div class="work-compl">
                            <div class="work-abso-cover">
                                <div>
                                    <button class="work-abso-heart" added="false" type="button" v-on:click="favWork"><i class="fa fa-heart-o"></i> </button>
                                    <button class="work-abso-zoom" type="button" v-on:click="zoomWork" ><i class="fa fa-search-plus"></i> </button>
                                    <button class="work-abso-link" type="button" to="de/21" ><i class="fa fa-link"></i> </button>
                                </div>
                            </div>
                            <div class="work-image">
                                <a href="#"> <img :src="latestWorks.workImage" :title="latestWorks.workImage" :alt="latestWorks.workImage" /> </a>
                            </div>
                            <div class="work-text">
                                <button type="button" class=" pull-right"> <i class="fa fa-heart-o"></i> </button>
                                <p>   {{latestWorks.workHeader}}  </p>
                                <span  class="pull-right ">  {{latestWorks.workCount}}  </span>
                                <span>  {{latestWorks.workContent}}  </span>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="work-prev" slot="button-prev"><i class="fa fa-angle-left"></i> </div>
                    <div class="work-next" slot="button-next"><i class="fa fa-angle-right"></i></div>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
    export default {
        data() {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    breakpoints: {
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        768: {
                            slidesPerView: 2
                        },
                        640: {
                            slidesPerView: 2
                        },
                        500: {
                            slidesPerView: 1,
                            spaceBetween: 0
                        }
                    },
                    navigation: {
                        nextEl: '.work-next',
                        prevEl: '.work-prev'
                    }
                },
                mainImageUrl: null,
                mainTextHeader: null,
                mainTextContent: null
            }
        },
        components: {
            swiper,
            swiperSlide
        },

        methods: {
            favWork: function(e){
                let thiss, favCount, favCountChange, onceTimes, animeFav;
                thiss = e.target.closest('.work-compl').querySelector('.work-text span:first-of-type');
                favCount= parseInt(thiss.innerText);
                animeFav = e.target.closest('.work-compl').querySelector('.work-text button').classList.add('favAnime');
                onceTimes  = e.target.getAttribute("added");
                e.target.setAttribute("added", "true");
                e.target.childNodes[0].className = 'fa fa-heart';
                if(onceTimes !== "true") {
                     favCount = favCount + 1;
                }
                thiss.innerText=favCount;
            },

            exitPop: function(e){
                e.target.closest(".l-work-compile").classList.remove("scale0");
                setTimeout(() => {
                    e.target.closest('.l-work-pop-overlay').classList.remove("opac");
                }, 300);
                document.body.classList.remove('body-overflow');
            },

            zoomWork: function(e){
                let thiss , imageUrl, textHeader, textContent, mainImageUrl,  mainTextHeader , mainTextContent;
                thiss = e.target.closest('.work-abso-cover');
                imageUrl = thiss.nextElementSibling.querySelector('img').getAttribute("src");
                textHeader =thiss.parentNode.querySelector('.work-text p').innerText;
                textContent = thiss.parentNode.querySelector('span:last-of-type').innerText;
                this.mainImageUrl = imageUrl;
                this.mainTextHeader = textHeader;
                this.mainTextContent = textContent;
                document.querySelector(".l-work-pop-overlay").classList.add("opac");
                setTimeout(() => {
                    document.querySelector(".l-work-compile").classList.add("scale0");
                }, 300);
                document.body.classList.add('body-overflow');
            }
        },
        computed: {
            latestWork: function(){
               return this.$store.state.latestWork ;
            }
        },
        created () {
           return this.$store.dispatch('getWorkSend');
        }
    }
</script>
