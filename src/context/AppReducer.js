export default (state, action) => {
  switch (action.type) {
    case "ADD_COMIC_TO_FAV":
      return {
        ...state,
        fav: [action.payload, ...state.fav],
      };
      case "REMOVE_COMIC_FROM_FAV":
        return {
            ...state,
            fav: state.fav.filter(
                (comic) => comic.id !== action.payload
            ),
        };
    default:
      return state;
  }
};
