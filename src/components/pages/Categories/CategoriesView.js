import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

import Item from './Item';

const CategoriesView = ({ data }) => {
	return (
		<Paper elevation={3}>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{ px: 4, py: 2 }}
			>
				<div>
					<Typography variant="h6">{data.title}</Typography>
					<Box sx={{ color: 'text.secondary' }}>{data.subTitle}</Box>
				</div>
				<Button variant="contained" size="small">
					View All
				</Button>
			</Stack>
			<Divider />
			<Grid
				container
				spacing={2}
				direction="row"
				justifyContent="center"
				alignItems="flex-end"
				sx={{ px: 4, py: 2 }}
			>
				{data.products.map((p) => (
					<Grid item xs={12} sm={6} md={2} key={p.id}>
						<Item key={p.id} cardData={p} />
					</Grid>
				))}
			</Grid>
		</Paper>
	);
};

export default CategoriesView;
