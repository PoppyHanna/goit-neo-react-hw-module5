import { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";
import { getMovieDetails } from "../../moviesService";
import styles from "./MovieDetailsPage.module.css";

const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
 
export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const backBtn = useRef(location.state?.from ?? "/movies");

    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovieDetailes = async () => {
            try {
                const data = await getMovieDetails(movieId);
                setMovieData(data);
            } catch (error) {
                console.error("Error loading movies!!!", error);
            }
        };
        fetchMovieDetailes();
    }, [movieId]);

    if (!movieData) return <p>Loading...</p>

    return (
        <div className={styles.btn}>
            {/* <button onClick={() => navigate(backBtn.current)} className={styles.linkBtn}> */}
            <button  className={styles.linkBtn}>
                <Link to={backBtn.current}>⬅ Go back</Link>
            </button>

            <h2 className={styles.title}>{movieData.title}</h2>
            <img
                src={
                movieData.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                    : defaultImg
                }
                width={250}
                alt="poster"
            />
            <p className={styles.textWhite}>{movieData.overview}</p>

            <div className={styles.nav}>
                <Link to="cast" className={styles.link}>
                Cast
                </Link>
                <Link to="reviews" className={styles.link}>
                Reviews
                </Link>
            </div>

            <Outlet />
        </div>  
    );

} 
