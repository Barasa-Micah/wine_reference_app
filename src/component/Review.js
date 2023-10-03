import React, { useState } from 'react';


function Review({ wineId }) {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleReviewTextChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    // const response = await fetch( {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ wineId, rating, reviewText }),
    // });

 
    if (response.ok) {
      setRating('');
      setReview('');
    }
  };

//   return (
//     <div>
//       <h2>Add a Review</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="rating">Rating:</label>
//           <input type="number" id="rating" value={rating} onChange={handleRatingChange} />
//         </div>
//         <div>
//           <label htmlFor="reviewText">Review:</label>
//           <textarea id="reviewText" value={reviewText} onChange={handleReviewTextChange}></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
}
export default Review;