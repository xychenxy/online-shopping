import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];
const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { rootReducer } from "./root-reducer";

// const persistConfig = {
// 	key: "root",
// 	storage,
// 	blacklist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = configureStore({
// 	reducer: persistedReducer,
// });
// export const persistor = persistStore(store);
