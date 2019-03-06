<template>
   <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-12 footer-block">
                    <div class="footer-menu-name">
                        <h3> <span> Get in touch </span>  </h3>
                    </div>
                    <div class="footer-menu-content">
                        <div class="footer-menu-item">
                            <i class="fa fa-flag"></i>
                            <p>
                                <span> Address </span> : 321 Street Name, United Kingdom, London 
                            </p>
                        </div>
                        <div class="footer-menu-item">
                            <i class="fa fa-phone"></i>
                            <p>
                                <span> Phone </span> : <a href="tel:+7 998 71 150 30 20"> +7 998 71 150 30 20 </a>
                            </p>
                        </div>
                        <div class="footer-menu-item">
                            <i class="fa fa-envelope"></i>
                            <p>
                                <span> Email </span> : <a href="mailto:info@ambertheme.com"> info@ambertheme.com </a>
                            </p>
                        </div>
                    </div>
                    <div class="footer-map">
                        <gmap-map :center="center" :zoom="15" style="width: 100%; height: 100%">   <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"  :draggable="true"  @click="center=m.position" ></gmap-marker></gmap-map>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12 footer-block">
                    <div class="footer-menu-name">
                        <h3> <span> Latest tweets </span>  </h3>
                    </div>
                    <div class="footer-menu-content">
                        <div class="footer-menu-item">
                            <i class="fa fa-twitter"></i>
                            <p>
                                <span> 321 Street Name, United Kingdom, London </span>  <small>  — about 12 min ago </small>
                            </p>
                        </div>
                        <div class="footer-menu-item">
                            <i class="fa fa-twitter"></i>
                            <p>
                                <span> WOOCOMMERCE functionality added!!! See Industrial theme become even powerful!   </span>  <small>  — about 15 min ago </small>
                            </p>
                        </div>
                        <div class="footer-menu-item">
                            <i class="fa fa-twitter"></i>
                            <p>
                                <span> CMS Masters And Their Best Web Design Tools</span>  <small>  — about 35 min ago </small>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12 footer-block">
                    <div class="footer-menu-name">
                        <h3> <span> Follow us </span>  </h3>
                    </div>
                    <div class="footer-menu-content">
                        <div class="social-item">
                        <a href="#">  
                            <i class="fa fa-facebook footer-fb"></i>
                            <span> Like us on Facebook </span>
                        </a>
                        </div>
                        <div class="social-item">
                        <a href="#">
                            <i class="fa fa-twitter footer-tw"></i>
                            <span> Follow us on Twitter </span>
                        </a>
                        </div>
                        <div class="social-item">
                        <a href="#">  
                            <i class="fa fa-youtube footer-yt"></i>
                            <span> Watch videos on YouTube </span>
                        </a>
                        </div>
                        <div class="social-item">
                        <a href="#">  
                            <i class="fa fa-instagram footer-in"></i>
                            <span> Friend us on Instagram </span>
                        </a>
                        </div>
                        <div class="social-item">
                        <a href="#"> 
                            <i class="fa fa-pinterest footer-pn"></i>
                            <span> Repin on Pinterest </span>
                        </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12 footer-block">
                    <div class="footer-menu-name">
                        <h3> <span> Popular Post </span>  </h3>
                    </div>
                    <div class="footer-menu-content">
                        <div class="popular-post-item">
                        <span> September, 30 </span>
                        <p>
                            Candy canes dragée pudding. Donut cheesecake I love chocolate icing 
                        </p>
                        </div>
                    <div class="popular-post-item">
                        <span> April, 22 </span>
                        <p>
                            Muffin croissant cookie sesame snaps. Ice cream donut cookie gingerbread
                        </p>
                    </div>
                    <div class="popular-post-item">
                        <span> May, 12 </span>
                        <p>
                            Cotton candy muffin tart gummies candy danish liquorice chupa chups tootsie roll
                        </p>
                    </div>

                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <p>
                    © 2018 StylemixThemes. All rights reserved.
                </p>
                <a href="#" v-on:click.prevent="scrollTop"> Back to top of page  <i class="fa fa-angle-up"></i> </a>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data () {
            return {
                center: {lat: 40.7622075, lng: 47.0383561},
                markers: [
                    { position: {lat: 40.7622075, lng: 47.0383561}}, 
                ]
            }
        },
        methods: {
            scrollTop: function(e){
                 var scrollAnime = -window.scrollY / 40,
                 animeInterval = setInterval(function(){
                     if(window.scrollY  != 0) {
                        window.scrollBy(0, scrollAnime);
                    }else {
                        clearInterval(animeInterval);
                    }
                 }, 15)
            }
        }
    }
</script>
