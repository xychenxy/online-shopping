import { useContext } from "react";
import {
	Footer,
	Name,
	Price,
	ProductCartContainer,
} from "./product-card.styled";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

type ProductCardProps = {
	product: { name: string; price: number; imageUrl: string };
};
const ProductCard = ({ product }: ProductCardProps) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCard = (product) => {
		addItemToCart(product);
	};
	return (
		<ProductCartContainer>
			<img src={imageUrl} alt={name} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={() => addProductToCard(product)}
			>
				Add to card
			</Button>
		</ProductCartContainer>
	);
};

export default ProductCard;
