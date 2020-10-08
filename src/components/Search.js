import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  console.log(results);
  useEffect(() => {
    //1 way - create a helper fn
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    if (term) {
      search();
    }
    //2 way
    // (async () => {
    //   await axios.get("");
    // })();
    //3 way
    // axios.get("adf").then((res) => {
    //   console.log(res);
    // });
  }, [term]);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Topic</label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
