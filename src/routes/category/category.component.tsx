import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { Title, CategoryContainer } from "./category.styled";
import ProductCard from "../../components/product-card/product-card.component";
const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);
	return (
		<>
			<Title>{category?.toUpperCase()}</Title>
			<CategoryContainer>
				{products &&
					products.map((product) => (
						<ProductCard product={product} />
					))}
			</CategoryContainer>
		</>
	);
};

export default Category;
