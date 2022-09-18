import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

import items from '../../../mock-data/carouselData';

function CarouselComp(props) {
	return (
		<Carousel>
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
}

export default CarouselComp;

function Item(props) {
	return (
		<Paper
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{/* <h2>{props.item.name}</h2> */}
			<img
				src={props.item.img}
				alt={props.item.name}
				height="300px"
				width="98%"
				loading="lazy"
			/>
			{/* <p>{props.item.description}</p> */}

			<Button className="CheckButton">Check it out!</Button>
		</Paper>
	);
}
