import particleFilter from 'particle-filter';
import {
    addPredictiveHoverRules,
    addHoverClass,
    removeHoverClass
    } from './styles';
import {
    particlesNumber,
    distributionSize,
    predictionFactor,
    predictiveTimeout,
    predictiveClass
} from './constants';
	
const elements = document.getElementsByClassName(predictiveClass);

const isIn = (x,y,coordinates) => 
	x > coordinates.x && 
	x < (coordinates.x + coordinates.width) && 
	y > coordinates.y && 
	y < (coordinates.y + coordinates.height);

const coordinatesCheckers = [];

for(let i = 0, l = elements.length; i < l; i++){
	const element = elements[i],
		rect = element.getBoundingClientRect();

	coordinatesCheckers.push((x,y) => isIn(x,y,rect));
}

addPredictiveHoverRules();

const filter = new particleFilter(particlesNumber, 2, distributionSize);

let globalX, 
	globalY;

const mousemoveHander = e => {

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
    		const element = elements[i];
            addHoverClass(element);
            setTimeout(() => removeHoverClass(element), predictiveTimeout);
    	}
    }

    globalX = x;
    globalY = y;
}

document.body.onmousemove = mousemoveHander;