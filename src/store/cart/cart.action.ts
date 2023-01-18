import { createAction } from "../../utils/reducer/reducer.util";
import { CART_ACTION_TYPES } from "./cart.types";

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

export const setIsCartOpen = (boolean) =>
	createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, cartItem) => {
	const newCartItems = removeCartItem(cartItems, cartItem);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItem) => {
	const newCartItems = clearCartItem(cartItems, cartItem);
	return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
