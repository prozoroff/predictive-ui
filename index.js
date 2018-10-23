import {
    getParticleFilter,
    getMovingAverageFilter
    } from './filters';
import {
    addPredictiveHoverRules
    } from './styles';
import {
    predictiveAttribute
} from './constants';
import {
    getMouseHandler
} from './mouse';
import {
	predictAction
} from './predictor/predictAction'
	

addPredictiveHoverRules();

const filter = getParticleFilter();
const elements = document.querySelectorAll(`[${predictiveAttribute}]`);;

document.body.onmousemove = getMouseHandler(filter, elements, /*predictAction*/);