import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const stripePromise = loadStripe('pk_test_51N7udjKM0Vmt4Z7qMik5jVNKnceZRyrcNod2nUZC0JOYcvG274uQ8dQmKxUJZJPPIeNEz2XGBM2HKAm22E8OvKGl00mXFxkCl2');

const StripeContainer = () => {
	return (
		<Elements stripe={stripePromise}>
			<PaymentForm />
		</Elements>
	)
}

export default StripeContainer;