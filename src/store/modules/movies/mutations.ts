import { MutationTree } from 'vuex';
import { MovieState } from './models';

const mutations: MutationTree<MovieState> = {
  ADD_MOVIES(state, payload) {
    state.list = payload;
  }
};

export default mutations;
