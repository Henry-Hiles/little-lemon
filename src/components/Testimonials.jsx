import { Testimonial } from "./Testimonial"
import "../styles/Testimonials.css"

export const Testimonials = () => (
	<section className="testimonials">
		<h2>Testimonials</h2>
		<section className="row testimonialRow">
			<Testimonial
				name="Barry Allen"
				review="Little Lemon is an absolute gem! The food is bursting with flavors, and the staff is so welcoming. I can't get enough of their lemon-infused dishes!"
				image="https://randomuser.me/api/portraits/men/73.jpg"
			/>
			<Testimonial
				name="John Doe"
				review="I'm in love with Little Lemon! Each dish is a delightful surprise of taste and presentation. Highly recommend trying their greek salad — it's divine!"
				image="https://randomuser.me/api/portraits/men/75.jpg"
			/>
			<Testimonial
				name="Herman Diaz"
				review="A culinary delight! Little Lemon's menu is creative and impressive. The ambiance is cozy, making it the perfect spot for a memorable dining experience."
				image="https://randomuser.me/api/portraits/men/83.jpg"
			/>
			<Testimonial
				name="Sebastian Lee"
				review="Little Lemon brings the Mediterranean coast to our city! The flavors transport me to a sunny paradise with each bite. It's a culinary journey you don't want to miss!"
				image="https://randomuser.me/api/portraits/men/21.jpg"
			/>
		</section>
	</section>
)
