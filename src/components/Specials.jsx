import { Link } from "react-router-dom"
import { Special } from "./Special"
import "../styles/Specials.css"

export const Specials = () => (
	<section className="specials">
		<section className="row header-row">
			<h2>This week&lsquo;s specials!</h2>
			<Link className="button-link">Online Menu</Link>
		</section>
		<section className="row specials-row">
			<Special
				title="Greek salad"
				image="/images/Food1.jpg"
				price="12.99"
			>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Molestias incidunt cum culpa nam officiis aliquam repudiandae
				beatae facilis soluta odio, perferendis nihil aspernatur non
				totam amet quas adipisci quidem ipsa!
			</Special>
			<Special title="Bruschetta" image="/images/Food2.jpg" price="10.99">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Molestias incidunt cum culpa nam officiis aliquam repudiandae
				beatae facilis soluta odio, perferendis nihil aspernatur non
				totam amet quas adipisci quidem ipsa!
			</Special>
			<Special title="Lemon Cake" image="/images/Food3.jpg" price="8.50">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Molestias incidunt cum culpa nam officiis aliquam repudiandae
				beatae facilis soluta odio, perferendis nihil aspernatur non
				totam amet quas adipisci quidem ipsa!
			</Special>
		</section>
	</section>
)
