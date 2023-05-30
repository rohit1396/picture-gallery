import React, { useEffect, useState } from "react";
import "./App.css";
import { clientKey } from "./data";
import Photo from "./Photo";

const clientID = `?client_id=${clientKey}`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("fruit");

  const getPictures = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data.results);
      console.log(data);
      console.log(photos);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPictures();
  }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      getPictures();
    }
    setPage(1);
  };
  return (
    <main className="App">
      <section>
        <h3>Picture Gallery</h3>
        <form className="form-search" onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="text"
            placeholder="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="form-button" type="submit">
            Search
          </button>
        </form>
      </section>
      {/* photo section */}
      <section className="photos">
        {photos.map((photo) => {
          return <Photo key={photo.id} photo={photo} />;
        })}
      </section>
      <div className="loading">{loading && <p>...Loading</p>}</div>
    </main>
  );
}

export default App;
