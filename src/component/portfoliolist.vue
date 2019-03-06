<template>
  <section class="latest-blog-section">
        <div class="container">
            <div class="flex flex-center">
                <div>
                    <div class="div-header text-center">
                        <h3> Latest blog posts </h3>
                    </div>
                </div>
            </div>
            <div class="blog-list">
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-6" v-if="pageLoaded" v-for="(portfolios, index) in portfolio" v-bind:key="index">
                        <div class="compile-blog compile-portfolio">
                            <router-link :to="'port/' +index">
                                <div class="blog-image">
                                    <div class="portfolio-list-abso">
                                        <button type="button" class="prt-list-button"> <i class="fa fa-link"></i> </button>
                                    </div>
                                    <img :src=" portfolios.portImage" :alt="portfolios.portHeader" :title="portfolios.portHeader" />
                                </div>
                                <div class="blog-content">
                                    <div class="blog-text">
                                        <h3> {{portfolios.portHeader}} </h3>
                                        <p>
                                            {{portfolios.portContent}}
                                        </p>
                                    </div>
                                    <div class="blog-icon">
                                        <span class="pull-right"> <i class="fa fa-apos-tr"></i> 0 Comments </span>
                                        <span class="more"> <i class="fa fa-clock-o"></i> {{portfolios.portTime}} </span>
                                    </div>
                                </div>
                            </router-link>
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
</template>

<script>

    export default {

        data () {
            return {
                // portfolioList : this.$store.state.portfolio.length,
                portfolioShow : 3,
                loading:false,
                pageLoaded: false
            }
        },
        methods: {
            more: function(e){
                // this.loading = true;
                // setTimeout(()=> {
                //     this.loading = false;
                // }, 1300)
                // this.portfolioShow = this.portfolioList;
                // e.target.closest(".more").remove();
            }
        },
        computed: {
            portfolio: function(){
                return this.$store.state.portfolio;
            }
        },
        created () {
            return this.$store.dispatch('getportfolio')
        },

        beforeMount () {
            this.$store.dispatch('getportfolio').then(() => {
                
                this.pageLoaded = true
              
            })
        }
    }

</script>
