import { render, screen } from "@testing-library/react"
import { describe, expect } from "vitest"
import { BookingForm } from "./components/BookingForm.jsx"

describe("Renders the BookingForm heading", () => {
	const availableTimes = ["17:00"]
	render(<BookingForm availableTimes={availableTimes} />)
	const headingElement = screen.getByText("Choose date")
	expect(headingElement).toBeInTheDocument()
})
