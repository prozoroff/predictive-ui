import particleFilter from 'particle-filter';
import {
    addPredictiveHoverRules
    } from './styles';
import {
    particlesNumber,
    distributionSize,
    predictiveAttribute
} from './constants';
import {
    getMouseHandler
} from './mouse';
	

addPredictiveHoverRules();

const elements = document.querySelectorAll(`[${predictiveAttribute}]`);;
const filter = new particleFilter(particlesNumber, 2, distributionSize);
const mouseHandler = getMouseHandler(filter, elements);

document.body.onmousemove = mouseHandler;