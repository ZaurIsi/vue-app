<template>
    <div class="page-main-content" >
        <Pagecover />
        <section class="gallery-list-section" >
            <div class="container">
                <div class="gallery-p">
                    <p>
                        Gingerbread candy chupa chups topping. Halvah cake croissant jelly beans. Unerdwear.com brownie lollipop sesame snaps bear claw sweet roll sweet I love soufflé. Caramels powder gummies pudding danish sesame snaps. Sweet roll caramels fruitcake bonbon unerdwear.com brownie ice cream carrot cake. Carrot cake apple pie gummies I love applicake I love I love chocolate bar pudding.
                    </p>
                </div>
                <div class="gallery-panel">
                    <a href="#" v-on:click.prevent="galleryCategory" data-category="all"  class="active">  View all  </a>
                    <a href="#" v-on:click.prevent="galleryCategory" data-category="photo" >  Photos  </a>
                    <a href="#" v-on:click.prevent="galleryCategory" data-category="game" >  Games  </a>
                    <a href="#" v-on:click.prevent="galleryCategory" data-category="app" >  Apps  </a>
                </div>
                <div class="gallery-list">
                    <div class="row">
                        <div v-if="loading, pageLoaded" class="pure-loading" ></div>
                        <div class="l-work-pop-overlay" >
                            <div class="container flex flex-around">
                                <div class="l-work-compile col-md-10">
                                    <div class="arrows-gallery">
                                        <button type="button" v-on:click="prevSlider" class="gal-left"> <i class="fa fa-angle-left"></i> </button>
                                         <button type="button" v-on:click="nextSlider" class="gal-right"> <i class="fa fa-angle-right"></i> </button>
                                    </div>
                                    <button type="button" v-on:click="exitPop" class="l-work-compile-exit"> <i class="fa fa-times"></i> </button>
                                    <div class="l-work-compile-image">
                                         <img src alt title :data-id="dataId" />
                                    </div>
                                    <div class="l-work-compile-content">
                                        <img v-on:click="zoomTarget" :data-index="index" :src="gallerys.galImage" :alt="gallerys.galName" :title="gallerys.galImage" v-for="(gallerys, index) in gallery" v-bind:key="index" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-6" v-if="!loading, !pageLoaded" v-for="(gallerys, index) in gallery" v-bind:key="index" :galleryCat="gallerys.galCat">
                            <div class="compile-gallery">
                                <div class="gallery-image">
                                    <div class="gallery-abso">
                                        <button type="button" v-on:click="galZoom" class="gallery-abso-btn"> <i class="fa fa-search-plus"></i> </button>
                                    </div>
                                    <img :src="gallerys.galImage" :alt="gallerys.galName" :title="gallerys.galName" />
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
                galleryList : this.$store.state.gallery.length,
                galleryShow : 4,
                dataId:0,
                pageLoaded:false
            }
        },
        methods: {
           more: function(e){
                this.loading = true;
                 this.pageLoaded = true;
                setTimeout(()=> {
                    this.loading = false;
                    this.pageLoaded = false;
                }, 1300)
                this.galleryShow = this.galleryList;
                e.target.closest(".more").remove();
            },
            galleryCategory: function(e){
                let thiss, catLength , category , filterDiv, allDiv, allDivLength, i;
                thiss = e.target;
                catLength = document.querySelectorAll('.gallery-panel a').length;
                category = thiss.getAttribute("data-category");
                allDiv  = document.querySelectorAll(".gallery-list .col-md-3");
                allDivLength = allDiv.length;
                for(i = 0; i <allDivLength; i++ ) {
                    if(allDiv[i].getAttribute("gallerycat") === category) {
                        allDiv[i].style.display = 'block';
                    }else if(category == 'all') {
                       allDiv[i].style.display = 'block';
                    }else {
                         allDiv[i].style.display = 'none';
                    } 
                }
                for(let i = 0; i < catLength; i ++) {
                    thiss.closest('.gallery-panel').querySelectorAll('a')[i].classList.remove('active')
                }
                    thiss.classList.add('active');
            },
             exitPop: function(e){
                e.target.closest(".l-work-compile").classList.remove("scale0");
                setTimeout(() => {
                    e.target.closest('.l-work-pop-overlay').classList.remove("opac");
                }, 300);
                document.body.classList.remove('body-overflow');
            },
            galZoom: function(){
                let firstImage;
                 document.querySelector(".l-work-pop-overlay").classList.add("opac");
                setTimeout(() => {
                    document.querySelector(".l-work-compile").classList.add("scale0");
                }, 300);
                document.body.classList.add('body-overflow');
                firstImage = document.querySelectorAll('.l-work-compile-content img')[0];
                firstImage.classList.add('active');
                document.querySelector('.l-work-compile-image').childNodes[0].setAttribute('src', firstImage.getAttribute('src'))
            },

            zoomTarget: function(e){
               let i, imageSrc, adressImage, getSrc, getImageLength;
                adressImage = document.querySelector('.l-work-compile-image').childNodes;
                getImageLength = e.target.closest('.l-work-compile-content').childNodes.length;
                imageSrc =  e.target.getAttribute("src");
                getSrc = adressImage[0].setAttribute("src", imageSrc);
                for(i = 0; i < getImageLength; i++) {
                    document.querySelectorAll('.l-work-compile-content img')[i].classList.remove('active')
                }
                e.target.classList.add('active');
                this.dataId = e.target.getAttribute('data-index');
            },
            nextSlider:function(){
                let currentImage, nextImage, mainImage, imagesLength;
                imagesLength = document.querySelectorAll('.l-work-compile-content img').length;
                currentImage = document.querySelector('.l-work-compile-content img.active');
                if(this.dataId < imagesLength-1 ) {
                     this.dataId ++;
                     currentImage.classList.remove('active');
                    currentImage.nextElementSibling.classList.add('active');
                    nextImage = currentImage.nextElementSibling.getAttribute('src');
                    mainImage = document.querySelector('.l-work-compile-image img').setAttribute('src',  nextImage);
                }
                
                
            },
            prevSlider:function(){
                let currentImage, prevImage, mainImage, imagesLength;
                imagesLength = document.querySelectorAll('.l-work-compile-content img').length;
                currentImage = document.querySelector('.l-work-compile-content img.active');
                if(this.dataId > 0 ) {
                    this.dataId --;
                    currentImage.classList.remove('active');
                    currentImage.previousElementSibling.classList.add('active');
                    prevImage = currentImage.previousElementSibling.getAttribute('src');
                    mainImage = document.querySelector('.l-work-compile-image img').setAttribute('src',  prevImage);
                }
            }
        },
        computed: {
            gallery: function(){
              return this.$store.getters.gallery.slice(0, this.galleryShow)
            },
            loading () {
               return this.$store.getters.loading
            }
        },
        components: {
            Pagecover
        },
       
        beforeMount () {
            // return this.$store.dispatch('sendGallery').then(()=> {
            //     this.pageLoaded = true
            // }, 3000)
        }
    }

</script>