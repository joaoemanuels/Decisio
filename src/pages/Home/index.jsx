import "./home.styles.css";

import Cta from "./sections/Cta";
import Hero from "./sections/Hero";
import Intelligence from "./sections/Intelligence";
import Method from "./sections/Method";

function Home() {
	return (
		<section className="home">
			<Hero />
			<Method />
			<Intelligence />
			<Cta/>
		</section>
	);
}

export default Home;
