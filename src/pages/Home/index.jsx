import "./home.styles.css";

import Hero from "./sections/Hero";
import Method from "./sections/Method";

function Home() {
	return (
		<section className="home">
			<Hero />
			<Method />
		</section>
	);
}

export default Home;
