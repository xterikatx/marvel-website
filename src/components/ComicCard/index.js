import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export function ComicCard({ comic, type }) {
  const { removeComicFromFav } = useContext(GlobalContext);
  return (
    <div className="comic-card">
      <div className="overlay"></div>
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={`${comic.title} Poster`}
      />
      <div className="inner-card-controls">
        <button
          className="ctrl-btn"
          onClick={() => {
            removeComicFromFav(comic.id);
          }}
        >
          <i className="fa-fw fa fa-times"></i>
        </button>
      </div>
    </div>
  );
}
