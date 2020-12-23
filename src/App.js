import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
	const [open, setOpen] = useState(false);

	const toggle = () => {
		setOpen(!open);
	};

	return (
		<>
			<Sidebar open={open} toggle={toggle} />
			<Navbar toggle={toggle} />

			<HeroSection />
		</>
	);
}

export default App;
