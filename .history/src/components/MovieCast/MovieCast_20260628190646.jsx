import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../moviesService";
import { RingLoader } from "react-spinners";
import styles from "./MovieCast.module.css";

const defaultActorImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if (!movieId) return;
    const fetchCredits = async () => {
      setIsLoading(true);

      try {
        const data = await getMovieCredits(movieId);
        setCast(data);
      } catch (error) {
        console.error("Error loading cast!", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCredits();
  }, [movieId]);

   if (isLoading) {
    return <RingLoader color="#d422e3" size={60} />;
  }

  if (cast.length === 0) {
    return <p className={styles.title}>Actors not found.</p>
  }

  return (

    <div className={styles.container}>
      {cast.map((actor) => (
          <div key={actor.id} className={styles.info}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                  : defaultActorImg
              }
              alt={actor.name}
              width={150}
              className={styles.img}
            />
            <p className={styles.title}>{actor.name}</p>
          </div>
       ))
      }
    </div>
  );
}
