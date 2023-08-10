import { Link } from "react-router-dom";
import defaultCover from "../../assets/cover_not_found.jpg";
import "./BookCoverCard.css";
function BookCoverCard({ book }) {
  const bookWithCover = {
    ...book,
    cover_img: book.cover_id
      ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
      : defaultCover,
  };

  return (
    <>
      <div className="bookcovercontainer">
        <Link to={`/bookinfo/${book.id}`}>
          <div>
            {/* <p>{bookWithCover.title}</p> */}
            <img src={bookWithCover.cover_img} alt={bookWithCover.title} />
          </div>
        </Link>
      </div>
    </>
  );
}

export default BookCoverCard;

// `/bookinfo/${book.id}`
