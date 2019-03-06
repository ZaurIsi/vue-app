<template>
  <section class="page-cover-section">
        <div class="page-cover-overlay"></div>
        <div class="container">
            <div class="flex flex-down">
            <div class="m-bottom-50">
                    <div class="page-cover-name">
                    <h2> <span> {{pageTrack}}  grid view </span>  </h2>
                    </div>
                    <div class="flex flex-around">
                        <div class="page-cover-times">
                            <ul>
                                <li>
                                    <i class="fa fa-user-o"></i>
                                    <span> by Scott Kennedy </span>
                                </li>
                                <li>
                                    <i class="fa fa-clock-o"></i>
                                    <span> {{coverDate}} </span>
                                </li>
                                <li>
                                    <i class="fa fa-apos"></i>
                                    <span> {{coverCalendar}} </span>
                                </li>
                            </ul>
                        </div>
                        <div class="brand-crumb">
                            <ul>
                                <li>
                                    {{pageTrack}}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {{getClocks}} {{getcalendars}}
            </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        data () {
            return {
                pageTrack : this.$route.name,
                coverDate: null,
                coverCalendar:null
            }
        },

        methods:  {
            getClock: function(){
                
                 let blogTime, blogSecond, blogMinute, blogHours
                blogTime = new Date();
                blogSecond = blogTime.getSeconds();
                blogMinute = blogTime.getMinutes();
                blogHours = blogTime.getHours();
                if(blogSecond < 10) {
                     blogSecond ="0" +  blogTime.getSeconds();
                }

                if(blogMinute < 10) {
                     blogMinute ="0" +  blogTime.getMinutes();
                }

                if(blogHours < 10) {
                     blogHours ="0" +  blogTime.getHours();
                }

                this.coverDate = blogHours + " " + blogMinute  + " " + blogSecond
            },

            getCalendar : function(){
                let monthName ,blogTime, blogDate;
                monthName = new Array();
                blogTime = new Date();
                blogDate = blogTime.getDay();
                monthName[0] = 'January';monthName[1] = 'February';monthName[2] = 'March';
                monthName[3] = 'April';monthName[4] = 'Mai';monthName[5] = 'June';
                monthName[6] = 'July';monthName[7] = 'August';monthName[8] = 'September';
                monthName[9] = 'October';monthName[10] = 'November';monthName[11] = 'December';
                if(blogDate < 10) {
                    blogDate = "0" + blogTime.getDate();
                }
                this.coverCalendar = monthName[blogTime.getMonth()] + " " + blogDate;
            }
        },
        computed: {
            getClocks: function(){
               setInterval(this.getClock, 1000);
            },
            getcalendars:function(){
                return this.getCalendar();
            }
        }
    }

</script>
