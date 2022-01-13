import { useCallback, useEffect, useState } from "react";
import api from "../../api";
import { Loader } from "../Loader";
import "./styles.css";

// function that takes boolean as param to conditionally display popup
export const Modal = ({ setPopUp, comicID }) => {
  const [detailComic, setDetailComic] = useState([]);

  const fetchApi = useCallback(async () => {
    const { data } = await api.get(`comics/${comicID}`);

    setDetailComic(data.data?.results[0]);
  }, [comicID]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi, comicID]);

  return (
    <div className="PopUp">
      {/* x close window */}
      <button className="popup-x" onClick={() => setPopUp(false)}>
        X
      </button>
      <h1>{detailComic.title}</h1>
      <div className="poster-container">
        {detailComic.length === 0 ? (
          <div className="loader-popup">
            <Loader visible color="#fff"/>
          </div>
        ) : (
          <>
            {detailComic.thumbnail?.path ? (
              <>
                <img
                  src={`${detailComic.thumbnail.path}.${detailComic.thumbnail.extension}`}
                  alt={`${detailComic.title} Poster`}
                  className="poster-image"
                />
              </>
            ) : (
              <div className="filler-poster" />
            )}
            {!!detailComic.description ? (
              <section className="section-description">
                <p className="section-text-description">
                  {detailComic?.description}
                </p>
              </section>
            ) : (
              <h1 className="text-warning">
                Eita, não conseguimos identificar a descrição desse quadrinho!😭
              </h1>
            )}
          </>
        )}
      </div>
    </div>
  );
};
