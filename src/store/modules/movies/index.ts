import { Module } from 'vuex';
import { RootState } from '../../models';
import { MovieState } from './models';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state: (() => MovieState) = () => ({
  list: []
});

const namespaced = true;

const movies: Module<MovieState, RootState> = {
  namespaced,
  state,
  mutations,
  actions,
  getters
};

export default movies;
