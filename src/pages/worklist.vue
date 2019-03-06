<template>
    <div class="page-main-content" >
        <Pagecover />
        <section class="latest-work bg-white" >
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
            <div class="container">
                <div class="gallery-p text-left">
                    <p>
                        Gingerbread candy chupa chups topping. Halvah cake croissant jelly beans. Unerdwear.com brownie lollipop sesame snaps bear claw sweet roll sweet I love soufflé. Caramels powder gummies pudding danish sesame snaps. Sweet roll caramels fruitcake bonbon unerdwear.com brownie ice cream carrot cake. Carrot cake apple pie gummies I love applicake I love I love chocolate bar pudding.
                    </p>
                </div>
                <div class="l-work-list">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-xs-12"  v-for="(latestWorks, index) in latestWork" v-bind:key="index" >
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
                                    <span  class="pull-right">  {{latestWorks.workCount}}  </span>
                                    <span>  {{latestWorks.workContent}}  </span>
                                </div>
                            </div>
                        </div>
                         <div v-if="loading" class="animeloading">loading </div>
                    </div>
                </div>
                <div class="portfolio-more">
                    <button type="button" class="more" v-on:click="more" > more portfolio <i class="fa fa-caret-down"></i> </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Pagecover from '../component/pagecover.vue';
    export default {
        data () {
            return {
                latestWorkList :'',
                latestWorkShow : 3,
                loading:false,
                mainImageUrl: null,
                mainTextHeader: null,
                mainTextContent: null

            }
        },
        methods: {
            more: function(e){
                this.loading = true;
                setTimeout(()=> {
                    this.loading = false;
                }, 1300)
                this.latestWorkShow = this.latestWorkList;
                e.target.closest(".more").remove();
            },

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
                let thiss , imageUrl, textHeader, textContent;
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
            latestWork:function(){
                return this.$store.state.latestWork
            }
        },
        components: {
            Pagecover
        },
        created () {
            return this.$store.dispatch('getWorkSend')
        }
    }

</script>
