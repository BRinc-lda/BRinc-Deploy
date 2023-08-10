import "./Search.css";
import NavBar from "../../components/NavBar/NavBar";
import BookList from "../../components/BookList/BookList";
import NavBarMobile from "../../components/NavBarMobile/NavBarMobile";

function Search() {
  return (
    <div className="searchpage">
      <NavBar />
      <div className="booklistcontainer">
        <BookList />
      </div>
      <NavBarMobile />
    </div>
  );
}

export default Search;
