import { render, screen, fireEvent } from "@testing-library/react"
import { BookingForm } from "./components/BookingForm"
import "@testing-library/jest-dom"
import { initializeTimes } from "./components/Main"
const availableTimes = ["17:00", "18:00"]

test("Renders the BookingForm heading", () => {
	render(<BookingForm availableTimes={availableTimes} />)
	const headingElement = screen.getByText("Choose date")
	expect(headingElement).toBeInTheDocument()
})

test("Returns a correct array of times", () => {
	expect(initializeTimes()).toHaveLength(6)
	expect(initializeTimes()[0]).toMatch(/\d{2}:\d{2}/)
})

test("Guests input is required.", () => {
	render(<BookingForm availableTimes={availableTimes} />)
	const guestsInput = screen.getByLabelText("Number of guests")
	expect(guestsInput).toHaveAttribute("required")
})

test("Time input is required.", () => {
	render(<BookingForm availableTimes={availableTimes} />)
	const timeInput = screen.getByLabelText("Choose time")
	expect(timeInput).toHaveAttribute("required")
})

test("Occasion input is not required.", () => {
	render(<BookingForm availableTimes={availableTimes} />)
	const occasionInput = screen.getByLabelText("Occasion")
	expect(occasionInput).not.toHaveAttribute("required")
})

test("Date input is required.", () => {
	render(<BookingForm availableTimes={availableTimes} />)
	const dateInput = screen.getByLabelText("Choose date")
	expect(dateInput).toHaveAttribute("required")
})

test("Guests input errors correctly.", () => {
	render(<BookingForm availableTimes={availableTimes} />)

	const guestsInput = screen.getByLabelText("Number of guests")
	fireEvent.change(guestsInput, { target: { value: "23" } })
	const error = screen.getByText("Guests must be between 1 and 10.")
	expect(error).toBeInTheDocument()
})

test("Guests input does not error incorrectly.", () => {
	render(<BookingForm availableTimes={availableTimes} />)

	const guestsInput = screen.getByLabelText("Number of guests")
	fireEvent.change(guestsInput, { target: { value: "2" } })
	const error = screen.queryByText("Guests must be between 1 and 10.")
	expect(error).not.toBeInTheDocument()
})

test("Time input errors correctly.", () => {
	render(<BookingForm availableTimes={availableTimes} />)

	const timeInput = screen.getByLabelText("Choose time")
	fireEvent.change(timeInput, { target: { value: "" } })
	const error = screen.getByText("Field is required.")
	expect(error).toBeInTheDocument()
})

test("Time input does not error incorrectly.", () => {
	render(<BookingForm availableTimes={availableTimes} />)

	const timeInput = screen.getByLabelText("Choose time")
	fireEvent.change(timeInput, { target: { value: "17:00" } })
	const error = screen.queryByText("Field is required.")
	expect(error).not.toBeInTheDocument()
})

test("Date input errors correctly.", () => {
	render(<BookingForm availableTimes={availableTimes} />)

	const dateInput = screen.getByLabelText("Choose date")
	fireEvent.change(dateInput, { target: { value: "" } })
	const error = screen.getByText("Field is required.")
	expect(error).toBeInTheDocument()
})

test("Date input does not error incorrectly.", () => {
	render(<BookingForm availableTimes={availableTimes} />)

	const dateInput = screen.getByLabelText("Choose date")
	fireEvent.change(dateInput, { target: { value: "2023-03-02" } })
	const error = screen.queryByText("Field is required.")
	expect(error).not.toBeInTheDocument()
})

test("Occasion input errors correctly.", () => {
	render(<BookingForm availableTimes={availableTimes} />)

	const occasionInput = screen.getByLabelText("Occasion")
	fireEvent.change(occasionInput, { target: { value: "23" } })
	const error = screen.getByText("Invalid occasion.")
	expect(error).toBeInTheDocument()
})

test("Occasion input does not error incorrectly.", () => {
	render(<BookingForm availableTimes={availableTimes} />)

	const occasionInput = screen.getByLabelText("Occasion")
	fireEvent.change(occasionInput, { target: { value: "Other" } })
	const error = screen.queryByText("Invalid occasion.")
	expect(error).not.toBeInTheDocument()
})
