import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './slice/SettingSlice';
import productReducer from './slice/ProductSlice';

const store = configureStore({
	reducer: { setting: settingReducer, product: productReducer },
});

export default store;
