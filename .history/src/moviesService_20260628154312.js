import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjkzMjliMzVmZTc4NjI4NDUzOWEyODE4NGJlOTc5MCIsIm5iZiI6MTc0MjM0MjMwOC4wNzYsInN1YiI6IjY3ZGEwOGE0NmQ1NmE5OTFhN2E2YmRmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohQfE1IzUnzKhhaI4axDBIOBF9fts_r0uvKgXhOEGMQ";

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: API_TOKEN,
    },
});

export const getTrendingMovies = async () => { 
    const response = await axiosInstance.get("/trending/movie/day");
    return response.data.results;
};

export const searchVovies = async (query) => {
    const response = await axiosInstance.get("/search/movie", {
        params: { query },
    });
    return response.data.results;
};

