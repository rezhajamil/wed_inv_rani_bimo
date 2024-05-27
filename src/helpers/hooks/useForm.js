import { useState } from "react";

export default (initialValues) => {
	const [state, setState] = useState(initialValues);

	const resetState = () => {
		setState(initialValues);
		console.log("initialValues", initialValues);
	};
	return [
		state,
		(e) => {
			setState({
				...state,
				[e.target.name]: e.target.value,
			});
		},
		(newState) => {
			setState({
				...state,
				...newState,
			});
		},
		resetState,
	];
};
