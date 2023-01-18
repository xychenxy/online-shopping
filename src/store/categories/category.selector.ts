import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;
export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categoriesSlice) => categoriesSlice.categories
);
/**
 * input selector is state.categories.categories
 * output is categories.reduce() result
 * if input doesn't change, just return previous result, don't need to calculate again
 */
export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories) =>
		categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {})
);
