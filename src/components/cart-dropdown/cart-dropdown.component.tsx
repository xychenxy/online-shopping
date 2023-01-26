import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from "./cart-dropdown.styled";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";

const CardDropDown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckoutHandler = navigate("/checkout");

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item, index) => (
						<CartItem cartItem={item} key={index} />
					))
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
		</CartDropdownContainer>
	);
};

export default CardDropDown;
