import { Link } from "react-router-dom"
import "../styles/Special.css"

export const Special = ({ image, title, price, children }) => (
	<section className="column">
		<img src={image} alt="Picture of Food" />
		<article>
			<section className="row specialRow">
				<h3>{title}</h3>
				<span>${price}</span>
			</section>
			<p>{children}</p>
			<Link>Order a delivery</Link>
		</article>
	</section>
)
