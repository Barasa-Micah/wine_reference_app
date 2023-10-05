import React from 'react';
import './ReviewList.css';

function ReviewList() {
  const reviews = [
    { id: 1, rating: 5, reviewText: "Excellent!" },
    { id: 2, rating: 4, reviewText: "Great product!" },
    { id: 3, rating: 3, reviewText: "Average." },
    { id: 4, rating: 2, reviewText: "Not so good." },
    { id: 5, rating: 1, reviewText: "Terrible." },
  ];

  const limitedReviews = reviews.filter((review) => review.rating >= 1 && review.rating <= 5);

  return (
    <div className="review-list">
      <h2>Customer Reviews</h2>
      <ul>
        {limitedReviews.length > 0 ? (
          limitedReviews.map((review) => (
            <li key={review.id} className="review-item">
              <p className="review-rating">Rating: {review.rating}</p>
              <p className="review-text">{review.reviewText}</p>
            </li>
          ))
        ) : (
          <li className="no-reviews">No reviews available</li>
        )}
      </ul>
    </div>
  );
}

export default ReviewList;
