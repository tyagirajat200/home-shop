import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Product from './Product';
import { useLocation } from 'react-router-dom';

const Products = () => {
	const location = useLocation();

	return (
		<Stack>
			<Typography
				variant="h6"
				my={4}
				mx={4}
			>{`Showing results for "${location.state}"`}</Typography>
			<Box>
				{[1, 2, 3, 4, 5].map((p) => (
					<Product key={p} />
				))}
			</Box>
		</Stack>
	);
};

export default Products;
