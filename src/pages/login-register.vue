<template>
  <div class="page-main-content">
      <Pagecover />
      <section class="log-register">
          <div class="container">
              <div class="row">
                  <div class="col-md-6 col-sm-6 col-md-offset-3" v-if="registerformblock">
                        <form class="log-register-form" @submit.prevent="onSign">
                             <div class="form-icon-awe"> <i class="fa fa-user"> </i> </div>
                            <h3 class="form-header"> <span> Login <p  v-if="errors" class="errors" >  {{errors.message}} </p> </span> </h3>
                            <label>
                                <span> Email </span>
                                <input type="email" v-on:input="validate" validate="email" v-model="email" class="add-form-input def-input" placeholder="ex: scott" />
                            </label>
                            <label>
                                <span> Password </span>
                                <input type="password" v-on:input="validate" validate="password" v-model="password" class="add-form-input def-input" placeholder="ex: info@gmail.com" />
                            </label>
                            <div class="text-right"><button class="blog-submit" type="submit" id="logButton" disabled="disabled"> Log in </button></div>
                            <div class="not-form">
                                <span> if you are not logged in </span>  <button type="button"  v-on:click="registerform"> register </button>
                            </div>
                        </form>
                  </div>
                  <div class=" col-md-6 col-sm-6 col-md-offset-3  "  v-if="loginformblock">
                      <form class="log-register-form" @submit.prevent="onSignup">
                            <div class="form-icon-awe"> <i class="fa fa-pencil"> </i> </div>
                            <h3 class="form-header"> <span> Register </span> <p  v-if="errors" class="errors" >  {{errors.message}} </p> </h3>
                            <label>
                                <span> Email </span>
                                <input v-model="email" validate="email" v-on:input="validate" type="email" class="add-form-input def-input" placeholder="ex: scott" />
                            </label>
                            <label>
                                <span> Password </span>
                                <input v-model="password"  id="password" validate="password" v-on:input="validate" type="password" class="add-form-input def-input" placeholder="ex: scott" />
                            </label>
                            <label>
                                <span> Re password </span>
                                <input v-model="repassword" matches="repassword" v-on:input="validate" type="password" class="add-form-input def-input" placeholder="ex: scott" />
                            </label>
                            <div class="text-right"><button class="blog-submit" type="submit" id="logButton" disabled="disabled" > Register  </button></div>
                            <div class="not-form">
                                <span> if you are  logged in </span>  <button type="button"  v-on:click="loginform"> login </button>
                            </div>
                        </form>
                  </div>
                  <div class="clear"></div>
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
                email:null,
                password:null,
                repassword:null,
                loginformblock:false,
                registerformblock:true,
                error:null
            }
        },
        components: {
            Pagecover
        },
        methods:{
            onSignup:function(){
               this.$store.dispatch('signUserUp', {email: this.email, password: this.password});
               
              // this.$store.dispatch('setError', {email: this.email, password: this.password} )
            },

            onSign: function(){
                this.$store.dispatch('signUser',{email: this.email, password: this.password})
              // this.$store.dispatch('setError', {email: this.email, password: this.password} )
            },
            
            registerform: function(){
                this.loginformblock = true;
                this.registerformblock = false;
            },

            loginform: function(){
                this.registerformblock = true;
                this.loginformblock = false;
            },
            validate:function(e){
                const inputs = document.querySelector('.log-register-form').querySelectorAll('input')
                
                const fieldName = e.target.getAttribute('validate');
                const pattern = {
                    email :/^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ig,
                    password: /^[\w@-]{8,20}$/ig,
                    phone:/^[\d]{11}$/
                }
               
                function getvalidate(field, regexp) {
                    if(regexp.test(field.value)) {
                        e.target.className = 'add-form-input def-input valid'
                    }else {
                         e.target.className = 'add-form-input def-input invalid'
                    }
                }
                if(e.target.hasAttribute('validate')) {
                     getvalidate(e.target, pattern[fieldName] )
                }

                if(e.target.hasAttribute('matches')) {
                    const match = document.getElementById('password').value;
                    if(match === e.target.value) {
                        e.target.className = 'add-form-input def-input valid'
                    }else {
                         e.target.className = 'add-form-input def-input invalid'
                    }
                }

                inputs.forEach((input) => {
                    if(input.classList.contains('valid') !== true ) {
                          document.getElementById('logButton').setAttribute('disabled', 'disabled');
                    }else {
                       document.getElementById('logButton').removeAttribute('disabled');
                    }
                })


            }
        },
        mounted () {
            //  let regExp = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/ig;

        },
        computed : {
            user () {
               return this.$store.getters.user
            },

            errors () {
               return this.$store.getters.error
            }
        },
        watch : {
            user (value) {
                if(value !== null && value !== undefined) {
                    this.$router.push('/');
                }
            }
        }
    }

</script>