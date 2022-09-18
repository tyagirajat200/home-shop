import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';

const Product = () => {
	return (
		<Paper elevation={3}>
			<Grid
				container
				spacing={2}
				direction="row"
				justifyContent="space-between"
				alignItems="flex-start"
				sx={{ px: 4, py: 2 }}
			>
				<Grid item xs={12} md={4}>
					<img
						src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/f/s/l/-original-imaghvb6rwy2b5ez.jpeg?q=70"
						alt="alt text"
						height="300px"
					/>
				</Grid>
				<Grid item xs={12} md={4} flexGrow={1}>
					<Box>
						<Typography variant="h6">Name</Typography>
						<Box sx={{ color: 'text.secondary' }}>Description</Box>
						<ul>
							<li>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
								sunt?
							</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>Lorem ipsum dolor sit amet.</li>
						</ul>
					</Box>
				</Grid>
				<Grid item xs={12} md={4} flexGrow={1}>
					<Stack spacing={3}>
						<Typography variant="h6">50,000</Typography>
						<Box sx={{ color: 'text.secondary' }}>Free delivery</Box>
						<Button variant="contained" color="warning">
							Add to Cart
						</Button>
						<Button variant="contained" color="error">
							Buy now
						</Button>
					</Stack>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Product;
