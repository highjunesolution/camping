import { useParams } from "react-router";
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useAuth } from "@clerk/react";
import { checkOut } from "@/api/booking";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
console.log("key", import.meta.env.VITE_STRIPE_KEY)

const Checkout = () => {
    const { id } = useParams();
    const { getToken } = useAuth();
    const fetchClientSecret = async () => {
      try {
        const token = await getToken()
        const res = await checkOut(token, id)
        
        return res.data.clientSecret
      } catch (error) {
        console.log(error)
      }
    }
    const options = { fetchClientSecret };
  return (
     <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
export default Checkout