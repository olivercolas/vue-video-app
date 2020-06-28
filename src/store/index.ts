import Vue from 'vue';
import Vuex from 'vuex';
import movies from './modules/movies';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = {
  modules: {
    movies
  },
  strict: debug
};

export default new Vuex.Store(store);
