import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchAppBar from "./components/SearchAppBar";
import Tour from "./components/pages/Tour";

function App() {
	return (
		<Router>
			<SearchAppBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<Tour />} />
			</Routes>
		</Router>
	);
}

export default App;
