import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Flow from "../pages/Flow";
import Results from "../pages/Results";

function AppRoutes() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/results" element={<Results />} />
				<Route path="/flow" element={<Flow />} />
			</Route>
		</Routes>
	);
}

export default AppRoutes;
