import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { searchMovies } from "../../moviesService.js";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { RingLoader } from "react-spinners";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") ?? "";

    useEffect(() => {
        if (!query) return;

        const fetchMovies = async () => { 
            try {
                const data = await searchMovies(query);
                setMovies(data);
            } catch (error) {
                console.error("Error loading movies!!!", error)
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
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}