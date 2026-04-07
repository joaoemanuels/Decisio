import "./header.styles.css";

function Header() {
	return (
		<header class="header">
			<div class="container">
				<h1 class="logo">Decisio</h1>

				<nav class="nav">
					<a href="#">About</a>
					<a href="#">History</a>
					<a href="#">Docs</a>
				</nav>

				<button class="btn">Start Decision</button>
			</div>
		</header>
	);
}

export default Header;
