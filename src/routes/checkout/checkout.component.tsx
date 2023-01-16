import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from "./checkout.styled";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				{["Product", "Description", "Quantity", "Price", "Remove"].map(
					(name: string) => (
						<HeaderBlock>
							<span>{name}</span>
						</HeaderBlock>
					)
				)}
			</CheckoutHeader>
			{cartItems.map((cartItem) => (
				<CheckoutItem cartItem={cartItem} />
			))}
			<Total>Total: ${cartTotal}</Total>
		</CheckoutContainer>
	);
};
export default Checkout;
