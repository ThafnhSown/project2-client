import { Link } from "react-router-dom";
function BookCard({ book }) {
  const noImage =
    "https://firebasestorage.googleapis.com/v0/b/sopy-1858b.appspot.com/o/files%2Fimages%2Fno-image.png?alt=media&token=7761c26b-b363-45a2-ab1b-bc483172ac72&_gl=1*t8zwm7*_ga*MTU2MDk5NTgyNC4xNjg1OTg0NDMz*_ga_CW55HF8NVT*MTY4NjY1MTY4MC4xMi4xLjE2ODY2NTE4MDQuMC4wLjA.";
  return (
    <Link to={`/book/${book._id}`}>
      <ul>
        <li>
          <img alt="book" src={book?.image ? book?.image : noImage} />
        </li>
        <li>
          <div style={{ display: "flex" }}>
            <p>Title: </p>
            <p>{book?.title}</p>
          </div>
        </li>
        <li>
          <div className="wrap" style={{ display: "flex" }}>
            <p>Author: </p>
            <p>{book?.author}</p>
          </div>
        </li>
        <li>
          <div className="wrap" style={{ display: "flex" }}>
            <p>Year: </p>
            <p>{book?.year}</p>
          </div>
        </li>
        <li>
          <div className="wrap" style={{ display: "flex" }}>
            <p>Publisher: </p>
            <p>{book?.publisher}</p>
          </div>
        </li>
      </ul>
    </Link>
  );
}

export default BookCard;
