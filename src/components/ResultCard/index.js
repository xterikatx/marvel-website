import { useState } from "react";
import { Modal } from "../Modal";

export const ResultCard = ({ comic }) => {
  const [popUp, setPopUp] = useState(false);

  console.log(comic);
  console.log(`${comic.thumbnail.path}.${comic.thumbnail.extension}`);
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
          <button className="btn">Selecionar </button>

          <button className="btn" onClick={setPopUp}>
            Exibir detalhes
          </button>
        </div>
      </div>
      {popUp && <Modal setPopUp={setPopUp} />}
    </div>
  );
};
