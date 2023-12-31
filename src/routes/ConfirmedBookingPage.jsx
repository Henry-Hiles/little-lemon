import { Link } from "react-router-dom"
import "../styles/ConfirmedBookingPage.css"

export const ConfirmedBookingPage = () => (
	<section className="confirmed">
		<article>
			<h1>Booking Confirmed</h1>
			<p>
				Your booking has been confirmed.{" "}
				<Link to="/">Back to home</Link>
			</p>
		</article>
	</section>
)
