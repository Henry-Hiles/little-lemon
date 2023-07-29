import "../styles/Testimonial.css"

const Star = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		fill="currentColor"
		viewBox="0 0 16 16"
		aria-label="Star"
	>
		<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
	</svg>
)

export const Testimonial = ({ name, image, review }) => (
	<article className="testimonial">
		<section className="row testimonyRow">
			<img src={image} alt={`Image of ${name}`} />{" "}
			<section className="right">
				<span className="name">{name}</span>
				<section className="stars">
					<Star /> <Star /> <Star /> <Star /> <Star />
				</section>
			</section>
		</section>
		<p>{review}</p>
	</article>
)
