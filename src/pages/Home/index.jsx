import "./home.styles.css";

import Hero from "./sections/Hero";
import Match from "./sections/Match";

function Home() {
	return (
		<section className="home">
			<Hero />;
			<Match />
		</section>
	);
}

export default Home;
