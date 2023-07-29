import { Link } from "react-router-dom"
import { NavLink } from "./NavLink.jsx"
import "../styles/Header.css"

export const Header = () => (
	<header>
		<nav>
			<Link to="/">
				<img src="/images/Asset 16@4x.png" alt="Little Lemon" />
			</Link>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<Link to="#">About</Link>
				</li>
				<li>
					<Link to="#">Menu</Link>
				</li>
				<li>
					<NavLink to="/book">Reservations</NavLink>
				</li>
				<li>
					<Link to="#">Order Online</Link>
				</li>
				<li>
					<Link to="#">Login</Link>
				</li>
			</ul>
		</nav>
	</header>
)
