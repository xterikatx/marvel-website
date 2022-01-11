import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { ResultCard } from "../../components/ResultCard";
import api from "../../api";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [datas, setDatas] = useState([]);

  const fetchApi = useCallback(async () => {
    const { data } = await api.get(`comics?title=${query}`);
    setDatas(data);
  }, [query]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi, query]);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <form>
              <input
                type="text"
                placeholder="Procure por um quadrinho :)"
                value={query}
                onChange={(event) => {
                  event.preventDefault();
                  setQuery(event.target.value);
                }}
              />
            </form>
          </div>

          {datas.data?.results?.length > 0 && (
            <ul className="results">
              {datas.data?.results?.map((comic) => (
                <li key={comic.id}>
                  <ResultCard comic={comic} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
