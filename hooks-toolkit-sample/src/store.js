import { combineReducers, configureReducers } from '@reduxjs/toolkit'
import ListModule from "./modules/ListModule";

const rootReducer = combineReducers({
    list: ListModule.reducer,
});

export const setupStore = () => {
    const store = configureStore({
        reducer: rootReducer,
    });
    return store
}
