<template>
    <div class="page-main-content" >
        <Pagecover />
        <Portfoliolist />
    </div>
</template>


<script>
import Portfoliolist from '../component/portfoliolist.vue';
import Pagecover from '../component/pagecover.vue';
    export default {
        data() {
            return {

            }
        },
        methods: {
            
        },
        components: {
            Portfoliolist,
            Pagecover
        }

    }
</script>
