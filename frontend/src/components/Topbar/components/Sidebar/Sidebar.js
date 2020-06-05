import React, { 
	useState, 
	useReducer, 
	useEffect, 
	useRef,
	useContext,
	createContext,
	Fragment
} from "react";
import { 
	FaCar,
	FaBuilding
} from "react-icons/fa";
import { 
	GiSmartphone,
	GiLoincloth,
	GiHouse,
	GiIsland
} from "react-icons/gi";
import {  
	AiOutlineArrowRight,
	AiOutlineArrowLeft 
} from "react-icons/ai";
import { BsLayoutTextSidebar } from "react-icons/bs";
import "./Sidebar.css";

const LeftIcon = ({ leftIcon }) => (
	<span className="sidebar-content-left-icon">
		{leftIcon}
	</span>
);

const MiddleText = ({ text }) => (
	<span className="sidebar-content-text">
		{text}
	</span>
);

const OptionalRightIcon = ({ rightIcon }) => (
	rightIcon 
		? <span className="sidebar-content-right-icon">{rightIcon}</span>
		: null
);

const DivisibleHr = ({ divisible }) => (
	divisible ? <hr /> : null
);

const SidebarContentItem = ({ 
	leftIcon, 
	text, 
	rightIcon, 
	moveToMenu,
	divisible=true 
}) => (
	<Fragment>
		<a 
			href="/#" 
			className="sidebar-content-item"
			onClick={moveToMenu}
		>
			<LeftIcon leftIcon={leftIcon}/>
			<MiddleText text={text} />
			<OptionalRightIcon rightIcon={rightIcon}/>
		</a>
		<DivisibleHr divisible={divisible} />
	</Fragment>
);

const reference = {
	primary: "primary-off",
	electronics: "electronics-off",
	clothes: "clothes-off",
	vehicles: "vehicles-off",
	apartments: "apartments-off",
	houses: "houses-off",
	islands: "islands-off",
	height: null
};

const initialState = {
	...reference,
	primary: "primary-on"
};

const moveToPrimary = action => ({
	...reference,
	primary: "primary-on",
	height: action.payload
});

const moveToElectronics = action => ({
	...reference,
	electronics: "electronics-on",
	height: action.payload
});

const moveToClothes = action => ({
	...reference,
	clothes: "clothes-on",
	height: action.payload
});

const moveToVehicles = action => ({
	...reference,
	vehicles: "vehicles-on",
	height: action.payload
});

const moveToApartments = action => ({
	...reference,
	apartments: "apartments-on",
	height: action.payload
});

const moveToHouses = action => ({
	...reference,
	houses: "houses-on",
	height: action.payload
});

const moveToIslands = action => ({
	...reference,
	islands: "islands-on",
	height: action.payload
});

const setInitialHeight = action => ({
	...reference,
	primary: "primary-on",
	height: action.payload
});

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_INITIAL_HEIGHT":
			return setInitialHeight(action);
		case "MOVE_TO_PRIMARY":
			return moveToPrimary(action);
		case "MOVE_TO_ELECTRONICS":
			return moveToElectronics(action);
		case "MOVE_TO_CLOTHES":
			return moveToClothes(action);
		case "MOVE_TO_VEHICLES":
			return moveToVehicles(action);
		case "MOVE_TO_APARTMENTS":
			return moveToApartments(action);
		case "MOVE_TO_HOUSES":
			return moveToHouses(action);
		case "MOVE_TO_ISLANDS":
			return moveToIslands(action);
		default:
			throw new ReferenceError(`Action type ${action.type} is not defined`);
	}
};

const SidebarContentContext = createContext();

const SidebarContentProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const sidebarContentRef = useRef(null);
	const primaryRef = useRef(null);
	const electronicsRef = useRef(null);
	const clothesRef = useRef(null);
	const vehiclesRef = useRef(null);
	const apartmentsRef = useRef(null);
	const housesRef = useRef(null);
	const islandsRef = useRef(null);

	const moveToPrimary = () => 
		dispatch({ 
			type: "MOVE_TO_PRIMARY",
			payload: primaryRef.current.offsetHeight 
		});

	const moveToElectronics = () => 
		dispatch({ 
			type: "MOVE_TO_ELECTRONICS",
			payload: electronicsRef.current.offsetHeight
		});

	const moveToClothes = offsetHeight =>
		dispatch({ 
			type: "MOVE_TO_CLOTHES",
			payload: offsetHeight 
		});

	const moveToVehicles = offsetHeight =>
		dispatch({ 
			type: "MOVE_TO_VEHICLES",
			payload: offsetHeight
		});

	const moveToApartments = offsetHeight => 
		dispatch({ 
			type: "MOVE_TO_APARMENTS",
			payload: offsetHeight 
		});

	const moveToHouses = offsetHeight => 
		dispatch({ 
			type: "MOVE_TO_HOUSES",
			payload: offsetHeight 
		});

	const moveToIslands = offsetHeight => 
		dispatch({ 
			type: "MOVE_TO_ISLANDS",
			payload: offsetHeight 
		});

	const setInitialHeight = () =>
		dispatch({ 
			type: "SET_INITIAL_HEIGHT",
			payload: sidebarContentRef.current?.firstChild.offsetHeight 
		});

	useEffect(() => {
		setInitialHeight();
	}, []);

	const value = {
		state,
		primary: state.primary,
		electronics: state.electronics,
		height: state.height,
		primaryRef,
		electronicsRef,
		moveToPrimary,
		moveToElectronics,
		moveToClothes,
		moveToVehicles,
		moveToApartments,
		moveToHouses,
		moveToIslands,
		sidebarContentRef
	};

	return (
		<SidebarContentContext.Provider value={value}>
			{children}
		</SidebarContentContext.Provider>
	);
};

const SidebarContentPrimary = () => {
	const {
		primary,
		primaryRef,
		moveToElectronics,
		moveToClothes,
		moveToVehicles,
		moveToAparments,
		moveToHouses,
		moveToIslands,
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={primary}
			ref={primaryRef}
		>
			<SidebarContentItem
				leftIcon={<GiSmartphone />}
				text="Eletronics"
				rightIcon={<AiOutlineArrowRight />}
				moveToMenu={moveToElectronics}
			/> 
			<SidebarContentItem
				leftIcon={<GiLoincloth />}
				text="Clothes"
				rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<FaCar />}
				text="Vehicles"
				rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<FaBuilding />}
				text="Apartments"
				rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<GiHouse />}
				text="Houses"
				rightIcon={<AiOutlineArrowRight />}
			/>
			<SidebarContentItem
				leftIcon={<GiIsland />}
				text="Islands"
				rightIcon={<AiOutlineArrowRight />}
				divisible={false}
			/>
		</div>
	);
};

const SidebarContentElectronics = () => {
	const { 
		electronics, 
		electronicsRef,
		moveToPrimary 
	} = useContext(SidebarContentContext);

	return (
		<div 
			className={electronics}
			ref={electronicsRef}
		>
			<SidebarContentItem
				leftIcon={<AiOutlineArrowLeft />}
				text="Return"
				moveToMenu={moveToPrimary}
			/>
			<SidebarContentItem
				leftIcon={<GiSmartphone />}
				text="Electronic1"
			/> 
			<SidebarContentItem
				leftIcon={<GiSmartphone />}
				text="Electronic2"
			/>
			<SidebarContentItem
				leftIcon={<GiSmartphone />}
				text="Electronic2"
			/>
			<SidebarContentItem
				leftIcon={<GiSmartphone />}
				text="Electronic4"
			/>
			<SidebarContentItem
				leftIcon={<GiSmartphone />}
				text="Electronic5"
			/>
			<SidebarContentItem
				leftIcon={<GiSmartphone />}
				text="Electronics6"
			/>
			<SidebarContentItem
				leftIcon={<GiSmartphone />}
				text="Electronics7"
			/>
			<SidebarContentItem
				leftIcon={<GiSmartphone />}
				text="Electronics8"
				divisible={false}
			/>
		</div>
	);
};

const SidebarContent = ({ contentClassName }) => {
	const { state, height, sidebarContentRef } = useContext(SidebarContentContext);

	console.log("SidebarContent");
	console.log(state);

	return (
		<div 
			ref={sidebarContentRef}
			className={contentClassName}
			style={{ height: height }}
		>
			<SidebarContentPrimary />
			<SidebarContentElectronics />
		</div>
	);
};

const Sidebar = () => {
	const [isSidebarVisible, setIsSidebarVisible] = useState(true);
	const iconClassName = isSidebarVisible 
		? "sidebar-icon-on"
		: "sidebar-icon-off";
	const contentClassName = isSidebarVisible
		? "sidebar-content-on" 
		: "sidebar-content-off";

	const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

	return (
		<div className="sidebar-icon-content">
			<BsLayoutTextSidebar
				className={iconClassName}
				onClick={toggleSidebar}
			/>
			<SidebarContentProvider>
				<SidebarContent contentClassName={contentClassName}/>
			</SidebarContentProvider>
		</div>
	);
};

export default Sidebar;