import "./home.styles.css";

import Hero from "./sections/Hero";
import Intelligence from "./sections/Intelligence";
import Method from "./sections/Method";

function Home() {
	return (
		<section className="home">
			<Hero />
			<Method />
			<Intelligence />
		</section>
	);
}

export default Home;
