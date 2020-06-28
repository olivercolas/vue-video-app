import { MutationTree } from 'vuex';
import { MovieState } from './index';

export const mutations: MutationTree<MovieState> = {
    ADD_MOVIES(state, payload) {
        state = payload
    },
};

export default mutations;
