import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { searchMovies } from "../../moviesService.js";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { RingLoader } from "react-spinners";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    useEffect(() => {
        if (!query) return;

        const fetchMovies = async () => { 
            setIsLoading(true);

            try {
                const data = await searchMovies(query);
                setMovies(data);
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false);
            }
        };
        fetchMovies();
    }, [query]);

    const handleSearch = value => {
        setSearchParams({ query: value });
    };

    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
            {isLoading && <RingLoader color="#d422e3" size={60} />}
            {!isLoading && movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}