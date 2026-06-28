import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

const defaultPoster = "https://placehold.co/500x750?text=No+Image";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div className={styles.list}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.listItem}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultPoster}
              alt={movie.title}
              className={styles.image}
            />
            <h3 className={styles.movieName}>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
