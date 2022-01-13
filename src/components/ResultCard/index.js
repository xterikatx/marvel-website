import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { Modal } from "../Modal";

export const ResultCard = ({ comic }) => {
  const [popUp, setPopUp] = useState(false);

  const { addComicToFav, fav } = useContext(GlobalContext);

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {comic.thumbnail.path ? (
          <img
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={`${comic.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{comic.title}</h3>
          <h4 className="release-date">{comic.pageCount} páginas</h4>
        </div>

        <div className="controls">
          <Link to="/select-comic">
            <button className="btn">Select </button>
          </Link>

          <button className="btn" onClick={setPopUp} disabled={!!popUp}>
            View details
          </button>
          <button
            className="btn"
            onClick={() => addComicToFav(comic)}
            disabled={!!fav.find((o) => o.id === comic.id)}
          >
            like ❤️
          </button>
        </div>
      </div>
      {popUp && <Modal setPopUp={setPopUp} comicID={comic.id} />}
    </div>
  );
};
