import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { HomePage } from "../routes/HomePage"
import { BookingPage } from "../routes/BookingPage"
import { useReducer } from "react"

export const Main = () => {
	const initializeTimes = () => [
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00"
	]

	const updateTimes = (times, date) => {
		console.log(times, date)
		return times
	}

	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		initializeTimes()
	)

	return (
		<>
			<main>
				<Routes>
					<Route index element={<HomePage />} />
					<Route
						path="/book"
						element={
							<BookingPage
								availableTimes={availableTimes}
								dispatch={dispatch}
							/>
						}
					/>
				</Routes>
			</main>
		</>
	)
}
