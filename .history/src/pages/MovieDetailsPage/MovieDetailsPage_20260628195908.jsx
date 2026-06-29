import { useEffect, useState } from "react";
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
    
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? "/movies";

    const [movieData, setMovieData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await getMovieDetails(movieId);
                setMovieData(data);
            } catch {
                setError("Failed to load movie details.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchMovieDetails();
    }, [movieId]);

    // if (isLoading) {
    //     return (
    //         <div className={styles.loader}>
    //         <RingLoader color="#d422e3" size={60} />
    //         </div>
    //     );
    // }

    // if (error) {
    //     return <p className={styles.error}>{error}</p>;
    // }

    return (
        <div className={styles.btn}>
            {isLoading && (
        <div className={styles.loader}>
          <RingLoader color="#d422e3" size={60} />
        </div>
      )}
            {error && <p className={styles.error}>{error}</p>}

            {(
                <Link to={backLink} className={styles.linkBtn}>
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
            )}
        </div> 
        
          
    );

} 
