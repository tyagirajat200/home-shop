import React from 'react';
import CategoriesView from './CategoriesView';
import best from '../../../mock-data/best.json';

const CategoriesViews = () => {
	return (
		<>
			{best.map((b) => (
				<CategoriesView key={b.id} data={b} />
			))}
		</>
	);
};

export default CategoriesViews;
