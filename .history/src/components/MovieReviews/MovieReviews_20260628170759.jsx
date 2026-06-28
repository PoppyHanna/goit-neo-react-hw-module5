import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../moviesService";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchReviews = async () => {
      try {
        const data = await getMovieReviews(movieId);
        if (data.length === 0) {
          setReviews([]);
        } else setReviews(data);
      } catch (error) {
        console.error("Error loading reviews!!!", error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className={css.review}>
            <h3 className={css.author}>{review.author}</h3>
            <p className={css.content}>{review.content}</p>
            <p className={css.date}>
              <em>
                Published on {new Date(review.created_at).toLocaleDateString()}
              </em>
            </p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}
