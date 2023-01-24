import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

/**
 * types
 */
export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: persistedReducer,
	devTools: import.meta.env.MODE !== "production",
	middleware: [
		import.meta.env.MODE !== "production" && logger,
		sagaMiddleware,
	].filter(Boolean),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
