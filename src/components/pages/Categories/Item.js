import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

export default function Item({ cardData }) {
	return (
		<Card elevation={0}>
			<CardActionArea>
				<CardMedia
					component="img"
					height={200}
					image={cardData.imgSrc}
					alt={cardData.title}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant="h6"
						component="div"
						textAlign="center"
						fontSize={14}
					>
						{cardData.title}
					</Typography>
					<Box sx={{ color: 'success.main', textAlign: 'center' }}>
						{cardData.subtext}
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
