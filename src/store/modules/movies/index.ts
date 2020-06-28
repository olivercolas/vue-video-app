import { Module } from 'vuex';
import { RootState } from '../../index';
import mutations from './mutations';
import actions from './actions';

export type Movie = {
  title: string;
  poster: string;
  video: string;
};
export type MovieState = Movie[];

const state: (() => MovieState) = () => [];

const namespaced = true;

export const movies: Module<MovieState, RootState> = {
  namespaced,
  state,
  mutations,
  actions
};
