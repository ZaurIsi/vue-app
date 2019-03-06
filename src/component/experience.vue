<template>
  <section class="roll-expirience">
        <div class="container">
            <div class="flex flex-center">
                <div>
                    <div class="div-header text-center">
                        <h3> Company expirience </h3>
                    </div>
                </div>
            </div>
            <div class="expirience">
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-4 text-center">
                        <vue-circle
                        :progress="80"
                        :size="120"
                        :reverse="false"
                        line-cap="round"
                        :fill="fill"
                        empty-fill="rgba(0, 0, 0, .1)"
                        :animation-start-value="0.0"
                        :start-angle="0"
                        insert-mode="append"
                        :thickness="5"
                        :show-percent="false"
                        @vue-circle-progress="progress"
                        @vue-circle-end="progress_end">
                        <i class="circle-i fa fa-cogs"></i>
                        </vue-circle>

                        <div class="circle-text">
                            <p> 500  </p>
                            <span> years of web development </span>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-4 text-center">
                        <vue-circle
                        :progress="50"
                        :size="120"
                        :reverse="false"
                        line-cap="round"
                        :fill="fill"
                        empty-fill="rgba(0, 0, 0, .1)"
                        :animation-start-value="0.0"
                        :start-angle="0"
                        insert-mode="append"
                        :thickness="5"
                        :show-percent="false"
                        @vue-circle-progress="progress"
                        @vue-circle-end="progress_end">
                        <i class="circle-i fa fa-phone"></i>
                        </vue-circle>
                        <div class="circle-text">
                            <p> 2500  </p>
                            <span> years of web development </span>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-4 text-center">
                        <vue-circle
                        :progress="50"
                        :size="120"
                        :reverse="false"
                        line-cap="round"
                        :fill="fill"
                        empty-fill="rgba(0, 0, 0, .1)"
                        :animation-start-value="0.0"
                        :start-angle="0"
                        insert-mode="append"
                        :thickness="5"
                        :show-percent="false"
                        @vue-circle-progress="progress"
                        @vue-circle-end="progress_end">
                        <i class="circle-i fa fa-rocket"></i>
                        </vue-circle>
                        <div class="circle-text">
                            <p> 500  </p>
                            <span> years of web development </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    import VueCircle from 'vue2-circle-progress'

    export default {
        data() {
            return {
              fill : { gradient: ["#fff"] }
            }
        },
        components: {
            VueCircle
        },
         methods:{
        progress(event,progress,stepValue){
            
        },
        progress_end(event){
        
        }
    }
    }
</script>
