import { createAction } from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategories = (categoriesArray) =>
	createAction("SET_CATEGORIES", categoriesArray);
