import { Link } from "react-router-dom"
import "../styles/Jumbo.css"

export const Jumbo = () => (
	<section className="jumbo">
		<section>
			<h1>Little Lemon</h1>
			<h2>Chicago</h2>
			<p>
				We are a family owned Mediterranean restaurant, focused on
				traditional recipes served with a modern twist.
			</p>
			<Link className="button-link" to="/book">
				Reserve a Table
			</Link>
		</section>
		<img src="/images/Chef.jpg" alt="Image of Chef" />
	</section>
)
