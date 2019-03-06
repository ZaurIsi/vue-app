<template>
  <div class="page-main-content" >
       <Pagecover />
        <section class="gallery-list-section" >
            <div class="container">
                <p v-if="itemsEmpty" class="zero" > sorry zero items here </p>
                <div class="admin-port-list" v-for="(portfolios, index) in portfolio" :key="index" >
                    <div class="port-left">
                        <div class="row">
                            <div class="col-md-5 col-sm-5 col-xs-6 admin-image">
                                <img :src="portfolios.portImage" :title="portfolios.portHeader" :alt="portfolios.portHeader" />
                            </div>
                            <div class="col-md-7 col-sm-7 col-xs-6 admin-header">
                                <h3> {{portfolios.portHeader}} </h3>
                                <p>
                                    {{portfolios.portContent}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="port-right">
                        <router-link :to="'/update/' + index" class="btn btn-danger" > edit </router-link>
                       <label class="for-delete" v-on:change="getValue">
                           <span> delete </span>
                            <input type="checkbox" :value="index"  />
                       </label>
                    </div>
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
                itemsEmpty:false
            }
        },
        methods: {
            getValue: function(e){
                if(e.target.checked === true) {
                   if(confirm('are you sue ? this item will be deleted') === true) {
                        if(document.querySelectorAll('.admin-port-list').length === 1) {
                           this.itemsEmpty = true
                       }
                       e.target.closest('.admin-port-list').classList.add('remove-item');
                       setTimeout(() => {
                           e.target.closest('.admin-port-list').remove();
                       }, 500)
                       this.$store.dispatch('deleteportfolio', e.target.value);
                   }else {
                       return  e.target.checked = false
                   }
                }else {
                    return false
                }
            }
        },
        computed : {
            portfolio () {
                return this.$store.getters.portfolio
            }
        },
        created () {
          return  this.$store.dispatch('getportfolio')
        },
        components: {
            Pagecover
        }
    }

</script>