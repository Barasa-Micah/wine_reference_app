import React from 'react';

function ReviewList() {
  const reviews = [
    { id: 1, rating: 5, reviewText: "Excellent!" },
    { id: 2, rating: 4, reviewText: "Great product!" },
    { id: 3, rating: 3, reviewText: "Average." },
    { id: 4, rating: 2, reviewText: "Not so good." },
    { id: 5, rating: 1, reviewText: "Terrible." },
  ];

  
  
  const limitedReviews = reviews.filter((review) => review.rating > 0 && review.rating < 6);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {limitedReviews.length > 0 ? (
          limitedReviews.map((review) => (
            <li key={review.id}>
              <p>Rating: {review.rating}</p>
              <p>{review.reviewText}</p>
            </li>
          ))
        ) : (
          <li>No reviews available</li>
        )}
      </ul>
    </div>
  );
}

export default ReviewList;
