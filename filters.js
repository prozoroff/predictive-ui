import particleFilter from 'particle-filter';

import {
    particlesNumber,
    distributionSize
} from './constants';


export const getParticleFilter = () => {
	const variablesNumber = 2, //x,y
		filter = new particleFilter(particlesNumber, variablesNumber, distributionSize);

	return {
		update: coords => filter.update(coords),
		state: () => filter.result.state 
	}
}

export const getMovingAverageFilter = () => {
	const depth = 5,
		history = [],
		average = arr => {
			const sum = arr.reduce(function(a, b) { return a + b; });
    		return sum / arr.length;
		}

	return {
		update: coords => {
			if(history.length === 5){
				history.shift();
			}
			history.push(coords);
		},
		state: () => [
			average(history.map(h => h[0])),
			average(history.map(h => h[1]))
		]
	}
}