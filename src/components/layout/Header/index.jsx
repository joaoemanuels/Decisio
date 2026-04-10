import { Link } from "react-router-dom";
import "./header.styles.css";

function Header() {
	return (
		<header className="header">
			<div className="container">
				<a href="/">
					<h1 className="logo">Decisio</h1>
				</a>

				<nav className="nav">
					<a href="#">About</a>
					<a href="#">History</a>
					<a href="/docs">Docs</a>
				</nav>

				<Link to="/flow">
					<button className="btn">Start Decision</button>
				</Link>
			</div>
		</header>
	);
}

export default Header;
