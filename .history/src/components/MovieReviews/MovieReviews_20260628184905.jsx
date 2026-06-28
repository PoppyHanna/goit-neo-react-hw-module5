import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../moviesService";
import { RingLoader } from "react-spinners";
import styles from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const fetchReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error("Error loading reviews!!!", error);
      }
    };

    fetchReviews();
  }, [movieId]);

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
