import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../moviesService";
import styles from "./MovieDetailsPage.module.css";
import { RingLoader } from "react-spinners";

const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
 
export default function MovieDetailsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? "/movies");

    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const data = await getMovieDetails(movieId);
                setMovieData(data);
            } catch (error) {
                console.error("Error loading movies!!!", error);
            }
        };
        fetchMovieDetails();
    }, [movieId]);

    if (!movieData) return <p>Loading...</p>

    return (
        <div className={styles.btn}>
           
            <Link to={backLink.current} className={styles.linkBtn}>
                ⬅ Go back
            </Link>
           

            <h2 className={styles.title}>{movieData.title}</h2>
            <img
                src={
                movieData.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
                    : defaultImg
                }
                width={250}
                alt={movieData.title}
            />
            <p className={styles.textWhite}>{movieData.overview}</p>

            <div className={styles.nav}>
                <NavLink to="cast" className={styles.link}>
                Cast
                </NavLink>
                <NavLink to="reviews" className={styles.link}>
                Reviews
                </NavLink>
            </div>

            <Outlet />
        </div>  
    );

} 
