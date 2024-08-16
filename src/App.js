import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./Api";
import ImageList from "./components/ImageList";

const App = () => {
  const [images, setimages] = useState([]);
  async function handelSubmit(term) {
    console.log("Search with :", term);
    const results = await searchImages(term);
    setimages(results);
  }
  return (
    <div>
      <SearchBar onSubmit={handelSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
