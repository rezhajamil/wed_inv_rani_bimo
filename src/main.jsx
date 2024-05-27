import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../public/index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
	isCoverHidden: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "TOGGLE_COVER":
			return {
				...state,
				isCoverHidden: !state.isCoverHidden,
			};
		default:
			return state;
	}
};
const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
