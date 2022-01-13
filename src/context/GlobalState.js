import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  fav: JSON.parse(localStorage.getItem("fav")) || [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(state.fav));
  }, [state]);

  // actions
  const addComicToFav = (comic) => {
    dispatch({ type: "ADD_COMIC_TO_FAV", payload: comic });
  };

  const removeComicFromFav = (id) => {
    dispatch({ type: "REMOVE_COMIC_FROM_FAV", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        fav: state.fav,
        addComicToFav,
        removeComicFromFav,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
