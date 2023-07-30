import { Link } from "react-router-dom"
import "../styles/ConfirmedBookingPage.css"

export const ConfirmedBookingPage = () => (
	<article className="confirmed">
		<h1>Booking Confirmed</h1>
		<p>Your booking has been confirmed.</p>
		<Link to="/">Back to home</Link>
	</article>
)
