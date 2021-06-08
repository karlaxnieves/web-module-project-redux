import { combineReducers } from 'redux';
import favoriteMovieReducer from './favoriteMovieReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
favorite: favoriteMovieReducer,
movie: movieReducer,
})

export default rootReducer;