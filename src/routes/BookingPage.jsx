import { BookingForm } from "../components/BookingForm"
import "../styles/BookingPage.css"

export const BookingPage = ({ availableTimes, dispatch }) => (
	<section className="booking">
		<h1>Book a Table</h1>
		<hr />
		<BookingForm availableTimes={availableTimes} dispatch={dispatch} />
	</section>
)
