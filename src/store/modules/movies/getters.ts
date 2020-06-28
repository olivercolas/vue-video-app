import { RootState } from '@/store/models';
import { GetterTree } from 'vuex';
import { MovieState } from './models';

const getters: GetterTree<MovieState, RootState> = {
  getMovieById: (state) => (id: string) => state.list.find((movie) => movie.id === +id)
};

export default getters;
