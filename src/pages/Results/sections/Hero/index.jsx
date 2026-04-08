import "./hero.styles.css";

function Hero({ result }) {
	return (
		<div className="hero">
			<span>Recommendation Result</span>
			<h1>{result.primary?.name}</h1>
			<p>{result.primary?.description}</p>
		</div>
	);
}

export default Hero;
