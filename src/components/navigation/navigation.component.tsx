import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import {
	NavigationContainer,
	LogoContainer,
	NavLink,
	NavLinks,
} from "./navigation.styled";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<Logo />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">Shop</NavLink>
					<NavLink to="/auth">SIGN OUT</NavLink>
					<NavLink to="/auth">SIGN IN</NavLink>
				</NavLinks>
			</NavigationContainer>

			<Outlet />
		</Fragment>
	);
};

export default Navigation;
