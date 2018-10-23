import {
    predictionFactor,
    predictiveTimeout
} from './constants';
import {
    addHoverClass,
    removeHoverClass
} from './styles';

//11 last positions = 10 last differences
const positionsFull = mousePositions => mousePositions.length === 11;

const isIn = (x,y,coordinates) => 
	x > coordinates.x && 
	x < (coordinates.x + coordinates.width) && 
	y > coordinates.y && 
	y < (coordinates.y + coordinates.height);

export const getMouseHandler = (filter, elements, predict) => {
	
	const coordinatesCheckers = [];
	for(let i = 0, l = elements.length; i < l; i++){
		const element = elements[i],
			rect = element.getBoundingClientRect();

		coordinatesCheckers.push((x,y) => isIn(x,y,rect));
	}

  const timeoutIds = new Array(elements.length);

	let globalX, 
		globalY,
    mousePositions = [];

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

		const filterState = filter.state(),
			predictX = globalX + filterState[0],
			predictY = globalY + filterState[1];

      if(!predict || !positionsFull(mousePositions) || predict(mousePositions)){
        for(let i = 0, l = coordinatesCheckers.length; i < l; i++){
          if(coordinatesCheckers[i](predictX, predictY)){
            const element = elements[i];
            if(!timeoutIds[i]){
              addHoverClass(element);
              timeoutIds[i] = setTimeout(() => {
                removeHoverClass(element);
                delete timeoutIds[i];
              }, predictiveTimeout);
            }
          }
        }
      }

    	globalX = x;
    	globalY = y;

      if(predict){
        positionsFull(mousePositions) && mousePositions.shift();
        mousePositions.push([x,y]);
      }
	}

}




