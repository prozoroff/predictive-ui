import particleFilter from 'particle-filter';
import {
    addPredictiveHoverRules,
    addHoverClass,
    removeHoverClass
    } from './styles';
import {
    particlesNumber,
    distributionSize,
    predictiveTimeout,
    predictiveClass
} from './constants';
import {
    getMouseHandler
} from './mouse';
	

addPredictiveHoverRules();

const elements = document.querySelectorAll(`[${predictiveClass}]`);;
const filter = new particleFilter(particlesNumber, 2, distributionSize);
const mouseHandler = getMouseHandler(filter, elements, element => {
    addHoverClass(element);
    setTimeout(() => removeHoverClass(element), predictiveTimeout);
});

document.body.onmousemove = mouseHandler;