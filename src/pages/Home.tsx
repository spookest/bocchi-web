import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Characters from "../components/Characters";
import Episodes from "../components/Episodes";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Characters />
			<Episodes />
			<Footer />
		</>
	);
};

export default Home;
