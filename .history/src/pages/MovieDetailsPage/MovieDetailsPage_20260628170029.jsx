import { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";
import { getMovieDetails } from "../../moviesService";
import css from "./MovieDetailsPage.module.css";

const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  
export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const backBtn = useRef(location.state?.form ?? "/movies");

    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovieDetailes = async () => {
            try {
                const data = await getMovieDetails(movieId);
                setMovieData(data);
            } catch (error) {
                console.error("Error loading movies!!!", error);
            }
        }
    }, [movieId]);
} 