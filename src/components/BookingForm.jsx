import { useState } from "react"
import "../styles/BookingForm.css"

export const BookingForm = ({
	availableTimes,
	dispatch,
	submitForm,
	reservationError
}) => {
	const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
	const [time, setTime] = useState(availableTimes[0])
	const [guests, setGuests] = useState(1)
	const [occasion, setOccasion] = useState("Other")

	const [dateError, setDateError] = useState("")
	const [timeError, setTimeError] = useState("")
	const [guestsError, setGuestsError] = useState("")
	const [occasionError, setOccasionError] = useState("")

	const isFormInvalid = () =>
		guestsError !== "" ||
		dateError !== "" ||
		timeError !== "" ||
		occasionError !== ""

	const onDateChange = ({ target }) => {
		let error = ""
		if (target.value === "") error = "Field is required."
		setDateError(error)
		setDate(target.value)
		if (!error && dispatch) dispatch(target.valueAsDate)
	}

	const onTimeChange = ({ target }) => {
		let error = ""
		if (target.value === "") error = "Field is required."
		setTimeError(error)
		setTime(target.value)
	}

	const onGuestChange = ({ target }) => {
		let error = ""
		if (target.value === "") error = "Field is required."
		else if (target.value < 1 || target.value > 10)
			error = "Guests must be between 1 and 10."
		setGuestsError(error)
		setGuests(target.value)
	}

	const onOccasionChange = ({ target }) => {
		let error = ""
		if (
			target.value !== "Other" &&
			target.value !== "Birthday" &&
			target.value !== "Anniversary"
		)
			error = "Invalid occasion."
		setOccasionError(error)
		setOccasion(target.value)
	}

	return (
		<form className="booking-form" onSubmit={submitForm}>
			<label htmlFor="date">Choose date</label>
			<input
				value={date}
				required
				onChange={onDateChange}
				type="date"
				id="date"
			/>
			{dateError !== "" && <span className="error">{dateError}</span>}

			<label htmlFor="time">Choose time</label>
			<select value={time} required onChange={onTimeChange} id="time">
				{availableTimes.map((time) => (
					<option key={time}>{time}</option>
				))}
			</select>
			{timeError !== "" && <span className="error">{timeError}</span>}

			<label htmlFor="guests">Number of guests</label>
			<input
				type="number"
				required
				min="1"
				max="10"
				id="guests"
				value={guests}
				onChange={onGuestChange}
			/>
			{guestsError !== "" && <span className="error">{guestsError}</span>}

			<label htmlFor="occasion">Occasion</label>
			<select id="occasion" value={occasion} onChange={onOccasionChange}>
				<option>Other</option>
				<option>Birthday</option>
				<option>Anniversary</option>
			</select>
			{occasionError !== "" && (
				<span className="error">{occasionError}</span>
			)}

			<input
				type="submit"
				className="submit"
				disabled={isFormInvalid()}
				value="Confirm reservation"
			/>
			{reservationError !== "" && (
				<span className="error">{reservationError}</span>
			)}
		</form>
	)
}
