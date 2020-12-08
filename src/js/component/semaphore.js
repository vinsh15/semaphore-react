import React, { useState } from "react";

//create your first component
export function Semaphore() {
	const [light, setLight] = useState("");

	const redON = e => {
		if (light != "red") {
			setLight("red");
		} else setLight("");
	};
	const yellowON = e => {
		if (light != "yellow") {
			setLight("yellow");
		} else setLight("");
	};
	const greenON = e => {
		if (light != "green") {
			setLight("green");
		} else setLight("");
	};

	return (
		<div className="container text-center mt-5 d-flex flex-column align-items-center">
			<div className="palito" />
			<div className="cuerpo">
				<div
					className={light == "red" ? "red lightON" : "red"}
					onClick={redON}
				/>
				<div
					className={light == "yellow" ? "yellow lightON" : "yellow"}
					onClick={yellowON}
				/>
				<div
					className={light == "green" ? "green lightON" : "green"}
					onClick={greenON}
				/>
			</div>
		</div>
	);
}
