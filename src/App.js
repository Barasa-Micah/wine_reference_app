import React from "react";
import Review from "./component/Review";
import ReviewList from "./component/ReviewList";
import PaymentPrompt from "./component/PaymentPrompt";



function onSelectOption(option){
  console.log('Selected option:', option);
}

function App() {
  return (
    <div> 
       <h1>Wine App</h1>
      <Review/>
      <ReviewList/>
      <PaymentPrompt />
    </div>
  );
}

export default App;
