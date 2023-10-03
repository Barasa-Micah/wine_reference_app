import Review from "./component/Review";
import ReviewList from "./component/ReviewList";


function App() {
  return (
    <div> 
       <h1>Wine App</h1>
      <Review/>
      <ReviewList/>
      <PaymentForm />
    </div>
  );
}

export default App;
