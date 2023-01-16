import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import styled from "styled-components";

const ProductsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 10px;
	row-gap: 50px;
`;

const Shop = () => {
	const { products } = useContext(ProductContext);
	console.log("products", products);

	return (
		<ProductsContainer>
			{products.map((product) => {
				return <ProductCard product={product} />;
			})}
		</ProductsContainer>
	);
};
export default Shop;
