import {
    predictionFactor,
} from './constants';

const isIn = (x,y,coordinates) => 
	x > coordinates.x && 
	x < (coordinates.x + coordinates.width) && 
	y > coordinates.y && 
	y < (coordinates.y + coordinates.height);

export const getMouseHandler = (filter, elements, callback) => {
	
	const coordinatesCheckers = [];
	for(let i = 0, l = elements.length; i < l; i++){
		const element = elements[i],
			rect = element.getBoundingClientRect();

		coordinatesCheckers.push((x,y) => isIn(x,y,rect));
	}


	let globalX, 
		globalY;

	return e => {

    	let x, y;

    	if (document.all)  { 
      		x = event.x + document.body.scrollLeft; 
      		y = event.y + document.body.scrollTop; 
    	} else {
      		x = e.pageX;
      		y = e.pageY;
    	}

    	globalX = globalX || x;
    	globalY = globalY || y;

    	filter.update([(x - globalX)*predictionFactor, (y - globalY)*predictionFactor]);

		const filterState = filter.result.state,
			predictX = globalX + filterState[0],
			predictY = globalY + filterState[1];

    	for(let i = 0, l = coordinatesCheckers.length; i < l; i++){
    		if(coordinatesCheckers[i](predictX, predictY)){
    			callback(elements[i])
    		}
    	}

    	globalX = x;
    	globalY = y;
	}

}




