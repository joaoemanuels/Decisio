import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Flow from "../pages/Flow";

function AppRoutes() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/flow" element={<Flow />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;
