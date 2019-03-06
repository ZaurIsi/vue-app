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
                       <div v-if="!isPageLoaded" class="pure-loading" ></div>
                    <div class="col-md-4 col-sm-4 col-xs-6" v-if="isPageLoaded" v-for="(bloglist, index)  in bloglists"  v-bind:key="index">
                        <div class="compile-blog">
                            <router-link v-on:click.native="pageUp" :to="'/blog/' + index"  exact >
                                <div class="blog-image">
                                    <img :src="bloglist.imageUrl"  :alt="bloglist.header" :title="bloglist.header" />
                                </div>
                                <div class="blog-content">
                                    <div class="blog-text">
                                        <h3>  {{bloglist.header}} </h3>
                                        <p>
                                          {{index.length}}   {{bloglist.body}}
                                        </p>
                                    </div>
                                    <div class="blog-icon">
                                        <span class="pull-right"> <i class="fa fa-cloud"></i>  21  </span>
                                        <span class="more"  v-on:click.prevent="changes"> Learn more </span>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    
    export default {
        data () {
            return {
               isPageLoaded: false,
               startshow:0,
               endshow:3
            }
        },
        methods:{
           ...mapActions ([
               'changeProduct'
           ]),
           pageUp: function(){
               window.scrollTo(0,0);
           }
        },
        computed : {
             bloglists () {
                return this.$store.state.bloglists
            },
            ...mapGetters ([
                'newbloglists'
            ])
            //.slice(this.props.startShow, this.props.endShow)
        },

        beforeMount () {
            this.$store.dispatch('getBlog')
            .then(() => {
                setTimeout(() => {
                     this.isPageLoaded = true;
                       if(this.isPageLoaded === true) {
                            this.startshow = this.$props.startShow;
                            this.endshow = this.$props.endShow;
                        }
                }, 2000)
            })
        },
        created () {
           return this.$store.dispatch('getBlog');
        },
        props: ['blogSlice', 'startShow', 'endShow']
    }

</script>
