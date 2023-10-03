import React from 'react';

function ReviewsList({ reviews }) {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Rating: {review.rating}</p>
            <p>{review.reviewText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewsList;