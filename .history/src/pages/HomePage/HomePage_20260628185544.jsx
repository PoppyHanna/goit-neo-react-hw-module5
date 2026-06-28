import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../moviesService";
import styles from "./HomePage.module.css";
import { RingLoader } from "react-spinners";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await getTrendingMovies();
                setMovies(data);
            } catch (error) {
                setError("Failed to load trending movies.");
            } finally {
                setIsLoading(false)
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Trending Movies!!!</h2>
            {isLoading && <RingLoader color="#d422e3" size={60} />}
            {!isLoading && movies.length > 0 && (<MovieList movies={movies} />)};
        </div>
    );
}