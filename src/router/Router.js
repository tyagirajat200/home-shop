import { Route, Redirect, Switch } from 'react-router-dom';

import { Box } from '@mui/material';

import Home from '../components/pages/home/Home';
import Products from '../components/pages/products/Products';

function Router() {
	return (
		<Box
			sx={{
				pt: 8,
				minHeight: '92vh',
			}}
		>
			<Switch>
				<Route exact path="/">
					<Redirect to="/home" />
				</Route>
				<Route exact path="/home">
					<Home />
				</Route>
				<Route path="/product/:id">
					<Products />
				</Route>
			</Switch>
		</Box>
	);
}

export default Router;
