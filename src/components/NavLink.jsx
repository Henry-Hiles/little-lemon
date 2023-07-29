import { NavLink as Link } from "react-router-dom"

export const NavLink = ({ to, children }) => (
	<Link
		to={to}
		className={({ isActive, isPending }) =>
			isActive || isPending ? "selected" : ""
		}
	>
		{children}
	</Link>
)
