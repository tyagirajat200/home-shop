import React from 'react';

import { AppBar, Box, Toolbar, Menu, Container, Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { NavLink } from 'react-router-dom';

import SearchBar from './SearchBar';

import Theme from '../pages/Setting/Theme';

import '../.././index.css';

import NavItems from '../../mock-data/navItems';

const Navbar = () => {
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<header>
			<AppBar position="fixed">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'flex', gap: 20 },
								alignItems: 'center',
							}}
						>
							{NavItems.map((page) => (
								<NavLink to={page.to} key={page.to}>
									{page.title}
								</NavLink>
							))}
							<SearchBar />
						</Box>
						<Theme />
						<Button
							sx={{ color: 'white', textTransform: 'capitalize' }}
							startIcon={<ShoppingCartOutlinedIcon />}
						>
							Cart
						</Button>
						<Box sx={{ flexGrow: 0 }}>
							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							></Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</header>
	);
};
export default Navbar;
