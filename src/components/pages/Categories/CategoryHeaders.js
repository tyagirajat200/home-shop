import { Box, Paper } from '@mui/material';
import React from 'react';

import Category from './Category.js/Category';

import headerData from '../../../mock-data/category-headers.json';

const CategoryHeaders = () => {
	return (
		<Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
				}}
			>
				{headerData.map((head) => (
					<Category key={head.id} head={head} />
				))}
			</Box>
		</Paper>
	);
};

export default CategoryHeaders;
