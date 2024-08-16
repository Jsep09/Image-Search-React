import { useState } from "react";
import "./SearchBar.css";
const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState(" ");
  const handelFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term); // ส่ง state term ขึ้นไปยัง parent component
  };
  const handelOnChange = (event) => {
    // console.log(event.target.value);
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handelFormSubmit}>
        <label>Enter Search Term</label>
        <input onChange={handelOnChange} value={term} />
      </form>
    </div>
  );
};

export default SearchBar;
