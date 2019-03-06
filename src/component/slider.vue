<template>
   <section class="slider-section">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(mainSLiders, index) in mainSLider" v-bind:key="index">
                <div class="swiper-overlay"></div>
                <div class="swiper-text">
                    <div class="text-center" >
                        <h2> {{mainSLiders.sliderHeader}} </h2>
                        <h3> {{mainSLiders.sliderMiniHeader}} </h3>
                        <a :href="mainSLiders.sliderLink" > about me </a>
                    </div>
                </div>
                <div class="swiper-image">
                    <img :src="mainSLiders.imageUrl" :alt="mainSLiders.sliderHeader" :title="mainSLiders.sliderHeader" />
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
               swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'progressbar'
                    },
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        computed: {
            mainSLider : function(){
                return this.$store.state.mainslider
            }
        },
        created () {
            return this.$store.dispatch('getSlider');
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

