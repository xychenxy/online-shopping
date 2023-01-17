import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.util";

// helper function
const addCartItem = (cartItems, productToAdd) => {
	// find if contains productToAdd
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);
	// if found, increase quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	// return new array with modified cartItems
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
	// find the item to remove
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);
	// check if quantity is equal to 1, if it is remove that from the cart
	if (existingCartItem.quantity === 1) {
		return cartItems.filter(
			(cartItem) => cartItem.id !== cartItemToRemove.id
		);
	}
	// return back cart items with matching cart item reduce quantity
	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (cartItems, cartItemToClear) => {
	// find the item to clear
	return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CART_ACTION_TYPES = {
	SET_CART_ITEM: "SET_CART_ITEM",
	SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

export const CartContext = createContext({
	setIsCartOpen: () => {},
	isCartOpen: false,
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

const cartReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEM:
			return { ...state, ...payload };
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return { ...state, isCartOpen: payload };
		default:
			throw new Error(`Unhandled type ${type} in userReducer`);
	}
};

export const CartProvider = ({ children }) => {
	const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);

	const updateCartItemReducer = (newCartItems) => {
		/*
			generate newCartTotal,
			generate newCartCount,
			dispatch new action with payload = {
				newCartItems,
				newCartTotal,
				newCartCount
			}
		*/

		const newCartCount = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		const newCartTotal = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);
		dispatch(
			createAction(CART_ACTION_TYPES.SET_CART_ITEM, {
				cartItems: newCartItems,
				cartTotal: newCartTotal,
				cartCount: newCartCount,
			})
		);
	};

	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemReducer(newCartItems);
	};
	const removeItemFromCart = (cartItem) => {
		const newCartItems = removeCartItem(cartItems, cartItem);
		updateCartItemReducer(newCartItems);
	};

	const clearItemFromCart = (cartItem) => {
		const newCartItems = clearCartItem(cartItems, cartItem);
		updateCartItemReducer(newCartItems);
	};

	const setIsCartOpen = (bool) => {
		dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		cartCount,
		cartTotal,
		removeItemFromCart,
		clearItemFromCart,
	};
	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};
