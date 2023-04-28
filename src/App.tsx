import Characters from "./components/Characters";
import Content from "./components/Episodes";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/home" element={<Home />} />
		</Routes>
	);
}

export default App;
