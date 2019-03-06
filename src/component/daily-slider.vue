<template>
    <section class="daily-slider-section">
        <div class="daily-slider-overlay"></div>
        <div class="container">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(dailySliders, index ) in dailySlider" v-bind:key="index">
                    <div class="col-md-9 col-md-offset-1 daily-slider">
                        <i class="fa-slider-dot"></i>
                        <p>
                            {{dailySliders.miniSliderHeader}}
                        </p>
                        <span> — {{dailySliders.miniSliderMiniHeader}} </span>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination daily-slider-dot" slot="pagination"></div>
            </swiper>
        </div>
    </section>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    }
                }
            }
        },
        computed: {
            dailySlider : function(){
               return this.$store.state.dailySlider 
            }
        },
         created () {
            return this.$store.dispatch('getMiniSlider')
        },
        components: {
            swiperSlide,
            swiper
        }
    }
</script>
