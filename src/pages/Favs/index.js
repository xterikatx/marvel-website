import React, { useContext } from "react";
import { ComicCard } from "../../components/ComicCard";
import { GlobalContext } from "../../context/GlobalState";

export function Favs() {
  const { fav } = useContext(GlobalContext);
  console.log(fav);
  return (
    <div className="comic-page">
    <div className="container">
      <div className="header">
        <h1 className="heading">Favorites</h1>

        <span className="count-pill">
          {fav.length} {fav.length > 1 ? "Comics" : "Comic"}
        </span>
      </div>

      {fav.length > 0 ? (
        <div className="comic-grid">
          {fav.map((comic) => (
            <ComicCard comic={comic} key={comic.id} type="fav" />
          ))}
        </div>
      ) : (
        <h2 className="no-comics">No comic here, try fav one =/</h2>
      )}
    </div>
  </div>
  );
}
