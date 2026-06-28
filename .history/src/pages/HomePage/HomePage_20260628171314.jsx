import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../moviesService";
import styles from "./HomePage.module.css";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getTrendingMovies();
                setMovies(data);
            } catch (error) {
                console.error("Error loading movies!!!", error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Trending movies!!!</h2>
            <MovieList movies={movies} />;
        </div>
    );
}