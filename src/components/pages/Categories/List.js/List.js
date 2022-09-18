import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/paper';
import { List as MuiList } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/system';
import { useHistory } from 'react-router-dom';

export default function List({ listItems }) {
	const [subCatItems, sethoveredItem] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeSubIndex, setActiveSubIndex] = useState(0);
	const router = useHistory();

	let timer;

	useEffect(() => {
		sethoveredItem(listItems[0].subCategory);
		listItems[0].active = true;
	}, [listItems]);

	const mouseHoverHandler = (item, index) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			setActiveIndex(index);
			sethoveredItem(item.subCategory || []);
		}, 200);
	};

	const mouseLeaveHandler = () => {
		// setActiveIndex('');
	};

	const mouseHoverSubHandler = (index) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			setActiveSubIndex(index);
		}, 100);
	};

	const mouseLeaveSubHandler = () => {
		// setActiveSubIndex('');
	};

	const listClickHandler = (id) => {
		router.push(`/product/${id}`, id);
	};

	return (
		<Box style={{ display: 'flex' }}>
			<Paper
				elevation={0}
				sx={{
					width: '100%',
					maxWidth: 300,
					bgcolor: '#eeeeee',
				}}
			>
				<nav>
					<MuiList>
						{listItems.map((item, index) => (
							<ListItem
								key={item.id}
								disablePadding
								onMouseEnter={() => mouseHoverHandler(item, index)}
								onMouseLeave={() => mouseLeaveHandler()}
								sx={index === activeIndex ? { color: 'blue' } : {}}
							>
								<ListItemButton onClick={() => listClickHandler(item.title)}>
									<ListItemText primary={item.title} />
									{index === activeIndex && (
										<ArrowForwardIosIcon fontSize="small" />
									)}
								</ListItemButton>
							</ListItem>
						))}
					</MuiList>
				</nav>
			</Paper>
			{subCatItems.length && (
				<Paper
					elevation={0}
					sx={{
						width: '100%',
						maxWidth: 600,
						bgcolor: '#eeeeee',
					}}
				>
					<nav>
						<MuiList>
							{subCatItems?.map((item, index) => (
								<ListItem
									key={item.title}
									disablePadding
									onMouseEnter={() => mouseHoverSubHandler(index)}
									onMouseLeave={() => mouseLeaveSubHandler()}
									sx={index === activeSubIndex ? { color: 'blue' } : {}}
								>
									<ListItemButton onClick={() => listClickHandler(item.title)}>
										<ListItemText primary={item.title} />
									</ListItemButton>
								</ListItem>
							))}
						</MuiList>
					</nav>
				</Paper>
			)}
		</Box>
	);
}
