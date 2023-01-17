import ProductCard from "../product-card/product-card.component";

import {
	Title,
	CategoryPreviewContainer,
	Preview,
} from "./category-preview.styled";
const CategoryPreview = ({ products, title }) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<Title>{title.toUpperCase()}</Title>
			</h2>
			<Preview>
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard product={product} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
