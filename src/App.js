import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ted, tedx } from "./Data";

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
			<InfoSection {...ted} />
			<InfoSection {...tedx} />
		</>
	);
}

export default App;
