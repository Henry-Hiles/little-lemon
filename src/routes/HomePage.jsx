import { About } from "../components/About"
import { Jumbo } from "../components/Jumbo"
import { Specials } from "../components/Specials"
import { Testimonials } from "../components/Testimonials"

export const HomePage = () => (
	<>
		<Jumbo />
		<Specials />
		<Testimonials />
		<About />
	</>
)
