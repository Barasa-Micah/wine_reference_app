import Review from "./component/Review";
import ReviewList from "./component/ReviewList";
import PaymentForm from "./component/PaymentForm";

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
