import { createSlice } from '@reduxjs/toolkit';

import dummy from '../../mock-data/productsData.js';

let dataExist = false;

const initialState = {
	productData: [],
	loadingCardsData: false,
};
const productSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		setCardsData(state, actions) {
			state.productData = actions.payload;
		},
		loadingData(state) {
			state.loadingCardsData = !state.loadingCardsData;
		},
		deleteCard(state, actions) {
			const itemToDelete = actions.payload;
			state.productData = state.productData.filter(
				(item) => item.id !== itemToDelete
			);
		},
		setSelectedCard(state, action) {
			if (action.payload) {
				state.productData = state.productData.map((card) => {
					if (card.id === action.payload.id)
						return { ...action.payload, selecetd: true };
					else return card;
				});
			} else {
				// clear selecetion
				state.productData = state.productData.map((card) => {
					if (card.selecetd) return { ...card, selecetd: false };
					else return card;
				});
			}
		},
	},
});

// Thunk fn
const fetchSearchItems = () => {
	if (dataExist)
		return async (dispatch) => {
			dispatch({ type: '' });
		};
	return async (dispatch) => {
		dispatch(productActions.loadingData());
		setTimeout(() => {
			dispatch(productActions.setCardsData(dummy));
			dispatch(productActions.loadingData());
			dataExist = true;
		}, 1000);
	};
};

const productActions = productSlice.actions;
export { productActions, fetchSearchItems };

export default productSlice.reducer;
