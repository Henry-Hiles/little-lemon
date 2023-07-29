import { Link } from "react-router-dom"
import "../styles/Footer.css"

export const Footer = () => (
	<footer>
		<img src="/images/footer-logo.png" alt="Little Lemon Logo" />
		<section>
			<h3>Doormat Navigation</h3>
			<a href="#">Home</a>
			<a href="#">About</a>
			<a href="#">Menu</a>
			<Link to="/book">Reserve a table</Link>
			<a href="#">Order Online</a>
			<a href="#">Login</a>
		</section>
		<section>
			<h3>Contact</h3>
			<a href="#">Address</a>
			<a href="#">Phone number</a>
			<a href="#">Email</a>
		</section>
		<section>
			<h3>Social Media Links</h3>
			<a href="#">Twitter</a>
			<a href="#">Instagram</a>
			<a href="#">Threads</a>
		</section>
	</footer>
)
