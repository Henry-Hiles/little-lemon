import { render, screen } from "@testing-library/react"
import { BookingForm } from "./components/BookingForm"
import "@testing-library/jest-dom"
import { initializeTimes, updateTimes } from "./components/Main"

test("Renders the BookingForm heading", () => {
	const availableTimes = ["17:00"]
	render(<BookingForm availableTimes={availableTimes} />)
	const headingElement = screen.getByText("Choose date")
	expect(headingElement).toBeInTheDocument()
})

test("Returns a correct array of times", () => {
	expect(initializeTimes()).toHaveLength(6)
	expect(initializeTimes()[0]).toMatch(/\d{2}:\d{2}/)
})

test("Returns the same value provided in the state", () => {
	const times = initializeTimes()
	expect(updateTimes(times, "2022-02-04")).toBe(times)
})
