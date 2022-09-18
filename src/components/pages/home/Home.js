import React from 'react';
import CategoryHeaders from '../Categories/CategoryHeaders';
import CategoriesViews from '../Categories/CategoriesViews';
import CarouselComp from '../Carousel/CarouselComp';

const Home = () => {
	return (
		<>
			<CategoryHeaders />
			<CarouselComp />
			<CategoriesViews />
		</>
	);
};

export default Home;
