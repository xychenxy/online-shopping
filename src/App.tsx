import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignInForm from "./components/sign-in-form/sign-in-form.component";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
	return <h1>i am shop page</h1>;
};
function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="auth" element={<Authentication />} />
			</Route>
		</Routes>
	);
}

export default App;
