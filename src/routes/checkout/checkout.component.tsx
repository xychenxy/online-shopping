import { useSelector } from "react-redux";
import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from "./checkout.styled";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

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
