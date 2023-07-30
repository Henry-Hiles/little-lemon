import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { HomePage } from "../routes/HomePage"
import { BookingPage } from "../routes/BookingPage"
import { useReducer, useState } from "react"
import { ConfirmedBookingPage } from "../routes/ConfirmedBookingPage"
import { useNavigate } from "react-router-dom"

export const initializeTimes = () => [
	"17:00",
	"18:00",
	"19:00",
	"20:00",
	"21:00",
	"22:00"
]

export const updateTimes = (_, date) => {
	// API provided returns 404, so unable to post data. Mocking return instead.
	const day = date.getDay()
	const initialTimes = initializeTimes()
	if (day === 0) return initialTimes.slice(0, 3)
	if (day === 1) return initialTimes.slice(2, 5)
	if (day === 2) return initialTimes.slice(4, 5)
	if (day === 3) return initialTimes.slice(3, 5)
	if (day === 4) return initialTimes.slice(1, 5)
	if (day === 5) return initialTimes.slice(3, 3)
	if (day === 6) return initialTimes.slice(1, 5)
}

export const Main = () => {
	const navigate = useNavigate()
	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		initializeTimes()
	)
	const [reservationError, setReservationError] = useState("")

	const submitForm = (event) => {
		event.preventDefault()
		// API provided returns 404, so unable to post data. Mocking return instead.
		if (Math.random() > 0.8)
			setReservationError("Unable to book reservation. Please try again.")
		else navigate("/confirmed")
	}

	return (
		<>
			<main>
				<Routes>
					<Route index element={<HomePage />} />
					<Route
						path="/confirmed"
						element={<ConfirmedBookingPage />}
					/>
					<Route
						path="/book"
						element={
							<BookingPage
								availableTimes={availableTimes}
								dispatch={dispatch}
								submitForm={submitForm}
								reservationError={reservationError}
							/>
						}
					/>
				</Routes>
			</main>
		</>
	)
}
