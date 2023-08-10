import "./SearchBar.css";

function SearchBar({ handleChange, searchBook }) {
  return (
    <div className="searchbar">
      <h2 className="brincLibrary">
        BRinc<span>Library</span>
      </h2>
      {/* <label htmlFor="search">BRinc Library</label> */}
      <input
        type="text"
        name="search"
        placeholder="search your favorite book..."
        onChange={(event) => handleChange(event)}
        value={searchBook}
      />
    </div>
  );
}

export default SearchBar;
