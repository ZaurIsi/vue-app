import {store} from './index';

export default (to, from, next) => {
        if(store.getters.user) {
            next();
        }else {
            next('/login-register')
        }
}

