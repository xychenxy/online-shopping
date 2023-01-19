import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe.util";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store} loading={null}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<Elements stripe={stripePromise}>
						<App />
					</Elements>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
