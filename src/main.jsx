import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { Root } from "./routes/Root.jsx"
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements
} from "react-router-dom"
import { HomePage } from "./routes/HomePage"
import { BookingPage } from "./routes/BookingPage"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route path="/" element={<HomePage />} />
			<Route path="/book" element={<BookingPage />} />
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
