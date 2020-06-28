import { ActionTree } from 'vuex';
import { RootState } from '../../index';
import { MovieState } from '.';
import { fetchMovies } from '@/api';

const actions: ActionTree<MovieState, RootState> = {
  async addMovies({ commit }) {
    const movies = await fetchMovies();
    commit('ADD_MOVIES', movies);
  }
};

export default actions;
