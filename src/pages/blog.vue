<template>
    <div class="main-page-content">
        <Pagecover />
        <Bloglist :endShow="endShow"  :startShow="startShow" />
        <div class="paging">
            <a href="#" v-for="(pageNumbers, index) in pageNumber" v-bind:key="index" v-on:click.prevent="paging" :data-page="index + 1" > {{index + 1}} </a>
        </div>
    </div>
</template>

<script>
  
import Bloglist from '../component/bloglist.vue';
import Pagecover from '../component/pagecover.vue';
export default {
    data () {
        return {
            blogList: 21,
            blogShow: 3,
            pageNumber : 3,
            endShow : 6,
            startShow: 3
        }
    },

    computed: {
        bloglists: function(){
             return this.$store.state.bloglists.slice(this.startShow, this.endShow);
        }
    },

      methods: {
        paging: function(e) {
           // this.blogList = this.$store.state.bloglists.length;
            let curPage =  e.target.getAttribute("data-page");
            this.endShow = curPage * this.blogShow ;
            this.startShow = this.endShow -  this.blogShow;
        }
    },

    created () {
        setTimeout(() => {
            
        //    window.addEventListener('load', () => {
        //       // this.blogList = this.$store.getters.bloglists.length;
        //    this.$store.getters.bloglists.filter((seda) => {
        //        console.log(seda);
        //    })
        //    })
        }, 1000)
        this.pageNumber = Math.round(this.blogList / this.blogShow);
        this.endShow = this.blogShow ;
        this.startShow = 0;
    },

    components: {
        Bloglist,
        Pagecover
    },
    
}

</script>
