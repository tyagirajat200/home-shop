import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useDispatch } from 'react-redux';

import { SettingActions } from '../../../store/slice/SettingSlice';

const Theme = () => {
	const dispatch = useDispatch();

	const themeToggleHandler = () => {
		dispatch(SettingActions.toggleTheme());
	};
	return (
		<div>
			{/* {isdark ? textAssets.enableLight : textAssets.enableDark} */}
			<IconButton
				size="large"
				edge="start"
				aria-label="menu"
				sx={{ mr: 2, ml: 1 }}
				onClick={themeToggleHandler}
			>
				<DarkModeIcon color="black" />
			</IconButton>
		</div>
	);
};

export default Theme;
