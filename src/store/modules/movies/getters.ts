import { GetterTree } from 'vuex';
import { MovieState } from './models';
import { RootState } from '@/store/models';

const getters: GetterTree<MovieState, RootState> = {
  getMovieById: (state) => (id: string) => {
    return state.list.find((movie) => movie.id === +id);
  }
};

export default getters;
