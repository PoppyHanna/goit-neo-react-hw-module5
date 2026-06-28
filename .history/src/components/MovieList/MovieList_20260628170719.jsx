import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div className={css.list}>
      {movies.map((movie) => (
        <div key={movie.id} className={css.listItem}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className={css.image}
            />
            <h3 className={css.movieName}>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
