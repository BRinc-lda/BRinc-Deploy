import "./FavoriteBooks.css";
import { Link } from "react-router-dom";
import bookFour from "../../assets/harryPotterCover.jpeg";
import bookThree from "../../assets/lordOfTheRingsCover.jpeg";
import bookTwo from "../../assets/hungerGamesCover.jpeg";
import bookOne from "../../assets/theHobbitCover.jpeg";
function FavoriteBooks() {
  return (
    <>
      <h3 className="favTitle">Most Downloaded Books</h3>;
      <div className="favoriteContainer">
        <Link to="/bookinfo/OL262758W" className="bookLinks">
          <div className="imgDiv">
            <img src={bookOne} className="book-one" alt="Some Book Cover" />
          </div>
        </Link>

        <Link to="/bookinfo/OL5735363W" className="bookLinks">
          <div className="imgDiv">
            <img src={bookTwo} className="book-two" alt="Some Book Cover" />
          </div>
        </Link>

        <Link to="/bookinfo/OL27448W" className="bookLinks">
          <div className="imgDiv">
            <img src={bookThree} className="book-three" alt="Some Book Cover" />
          </div>
        </Link>

        <Link to="/bookinfo/OL82586W" className="bookLinks">
          <div className="imgDiv">
            <img src={bookFour} className="book-four" alt="Some Book Cover" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default FavoriteBooks;
