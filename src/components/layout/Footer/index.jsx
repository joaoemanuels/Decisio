import "./footer.styles.css";

function Footer() {
	return (
		<footer class="footer">
			<div class="container footer_content">
				<div class="footer_brand">
					<h2>Decisio</h2>
					<p>© 2024 Decisio Inc. All rights reserved.</p>
				</div>

				<div class="footer_column">
					<h3>Company</h3>
					<a href="#">About Us</a>
					<a href="#">Careers</a>
					<a href="#">Privacy Policy</a>
				</div>

				<div class="footer_column">
					<h3>Product</h3>
					<a href="#">Features</a>
					<a href="#">Benchmarks</a>
					<a href="#">API</a>
				</div>

				<div class="footer_column">
					<h3>Social</h3>
					<div class="socials">
						<div class="icon"></div>
						<div class="icon"></div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
