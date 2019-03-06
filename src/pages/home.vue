<template>
  <div class="main-page-content" >

        <Slider />
        <Daily />
        <works />
        <Purchase />
        <Featured />
        <DailySlider />
        <Bloglist  startShow="0"  endShow ="3"  />
        <Experience />
        <Ourteam />


  </div>
</template>

<script>

import Slider from '../component/slider.vue';
import Daily from '../component/daily.vue';
import Works from '../component/works.vue';
import Purchase from '../component/purchase.vue';
import Featured from '../component/featured.vue';
import DailySlider from '../component/daily-slider.vue';
import Bloglist from '../component/bloglist.vue';
import Experience from '../component/experience.vue';
import Ourteam from '../component/our-team.vue';

export default {
    data () {
        return {
            blogSlice: ""
        }
    },

    methods: {
       
    },

    components: {
        Slider,
        Daily,
        Works,
        Purchase,
        Featured,
        DailySlider,
        Bloglist,
        Experience,
        Ourteam
    }
}

</script>
