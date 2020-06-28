import { fetchMovies } from '@/api';
import { ActionTree } from 'vuex';
import { RootState } from '../../models';
import { MovieState } from './models';

const actions: ActionTree<MovieState, RootState> = {
  async addMovies({ commit }) {
    const res = await fetchMovies();
    if (res) {
      commit('ADD_MOVIES', res.data.data);
    }
  }
};

export default actions;
