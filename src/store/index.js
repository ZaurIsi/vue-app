import Vue from 'vue';
import Vuex from 'vuex';
import http from 'vue-resource';

import * as firebase from 'firebase';
Vue.use(http);
Vue.use(Vuex);

export const store = new Vuex.Store ({
    strict: true,
    state: {
        bloglists: [null],
        bloglist:null,
        mainslider:null,
        dailySlider: null,
        latestWork:null,
        ourTeam :null,
        ourTeamSingle :null,
        portfolio: null,
        portfolioSingle:null,
        gallery :null,
        user:null,
        profile:null,
        error:null,
        loading:false
    },
    getters:  {
       
        bloglists:state => {
            return state.bloglists;
        },

        bloglist:state => {
            return state.bloglist;
        },

        mainslider:state => {
            return state.mainslider
        },

        dailySlider: state => {
            return state.dailySlider
        },
        latestWork:state => {
            return state.latestWork
        },
        ourTeam: state => {
            return state.ourTeam
        },
        ourTeamSingle:state => {
            return state.ourTeamSingle
        },
        gallery:state => {
            return state.gallery
        },
        loading:state => {
            return state.loading
        },
        // ourTeam:state => {
        //     return ourTeamId => state.ourTeam.filter((ourTeams) => {
        //         return ourTeams.ourTeamId ===  ourTeamId
        //     })
        // },
        portfolio:state => {
            return portoId => state.portfolio.filter((portfolios) => {
                return portfolios.portoId === portoId;
            })
        },
        portfolio:state => {
            return state.portfolio
        },
        portfolioSingle:state => {
            return state.portfolioSingle
        },
        user:state => {
            return state.user;
        },
        error:state => {
            return state.error
        }
      
    },
    mutations: {
        changeProduct:state => {
            state.bloglists.forEach((product) => {
                product.blistHeader = "salamlar"
            })
        },
        loading:(state, payload) => {
            state.loading = payload
        },
        setUser:(state, payload) => {
            state.user = payload;
        },
        setError:(state, payload) => {
            state.error = payload
        },

        clearError:(state, payload) => {
            state.error = null
        },
        setBlog:(state, payblock) => {
            state.bloglists = payblock;
        },

        mainslider :(state, payload) => {
            state.mainslider = payload
        },

        dailySlider: (state, payload) => {
            state.dailySlider = payload
        },

        latestWork:(state, payload) => {
            state.latestWork = payload
        },

        ourTeam:(state, payload) => {
            state.ourTeam = payload
        },
        ourTeamSingle:(state, payload) => {
            state.ourTeamSingle = payload
        },

        portfolio:(state, payload) => {
            state.portfolio = payload
        },

        gallery:(state, payload) => {
            state.gallery = payload
        },

        portfolioSingle: (state, payload) => {
            state.portfolioSingle = payload
        },

        setBlogDetail:(state, payblock) => {
            state.bloglist = payblock
        }
    },
    actions: {
        addBlog:({commit}, payblock ) => {
            const meetup = {
                header:payblock.blogHeader, 
                body:payblock.blogContent
            }
            let imageUrl , key;
            firebase.database().ref('blogs').push(meetup)
                .then((data) => {
                    key = data.key;
                    return key;
                })
                .then(key => {
                    const filename = payblock.blogImage.name;
                    const ext = filename.slice(filename.lastIndexOf('.'));
                    return  firebase.storage().ref('blogs/' + key + '.' + ext).put(payblock.blogImage);
                })  
                .then(fileData => {
                    imageUrl = fileData.metadata.downloadURLs[0];
					console.log(imageUrl);
                    return firebase.database().ref('blogs').child(key).update({imageUrl:imageUrl})
                })
                .then(() => {
                    commit('setBlog', {...meetup, imageUrl:imageUrl, id:key} );
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        mainslider:({commit}, payload) => {
            const sliderArray  =  {
                sliderHeader        : payload.sliderHeader,
                sliderMiniHeader    : payload.sliderMiniHeader,
                sliderLink          : payload.sliderLink
            }
            let imageUrl , key;
            firebase.database().ref('slider').push(sliderArray).then((data) => {
                key = data.key;
                return key;
            })
            .then(key => {
                const filename = payload.sliderImage.name;
                const ext = filename.slice(filename.lastIndexOf('.'));
                return  firebase.storage().ref('slider/' + key + '.' + ext).put(payload.sliderImage);
            })  
            .then(fileData => {
                imageUrl = fileData.metadata.downloadURLs[0]
                return firebase.database().ref('slider').child(key).update({imageUrl:imageUrl})
            })
            .then(() => {
                commit('mainslider', {...sliderArray, imageUrl:imageUrl, id:key})
            })
            .catch((error) => {
                console.log(error);
            })
        },

        dailySlider:({commit}, payload) => {
            const dailySlider = {
                miniSliderHeader    : payload.miniSliderHeader,
                miniSliderMiniHeader: payload.miniSliderMiniHeader
            }
            Vue.http.post('https://asus-bc332.firebaseio.com/sliderText.json', dailySlider ).then((data) => {
                console.log(data)
            })
            .catch ((error) => {
                console.log(error);
            })
        },

        workSend:({commit}, payload) => {
          const workSend = {
            workHeader: payload.workHeader,
            workContent:payload.workContent,
            workCount:0
              // workImage: this.image
          }
          let workImage , key;
          firebase.database().ref('workArray').push(workSend)
            .then((data) => {
                key = data.key;
                return key;
            })
            .then(key => {
                const filename = payload.workImage.name;
                const ext = filename.slice(filename.lastIndexOf('.'));
                return firebase.storage().ref('workImage/' + key + '.' + ext).put(payload.workImage) })
                .then( fileData => {
                    workImage = fileData.metadata.downloadURLs[0]
                    return firebase.database().ref('workArray').child(key).update({workImage:workImage})
                })
                .then (() => {
                    commit('latestWork', {...workSend, workImage:workImage,id:key})
                })
                .catch((error) => {
                    console.log(error);
                })
        },

        ourSendForm:({commit}, payload) => {
            const ourSendForm = {
                ourName:payload.ourName,
                ourJob:payload.ourJob,
                ourContent:payload.ourContent,
                ourDescription:payload.ourDescription
                // imageArray:this.imageArray,
                // ourImage:this.image
            }
            
            let ourImage , imageArray= [], key;
           
            firebase.database().ref('ourArray').push(ourSendForm)
            .then((data) => {
                key = data.key;
                return key ;
            })
            .then(key => {
               const filename = payload.ourImage.name;
               const ext = filename.slice(filename.lastIndexOf('.'));
            //    for(let i = 0; i <  payload.imageArray.length ; i++ ) {
                   return firebase.storage().ref('ourImage/' + key + "." + ext).put(payload.ourImage); //  firebase.storage().ref('ourImage/' + payload.imageArray[i].name ).put(payload.imageArray[i]);
            //     }
                  
                })
                .then( fileData => {
                    console.log(fileData);
                    ourImage = fileData.metadata.downloadURLs[0]
                    return  firebase.database().ref('ourArray').child(key).update({ourImage:ourImage}); 
                  
                })
                .then (() => {
                   commit('ourTeam', {...ourSendForm, ourImage:ourImage,  id:key});
                })
                .catch((error) => {
                    console.log(error);
                })
          
        },

        sendFormPortfolio:({commit}, payload) => {
            const fromArray = {
                portHeader  : payload.portHeader,
                portContent : payload.portContent,
                portTime    : payload.portTime
            }
            let portImage, key;
            firebase.database().ref('portfolio').push(fromArray)
                .then((data) => {
                    key = data.key;
                    return key;
                })
                .then(key => {
                    const filename = payload.portImage.name;
                    const ext = filename.slice(filename.lastIndexOf('.'));
                   
                    return firebase.storage().ref('portfolio/' + key + '.' + ext).put(payload.portImage);
                })

                .then((fileData) => {
                    portImage = fileData.metadata.downloadURLs[0];
                    return firebase.database().ref('portfolio').child(key).update({portImage:portImage})
                })
                .then(() => {
                    commit('portfolio', {...fromArray, portImage:portImage, id:key })
                })

                .catch((error) => {
                    console.log(error);
                });
        },

        sendGallery : ({commit}, payload) => {
            const fileArray = {
                galHeader  :  payload.galHeader,
                galCat   :  payload.galCat
            }

            let galImage, key;
            firebase.database().ref('gallery').push(fileArray)
                .then((data) => {
                    key = data.key;
                    return key;
                })
                .then(key => {
                    const fileName = payload.galImage.name;
                    const ext       = fileName.slice(fileName.lastIndexOf('.'));
                    return firebase.storage().ref('gallery/' + key + '.' + ext).put(payload.galImage)
                })
                .then(fileData => {
                    galImage = fileData.metadata.downloadURLs[0];
                    return firebase.database().ref('gallery').child(key).update({galImage:galImage});
                })
                .then(() => {
                    commit('gallery', {...fileArray, galImage:galImage, id:key});
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        updateThem:({commit}, payload) => {

            const getInfo = {
                portHeader:payload.updateHeader,
                portContent:payload.updateContent,
                portTime:payload.updateTime
            }
           let  portImage;
            firebase.database().ref().child('/portfolio/' + payload.updateId).update(getInfo)
                .then(() => {
                    const fileName = payload.updateImage.name;
                    const ext = fileName.slice(fileName.lastIndexOf('.'));
                    return  firebase.storage().ref('portfolio/' + payload.updateId + ' ' + ext).put(payload.updateImage)
                })
                .then((fileData) => {
                    portImage = fileData.metadata.downloadURLs[0];
                    return firebase.database().ref('portfolio').child(payload.updateId).update({portImage:portImage})
                })
                .catch((error)=>{
                    console.log(error)
                })
        },
        sendGallery:({commit}) => {
            commit('loading', true);
            firebase.database().ref('gallery').once('value')
                .then((data) => {
                    const gallery = [];
                    const obj = data.val();

                    for (let key in obj) {
                        gallery.push({
                            id:obj[key].id,
                            galCat:obj[key].galCat,
                            galHeader:obj[key].galHeader,
                            galImage:obj[key].galImage
                        })
                    }
                    commit('gallery', gallery );
                    commit('loading', false);
                })
                .catch((error) => {
                    console.log(error);
                    commit('loading', true);
                })
            // Vue.http.get('https://asus-bc332.firebaseio.com/gallery.json').then((data) => {
            //     if(data) {
            //         commit('gallery', data.body)
            //     }
            // })
        },
        sendFilter:({commit}) => {
            commit('loading', true);
            firebase.database().ref('blogs').once('value')
                .then((data) => {
                    const filter = [];
                    const obj = data.val();

                    for (let key in obj) {
                        filter.push({
                            id:obj[key].id,
                            body:obj[key].body,
                            header:obj[key].header,
                            imageUrl:obj[key].imageUrl
                        })
                    }
                    commit('setBlog', filter );
                    commit('loading', false);
                })
                .catch((error) => {
                    console.log(error);
                    commit('loading', true);
                })
        },
        getBlog:({commit}) => {
            Vue.http.get('https://asus-bc332.firebaseio.com/blogs.json').then((blog) => {
                if(blog) {
                    commit('setBlog', blog.body );
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },
        getWorkSend: ({commit}) => {
            Vue.http.get('https://asus-bc332.firebaseio.com/workArray.json').then((blog) => {
                if(blog) {
                    commit('latestWork', blog.body );
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },
        getSlider:({commit}) => {
            Vue.http.get('https://asus-bc332.firebaseio.com/slider.json')
                .then((data) => {
                    if(data) {
                        commit('mainslider', data.body);
                    }
                })
        },
        getMiniSlider:({commit}) => {
            Vue.http.get('https://asus-bc332.firebaseio.com/sliderText.json').then((data) => {
                if(data) {
                    commit('dailySlider', data.body)
                }
            })
            .catch((error) => {
                console.log(error)
            })
        },

        getOurArray:({commit}) => {
            Vue.http.get('https://asus-bc332.firebaseio.com/ourArray.json').then((data) => {
                if(data) {
                    commit('ourTeam', data.body);
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },
        getportfolio:({commit}) => {
            Vue.http.get('https://asus-bc332.firebaseio.com/portfolio.json').then((data) => {
                if(data) {
                    commit('portfolio', data.body)
                }
            })
        },
        deleteportfolio: ({commit}, itemId) => {
          return firebase.database().ref('portfolio').child(itemId).remove();
        },
        getportfolioSingle:({commit}, router) => {
            Vue.http.get('https://asus-bc332.firebaseio.com/portfolio/' + router + '.json').then((data) => {
                if(data) {
                    commit('portfolioSingle', data.body)
                }
            })
        },
        getOurSingleArray:({commit}, router) => {
            Vue.http.get('https://asus-bc332.firebaseio.com/ourArray/' + router + '.json').then((data) => {
                if(data) {
                    commit('ourTeamSingle', data.body);
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },
        blogSingle:({commit}, router) => {
            Vue.http.get('https://asus-bc332.firebaseio.com/blogs/' + router +'.json').then((blog) => {
                if(blog) {
                    commit('setBlogDetail', blog.body);
                }
            }).catch((error) => {
              console.log(error);
            })
        },

        changeProduct:context => {
          setTimeout(function(){
            context.commit('changeProduct');
          }, 3000)
        },
        signUserUp:({commit}, payload) => {
            firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(payload.email, payload.password)
            .then((user) => {
                const newUser = {
                    id: user.uid,
                    registeredMeetups:[]
                }
                commit('setUser', newUser );
                commit('clearError', null)
            }).catch(error => {
                commit('setError', error)
            })
        },

        signUser: ({commit}, payload) => {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then ((user) => {
                    const newUser = {
                        id: user.uid,
                        registeredMeetups:[]
                    }
                    commit('setUser', newUser );
                    commit('clearError', null)
                }).catch ((error) => {
                    commit('setError', error)
                })
        },
        
        logout ({commit}) {
            firebase.auth().signOut();
            commit('setUser', null )
        },
        autoSignIn ({commit}, payload) {
            commit('setUser', {id:payload.uid, registeredMeetups: [payload.email, payload.displayName]} );
        }
    }

})