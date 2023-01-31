import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions";

const initialStateFavorite = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialStateFavorite, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES: {
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    }
    case ADD_FAVORITE: {
      let favoriteMovie = {
        id: action.payload.id,
        title: action.payload.title,
      };
      return {
        ...state,
        favorites: [...state.favorites, favoriteMovie],
      };
    }
    case REMOVE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    }
    default:
      return state;
  }
};

export default reducer;
