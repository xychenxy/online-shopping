import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data";

const PRODUCT = SHOP_DATA[0].items;

export const ProductContext = createContext({
	setProducts: () => [],
	products: [],
});
export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCT);
	const value = { products, setProducts };
	return (
		<ProductContext.Provider value={value}>
			{children}
		</ProductContext.Provider>
	);
};
