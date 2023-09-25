import{createStore} from 'vuex';
import state from './state';
import * as actions from './actions';
import * as mutations from './mutations';
import { getters } from './getters'; // Import the getters object

const store = createStore({
    state,
    actions,
    mutations,
    getters
})

export default store;