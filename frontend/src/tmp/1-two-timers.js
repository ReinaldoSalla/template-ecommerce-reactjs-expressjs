/*
understand the css and the sizing
smooth on the way back
fixate into one when the user is hovering 
*/

import React from "react";
import "./index.css";

const slides = [
	{
		imgUrl: "https://preview.ibb.co/j8nRCQ/fashion2.jpg",
		className: "first-img"
	},
	{
		imgUrl: "https://preview.ibb.co/fm4Cmk/fashion3.jpg",
		className: "second-img"
	},
	{
		imgUrl: "https://preview.ibb.co/bMsCK5/fashion5.jpg",
		className: "third-img"
	},
	{
		imgUrl: "https://image.ibb.co/kOhL6k/img1.jpg",
		className: "forth-img"
	},
	{
		imgUrl: "https://image.ibb.co/nNmKz5/img2.jpg",
		className: "fifth-img"
	}
];

let nCalls = 0;

export default function App() {
	const [counter, setCounter] = React.useState(0);
	const [activeLabels, setActiveLabels] = React.useState(["on", "off", "off", "off", "off"]);
	const [isDirectionRight, setIsDirectionRight] = React.useState(true);
	const index = counter % slides.length;

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			setIsDirectionRight(!isDirectionRight);
		}, 2000 * 5);
		return () => clearInterval(intervalId);
	}, [isDirectionRight]);

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			setCounter(isDirectionRight ? counter + 1 : counter - 1);
		}, 2000);
		switch (index) {
			case 0:
				setActiveLabels(["on", "off", "off", "off", "off"]); 
				break;
			case 1:
				setActiveLabels(["off", "on", "off", "off", "off"]); 
				break;
			case 2:
				setActiveLabels(["off", "off", "on", "off", "off"]); 
				break;
			case 3:
				setActiveLabels(["off", "off", "off", "on", "off"]); 
				break;
			case 4:
				setActiveLabels(["off", "off", "off", "off", "on"]); 
				break;
			default:
				setActiveLabels(["off", "off", "off", "off", "off"]);
		}
		return () => clearInterval(intervalId);
	}, [counter, index, isDirectionRight]);

	nCalls++;
	console.log(`call nº${nCalls}`);
	console.log(isDirectionRight);

	return (
		<div className="slidershow middle">
			<div className={slides[index].className}>
				<div className="slides">
					<input 
						type="radio" 
						name="r" 
						id="r1" 
						onClick={() => setCounter(0)}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r2" 
						onClick={() => setCounter(1)}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r3" 
						onClick={() => setCounter(2)}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r4" 
						onClick={() => setCounter(3)}
					/>
					<input 
						type="radio" 
						name="r" 
						id="r5" 
						onClick={() => setCounter(4)}
					/>
					<div className="slide s1">
						<img src={slides[0].imgUrl} alt=""/>
					</div>
					<div className="slide">
						<img src={slides[1].imgUrl} alt=""/>
					</div>
					<div className="slide">
						<img src={slides[2].imgUrl} alt=""/>
					</div>
					<div className="slide">
						<img src={slides[3].imgUrl} alt=""/>
					</div>
					<div className="slide">
						<img src={slides[4].imgUrl} alt=""/>
					</div>
					<div className="navigation">
						<label 
							htmlFor="r1" 
							className="bar"
							id={`first-label-${activeLabels[0]}`}
						>
						</label>
						<label 
							htmlFor="r2" 
							className="bar"
							id={`second-label-${activeLabels[1]}`}
						>
						</label>
						<label 
							htmlFor="r3" 
							className="bar"
							id={`third-label-${activeLabels[2]}`}
						>
						</label>
						<label 
							htmlFor="r4" 
							className="bar"
							id={`forth-label-${activeLabels[3]}`}
						>
						</label>
						<label 
							htmlFor="r5" 
							className="bar"
							id={`fifth-label-${activeLabels[4]}`}
						>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}