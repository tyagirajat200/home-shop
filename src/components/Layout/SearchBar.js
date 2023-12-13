import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchSearchItems } from '../../store/slice/ProductSlice';

function sleep(delay = 0) {
	return new Promise((resolve) => {
		setTimeout(resolve, delay);
	});
}

export default function SearchBar() {
	const [value, setValue] = useState(null);
	const [open, setOpen] = useState(false);
	const [options, setOptions] = useState([]);
	const loading = open && options.length === 0;

	const dispatch = useDispatch();
	const data = useSelector((state) => state.product.productData);
	const router = useHistory();

	useEffect(() => {
		dispatch(fetchSearchItems());
	}, [dispatch]);

	useEffect(() => {
		let active = true;

		if (!loading) {
			return undefined;
		}

		(async () => {
			await sleep(1e3); // For demo purposes.

			if (active) {
				setOptions([...data]);
			}
		})();

		return () => {
			active = false;
		};
	}, [loading, data]);

	useEffect(() => {
		if (!open) {
			setOptions([]);
		}
	}, [open]);

	const changeHandler = (value) => {
		setValue(value);
		/**
		 * route to products page on click
		 */
		if (value) {
			router.push(`/product/${value.id}`, value.title);
		}
	};

	return (
		<Autocomplete
			id="Search"
			sx={{ width: { xs: 150, sm: 250, md: 500 } }}
			open={open}
			onOpen={() => {
				setOpen(true);
			}}
			value={value}
			onChange={(e, v) => {
				changeHandler(v);
			}}
			onClose={() => {
				setOpen(false);
			}}
			isOptionEqualToValue={(option, value) => option.title === value.title}
			getOptionLabel={(option) => option.title}
			options={options}
			loading={loading}
			renderInput={(params) => (
				<TextField
					{...params}
					label="Search for products, brands and more"
					size="small"
					color="success"
					InputProps={{
						...params.InputProps,
						endAdornment: (
							<>
								{loading ? (
									<CircularProgress color="inherit" size={20} />
								) : null}
								{params.InputProps.endAdornment}
							</>
						),
					}}
				/>
			)}
		/>
	);
}
