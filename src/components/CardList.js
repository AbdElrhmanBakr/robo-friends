import React from 'react';
import Card from './Card'

const CardList = ({robots}) =>{
	return(
		<div className='dib br3 pa3 ma2'>
			{
				robots.map((user,i) => {
					return (
						<Card 
						key={robots[i].id} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
						/>
					);
				})
			}
		</div>
		);
}

export default CardList;

/*
const CardList = ({robots}) =>{
	const cardsArray = robots.map((user,i) => {
		return (
		<Card 
		key={robots[i].id} 
		id={robots[i].id} 
		name={robots[i].name} 
		email={robots[i].email}
		/>
		);
	});
	return(
		<div>
			{cardsArray}
		</div>
		);
}
*/