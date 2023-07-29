import { useState } from "react"
import "../styles/BookingForm.css"

export const BookingForm = () => {
	const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
	const [availableTimes] = useState([
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00"
	])
	const [time, setTime] = useState(availableTimes[0])
	const [guests, setGuests] = useState(1)
	const [occasion, setOccasion] = useState("None")

	return (
		<form
			className="booking-form"
			onSubmit={(event) => {
				event.preventDefault()
				console.log(date, time, guests, occasion)
			}}
		>
			<label htmlFor="res-date">Choose date</label>
			<input
				value={date}
				onChange={(event) => setDate(event.target.value)}
				type="date"
				id="res-date"
			/>

			<label htmlFor="res-time">Choose time</label>
			<select
				value={time}
				onChange={(event) => setTime(event.target.value)}
				id="res-time"
			>
				{availableTimes.map((time) => (
					<option key={time}>{time}</option>
				))}
			</select>

			<label htmlFor="guests">Number of guests</label>
			<input
				type="number"
				min="1"
				max="10"
				id="guests"
				value={guests}
				onChange={(event) => setGuests(event.target.value)}
			/>

			<label htmlFor="occasion">Occasion</label>
			<select
				id="occasion"
				value={occasion}
				onChange={(event) => setOccasion(event.target.value)}
			>
				<option>None</option>
				<option>Birthday</option>
				<option>Anniversary</option>
			</select>

			<input
				type="submit"
				className="submit"
				value="Make Your reservation"
			/>
		</form>
	)
}
