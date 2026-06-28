import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../moviesService";
import { RingLoader } from "react-spinners";
import styles from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // if (!movieId) return;

    const fetchReviews = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (err) {
        setError("Failed to load reviews.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (isLoading) {
    return <RingLoader color="#d422e3" size={60} />;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews available.</p>
  } 

  return (
    <div className={styles.reviewsContainer}>
      <h2>Reviews</h2>
      {reviews.map((review) => (
          <div key={review.id} className={styles.review}>
            <h3 className={styles.author}>{review.author}</h3>
            <p className={styles.content}>{review.content}</p>
            <p className={styles.date}>
              <em>
                Published on {new Date(review.created_at).toLocaleDateString()}
              </em>
            </p>
          </div>
        ))
      }
    </div>
  );
}
