<template>
    <div class="page-main-content">
       <Pagecover />
        <section class="log-register">
          <div class="container">
              <div class="row for-admin-row" >
                  <div class="col-md-6 col-sm-6 ">
                    <form class="add-form" v-on:submit.prevent  enctype="multipart/form-data">
                        <h3 class="form-header"> <span> Add blog </span> </h3>
                        <label>
                            <span> Blog header </span>
                            <input type="text"  v-model="blogHeader"  class="add-form-input def-input" placeholder="ex: scott" />
                        </label>
                        <img :src="blogImage" :alt="blogImage" class="blogDefImg" :title="blogImage" />
                        <label>
                            <span> Blog image </span>
                            <input type="file" ref="fileInput" class="hidden" @change="onImage" />
                            <button type="btn" v-on:click="forFile" class="btn colorbtn" > input file </button>
                        </label>
                        <label>
                            <span> Blog Content </span>
                            <div class="editor-div">
                                <vue-editor id="blogContent" v-model="blogContent" class="rich-text"></vue-editor>
                            </div>
                        </label>
                        <div class="text-right"><button class="blog-submit" v-on:click.prevent="sendForm" type="submit" > Add blog </button></div>
                    </form>
                  </div>
                  <div class="col-md-6 col-sm-6 ">
                    <form class="add-form" v-on:submit.prevent  enctype="multipart/form-data">
                        <h3 class="form-header"> <span> main slider </span> </h3>
                        <label>
                            <span> Slider header </span>
                            <input type="text"  v-model="sliderHeader"  class="add-form-input def-input" placeholder="ex: scott" />
                        </label>
                        <label>
                            <span> Slider mini header </span>
                            <input type="text"  v-model="sliderMiniHeader"  class="add-form-input def-input" placeholder="ex: scott" />
                        </label>
                        <label>
                            <span> Slider link </span>
                            <input type="text"  v-model="sliderLink"  class="add-form-input def-input" placeholder="ex: scott" />
                        </label>
                        <img :src="sliderImage" :alt="sliderImage" class="blogDefImg" :title="sliderImage" />
                        <label>
                            <span> Slider image </span>
                            <input type="file" ref="fileInputSlider" class="hidden" @change="onSlideImage" />
                            <button type="btn" v-on:click="forSlider" class="btn colorbtn" > input file </button>
                        </label>
                        <div class="text-right"><button class="blog-submit" v-on:click.prevent="sendFormSlider" type="submit" > Add blog </button></div>
                    </form>
                  </div>
                  <div class="clear"></div>
              </div>
              <div class="row for-admin-row" >
                  <div class="col-md-6 col-sm-6 ">
                    <form class="add-form" v-on:submit.prevent  enctype="multipart/form-data">
                        <h3 class="form-header"> <span> Add work  </span> </h3>
                        <label>
                            <span> work header </span>
                            <input type="text"  v-model="workHeader"  class="add-form-input def-input" placeholder="ex: scott" />
                        </label>
                        <img :src="workImage" :alt="workImage" class="blogDefImg" :title="workImage" />
                        <label>
                            <span> work image </span>
                            <input type="file" ref="workFileInput" class="hidden" multiple @change="workOnImage" />
                            <button type="btn" v-on:click="workForFile" class="btn colorbtn" > input file </button>
                        </label>
                        <label>
                            <span> work Content </span>
                            <div class="editor-div">
                                <vue-editor id="workContent" v-model="workContent" class="rich-text"></vue-editor>
                            </div>
                        </label>
                        <div class="text-right"><button class="blog-submit" v-on:click.prevent="workSendForm" type="submit" > Add work </button></div>
                    </form>
                  </div>
                  <div class="col-md-6 col-sm-6 ">
                    <form class="add-form" v-on:submit.prevent >
                        <h3 class="form-header"> <span> mini slider </span> </h3>
                        <label>
                            <span> Slider text </span>
                            <input type="text"  v-model="miniSliderHeader"  class="add-form-input def-input" placeholder="ex: scott" />
                        </label>
                        <label>
                            <span> Slider man name </span>
                            <input type="text"  v-model="miniSliderMiniHeader"  class="add-form-input def-input" placeholder="ex: scott" />
                        </label>
                        <div class="text-right"><button class="blog-submit" v-on:click.prevent="sendFormMiniSlider" type="submit" > Add slider </button></div>
                    </form>
                  </div>
                  <div class="clear"></div>
              </div>
              <div class="row for-admin-row" >
                  <div class="col-md-6 col-sm-6 ">
                    <form class="add-form" v-on:submit.prevent  enctype="multipart/form-data">
                        <h3 class="form-header"> <span> Our team  </span> </h3>
                        <label>
                            <span> Our Name </span>
                            <input type="text"  v-model="ourTeam.ourName"  class="add-form-input def-input" placeholder="ex: scott" />
                        </label>
                        <label>
                            <span> Our Job </span>
                            <input type="text"  v-model="ourTeam.ourJob"  class="add-form-input def-input" placeholder="ex: scott" />
                        </label>
                        <label>
                            <span> Our Content </span>
                            <input type="text"  v-model="ourTeam.ourContent"  class="add-form-input def-input" placeholder="ex: scott" />
                        </label>
                        <label>
                            <span> Choose your game platform </span>
                            <select multiple  v-model="ourTeam.ourDescription"  class="form-control ">
                                <option> PS1 </option>
                                <option> PS2 </option>
                                <option> PS3 </option>
                                <option> PS4 </option>
                                <option> Nintendo </option>
                                <option> Xbox 360 </option>
                                <option> Xbox One </option>
                            </select>
                        </label>
                        <label>
                            <input type='file' id="files"  @change="ourArrayImage"  name="image" multiple="multiple" />
                            <div id='previewImg'></div>
                        </label>
                        <img :src="ourTeam.ourImage" :alt="ourTeam.ourImage" class="blogDefImg" :title="ourTeam.ourImage" />
                        <label>
                            <span> Our image </span>
                            <input type="file" ref="ourFileInput" class="hidden"  @change="ourOnImage" />
                            <button type="btn" v-on:click="ourForFile" class="btn colorbtn" > input file </button>
                        </label>
                        <div class="text-right"><button class="blog-submit" v-on:click.prevent="ourSendForm" type="submit" > Add work </button></div>
                    </form>
                  </div>
                  <div class="col-md-6 col-sm-6 ">
                    <form class="add-form" v-on:submit.prevent >
                        <h3 class="form-header"> <span> Portfolio form </span> </h3>
                        <label>
                            <span> portfolio header </span>
                            <input type="text"  v-model="portHeader"  class="add-form-input def-input" placeholder="ex: scott" />
                        </label>
                        <label>
                            <span> portfolio Content  </span>
                             <div class="editor-div">
                                <vue-editor id="portContent" v-model="portContent" class="rich-text"></vue-editor>
                            </div>
                        </label>
                        <img :src="portImage" :alt="portImage" class="blogDefImg" :title="portImage" />
                        <label>
                            <span> Port image </span>
                            <input type="file" ref="portFileInput" class="hidden"  @change="portOnImage" />
                            <button type="btn" v-on:click="portForFile" class="btn colorbtn" > input file </button>
                        </label>
                        <div class="text-right"><button class="blog-submit" v-on:click.prevent="sendFormPortfolio" type="submit" > Add Portfolio </button></div>
                    </form>
                  </div>
                  <div class="clear"></div>
              </div>
              <div class="row for-admin-row">
                    <div class="col-md-6 col-sm-6 ">
                        <form class="add-form" v-on:submit.prevent >
                            <h3 class="form-header"> <span> Gallery form </span> </h3>
                            <label>
                                <span> Gallery name </span>
                                <input type="text"  v-model="galHeader"  class="add-form-input def-input" placeholder="ex: scott" />
                            </label>
                            <label>
                                <span> portfolio Content  </span>
                                <select v-model="galCat" class="form-control">
                                    <option> app</option>
                                    <option> game</option>
                                    <option> photo</option>
                                </select>
                            </label>
                            <img :src="galImage" :alt="galImage" class="blogDefImg" :title="galImage" />
                            <label>
                                <span> Gallery image </span>
                                <input type="file" ref="galFileInput" class="hidden"  @change="galOnImage" />
                                <button type="btn" v-on:click="galForFile" class="btn colorbtn" > input file </button>
                            </label>
                            <div class="text-right"><button class="blog-submit" v-on:click.prevent="sendFormGallery" type="submit" > Add Portfolio </button></div>
                        </form>
                    </div>
              </div>
          </div>
      </section>
    </div>
</template>


<script>
import Pagecover from '../component/pagecover.vue';
import { VueEditor } from 'vue2-editor'
    export default {
        data() {
            return {
                blogHeader:"",
                blogContent:"",
                blogImage: "",
                image:null,
                imageArray:[],
                sliderHeader:"",
                sliderMiniHeader:"",
                sliderImage:"",
                sliderLink:"",
                workHeader:"",
                workImage:"",
                workContent:"",
                miniSliderHeader:"",
                miniSliderMiniHeader:"",
                ourTeam : { ourName : "", ourJob  : "", ourContent : "", ourDescription : [], ourImage : "", imageArray:[] },
                portHeader  : "",
                portContent : "",
                portImage   : "",
                portTime    : "",
                galHeader   : "",
                galCat      : "",
                galImage    : ""
            }
        },
        methods: {

            //blog 
            sendForm: function(){
                this.$store.dispatch('addBlog', {blogHeader: this.blogHeader, blogImage: this.image, blogContent: this.blogContent })
            },
            onImage: function(e){
                const files = e.target.files;
                let fileName = files[0].name;
                
                if(fileName.length <= 0) {
                    alert('invalid image')
                }
                const fileReader = new FileReader ()
                fileReader.addEventListener('load', ()=> {
                    this.blogImage = fileReader.result;
                });

                fileReader.readAsDataURL(files[0])
                this.image = files[0];
            },
            forFile:function(){
                this.$refs.fileInput.click();
            },

            //slider main
            sendFormSlider: function(){ 
                this.$store.dispatch('mainslider', {sliderHeader : this.sliderHeader , sliderMiniHeader: this.sliderMiniHeader, sliderLink: this.sliderLink , sliderImage: this.image})
            },
            onSlideImage: function(e){
                const files = e.target.files;
                let fileName = files[0].name;
                if(fileName.length <= 0) {
                    alert('invalid image')
                }
                const fileReader = new FileReader ()
                fileReader.addEventListener('load', ()=> {
                    this.sliderImage = fileReader.result;
                });
                fileReader.readAsDataURL(files[0])
                this.image = files[0];
            },
           
            forSlider:function(){
                this.$refs.fileInputSlider.click();
            },
            //last work add
            workSendForm: function(){
               this.$store.dispatch('workSend', {workHeader: this.workHeader, workContent:this.workContent, workCount:0, workImage: this.image })
            },

            workOnImage: function(e){
               const files = e.target.files;
               const fileName = files[0].name;
               const fileReader = new FileReader ();
               fileReader.addEventListener('load', () => {
                   this.workImage = fileReader.result
               })
                fileReader.readAsDataURL(files[0]);
                this.image = files[0];
            },

            workForFile: function(e){
                this.$refs.workFileInput.click();
            },
            //mini slider text
            sendFormMiniSlider: function(){
                this.$store.dispatch('dailySlider', {miniSliderHeader: this.miniSliderHeader, miniSliderMiniHeader : this.miniSliderMiniHeader })
            },
            //our team
            ourSendForm: function(){
                this.$store.dispatch('ourSendForm', {
                    ourName:this.ourTeam.ourName,
                    ourJob:this.ourTeam.ourJob,
                    ourContent:this.ourTeam.ourContent,
                    ourDescription:this.ourTeam.ourDescription,
                    imageArray:this.imageArray,
                    ourImage:this.image
                });
            },
            ourOnImage: function(e){
                const files = e.target.files;
                const fileName = files[0].name;
                const fileReader = new FileReader ();
                fileReader.addEventListener('load', () => {
                    this.ourTeam.ourImage = fileReader.result;
                })
                fileReader.readAsDataURL(files[0]);
                this.image = files[0];
            },
            ourArrayImage: function(e){
                 const files = e.target.files;
                for (let  i = 0,  f; f = files[i]; i++) {
                
                const fileReader = new FileReader();
                    fileReader.addEventListener('load' , (theFile) => {
                          return function (e) {
                            var span = document.createElement('span');
                            span.innerHTML = ['<img class="thumb" src="', e.target.result,
                                '" title="', escape(theFile.name), '"/>'].join('');
                            document.getElementById('previewImg').insertBefore(span, null);
                        };
                    });
                    fileReader.readAsDataURL(f);      
                     this.imageArray = files;           
                }
            },
            ourForFile: function(){
                this.$refs.ourFileInput.click();
            },
            portForFile: function(){
                this.$refs.portFileInput.click();
            },
            portOnImage: function(e){
               const files = e.target.files;
               const fileName = files[0].name;
               const fileReader = new FileReader ();
               fileReader.addEventListener('load', () => {
                   this.portImage = fileReader.result;
               });
                fileReader.readAsDataURL(files[0]);
               this.image = files[0];

            },
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
                const fromArray = {
                    portHeader  : this.portHeader,
                    portContent : this.portContent,
                    portImage   : this.image,
                    portTime    : this.portTime
                }
                this.$store.dispatch('sendFormPortfolio', fromArray )
            },
            galForFile: function(){
                this.$refs.galFileInput.click();
            },
            galOnImage: function(e){
                const files = e.target.files;
                const fileName = files[0].name;
                const fileReader = new FileReader();
                fileReader.addEventListener('load', () => {
                   
                    this.galImage = fileReader.result;
                })
                 fileReader.readAsDataURL(files[0])
                this.image = files[0]
            },
            sendFormGallery: function(){
                const fileArray = {
                    galHeader   : this.galHeader,
                    galCat      : this.galCat,
                    galImage    : this.image
                }
                this.$store.dispatch('sendGallery', fileArray )
            }
        },
        components: {
           Pagecover,
           VueEditor
        },

        mounted () {
           
        }

    }
</script>
