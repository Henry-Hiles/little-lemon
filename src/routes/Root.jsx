import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer.jsx"
import { Header } from "../components/Header.jsx"

export const Root = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
