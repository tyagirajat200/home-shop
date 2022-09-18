import { Box } from '@mui/system';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import List from '../List.js/List';

const Category = ({ head }) => {
	const [showList, setshowList] = useState(false);

	const ListTooltip = styled(({ className, ...props }) => (
		<Tooltip {...props} arrow classes={{ popper: className }} />
	))(({ theme }) => ({
		[`& .${tooltipClasses.arrow}`]: {
			color: '#eeeeee',
		},
		[`& .${tooltipClasses.tooltip}`]: {
			backgroundColor: '#eeeeee',
			minWidth: '500px',
		},
	}));

	function mouseHoverhandler() {
		// setshowList(true);
		setTimeout(() => {
			setshowList(true);
		}, 10);
	}
	function mouseLeavehandler() {
		// setshowList(false);

		setTimeout(() => {
			setshowList(false);
		}, 10);
	}

	return (
		<Box onMouseEnter={mouseHoverhandler} onMouseLeave={mouseLeavehandler}>
			<ListTooltip
				title={head.categories ? <List listItems={head.categories} /> : ''}
			>
				<Box sx={{ cursor: 'pointer' }}>
					<Stack justifyContent="center" alignItems="center">
						<div>
							<img
								src={head.imgSrc}
								alt={head.title}
								width="64px"
								height="64px"
							/>
						</div>
						{
							<Stack direction="row">
								<Typography variant="p" color={showList ? 'primary' : ''}>
									{head.title}
								</Typography>
								{head.categories ? (
									showList ? (
										<KeyboardArrowUpOutlinedIcon
											color={showList ? 'primary' : ''}
										/>
									) : (
										<KeyboardArrowDownOutlinedIcon />
									)
								) : (
									''
								)}
							</Stack>
						}
					</Stack>
				</Box>
			</ListTooltip>
		</Box>
	);
};

export default Category;
