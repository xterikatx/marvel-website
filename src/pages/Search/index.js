import { useCallback, useEffect, useState } from "react";
import { ResultCard } from "../../components/ResultCard";
import api from "../../api";
import { Loader } from "../../components/Loader";
import { NoResults } from "../NoResults";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApi = useCallback(async () => {
    setLoading(true);
    const { data } = await api.get(`comics?title=${query}&noVariants=false`);

    setTimeout(() => {
      if (datas?.length === 0) setLoading(false);
      setLoading(false);
    }, 2000);

    setDatas(data);
  }, [datas?.length, query]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi, query]);
  console.log(datas.data?.results)
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <form>
              <input
                type="text"
                placeholder="Look for a comic... :)"
                value={query}
                onChange={(event) => {
                  event.preventDefault();
                  setQuery(event.target.value);
                }}
              />
            </form>
          </div>

          {!!loading &&
            datas.data?.results.length === 0 &&
            !(query.length === 0) && (
              <div className="loader-container">
                <Loader visible={loading} />
              </div>
            )}

          {!loading && datas.data?.results.length === 0 && <NoResults />}

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
