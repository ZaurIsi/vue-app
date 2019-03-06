<template>
  <div clas="page-main-content">
         <section class="gallery-list-section" >
             <div class="container">
                 <div class="row">
                     <div class="div col-md-12 col-sm-12 col-xs-12">
                        <div v-if="pageLoading" class="pure-loading" ></div>
                        <form class="add-form update-form" v-on:submit.prevent   v-if="!pageLoading">
                            <h3 class="form-header"> <span> Portfolio form  update</span> </h3>
                            <div class="update-image">
                                <img :src="updatedItem.portImage" id="updateImage" title="" alt="" />
                            </div>
                            <div class="update-text">
                                    <label>
                                        <span> Port image </span>
                                        <input type="file" ref="portFileInput" class="hidden"  @change="portOnImage" />
                                        <button type="btn" v-on:click="portForFile" class="btn colorbtn" > input file </button>
                                    </label>
                                    <label>
                                        <span> portfolio header </span>
                                        <input type="text" id="header" :value="updatedItem.portHeader"  class="add-form-input def-input" placeholder="ex: scott" />
                                    </label>
                                    <label>
                                        <span> portfolio Content  </span>
                                        <div class="editor-div">
                                            <vue-editor id="portContent"  :value="updatedItem.portContent" class="rich-text"></vue-editor>
                                        </div>
                                    </label>
                                    <div class="text-right"><button class="blog-submit" v-on:click.prevent="sendFormPortfolio" type="submit" > Add Portfolio </button></div>
                            </div>
                        </form>
                     </div>
                 </div>
             </div>
         </section>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
    export default  {
        data () {
            return {
                image:null,
                pageLoading:true,
                portTime:null
            }
        },
        methods: {
            sendFormPortfolio: function(){
                const newDate = new Date();

                const allmonth = {
                    0 : 'January',
                    1 : "February",
                    2 : "March",
                    3 : "April",
                    4 : "May",
                    5 : "June",
                    6 : "July",
                    7 : "August",
                    8: "September",
                    9 : "October",
                    10 : "November",
                    11 : "December"
                }

                const getMonth = newDate.getMonth();
                const getYear = newDate.getFullYear();
                const getDate = newDate.getDate();
                this.portTime = getDate + "/" + allmonth[getMonth] + '/' + getYear;
                const updateArray = {
                    updateHeader: document.getElementById('header').value,
                    updateContent:document.getElementById('portContent').innerText,
                    updateImage:this.image,
                    updateId:this.$route.params.id,
                    updateTime:this.portTime
                }
                this.$store.dispatch('updateThem', updateArray)
            },
            portOnImage: function(e){
                const files = e.target.files;
                const fileName = files[0].name;
                const fileReader = new FileReader ();
                fileReader.addEventListener('load', () => {
                    document.getElementById('updateImage').src=fileReader.result
                });
                
                fileReader.readAsDataURL(files[0]);
                this.image =files[0]
            },
            portForFile: function(){
                this.$refs.portFileInput.click();
            }
        },
         components: {
           VueEditor
        },
        computed: {
            updatedItem: function(){
                return this.$store.getters.portfolioSingle;
            }
        },
        created () {
              return this.$store.dispatch('getportfolioSingle', this.$route.params.id)
        },
        mounted () {
             return this.$store.dispatch('getportfolioSingle', this.$route.params.id).then((data) => {
                 setTimeout(() => {
                     this.pageLoading = false
                 }, 1500)
             })
        }
    }

</script>
