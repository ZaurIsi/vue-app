<template>
     <section class="our-team-section">
        <div class="container">
            <div class="flex flex-center">
                <div>
                    <div class="div-header text-center">
                        <h3> Our team </h3>
                    </div>
                </div>
            </div>
            <div class="our-team">
                <div class="row">
                    <div class="col-md-3 col-sm-3 col-xs-6" v-if="pageLoaded" v-for="(ourTeams , index) in ourTeam" v-bind:key="index">
                        <div class="compile-our-team">
                            <div class="our-team-image">
                                <div class="our-team-names">
                                    <p> {{ourTeams.ourName}} </p>
                                    <span> {{ourTeams.ourJob}} </span>
                                </div>
                                <img :src="ourTeams.ourImage " :alt="ourTeams.ourImage" :title="ourTeams.ourImage" />
                            </div>
                            <div class="our-team-content">
                                <p> {{ourTeams.ourContent}} </p>
                                <router-link :to="'portfolio/' + index "> profile  </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {

        data () {
            return {
                pageLoaded: false
            }
        },
        computed : {
            ourTeam: function(){
              return  this.$store.state.ourTeam
            }
        },
        created () {
            return this.$store.dispatch('getOurArray')
        },
        beforeMount () {
            this.$store.dispatch('getOurArray').then((data) => {
                this.pageLoaded = true
            })
        }
    }

</script>
