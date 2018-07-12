
import {
    hoverClass
} from './constants';

const hoverRegex = /\S+:hover/g;

export const addPredictiveHoverRules = () => {

	const sheets = document.styleSheets;

	for(let i = 0, il = sheets.length; i < il; i++){
		const sheet = sheets[i],
			rules = sheet.cssRules,
			rulesToAdd = [];

		for(let j = 0, jl = rules.length; j < jl; j++){
			const rule = rules[j],
				selectorText = rule.selectorText;

			if(selectorText.indexOf(':hover') > -1){
				rulesToAdd.push({
					selector: selectorText.replace(hoverRegex, '.' + hoverClass),
					css: rule.style.cssText
				});
			}
		}

		rulesToAdd.map(r => addCSSRule(sheet, r.selector, r.css, 1));
	}
}

export const addHoverClass = target => {
    target.classList.add(hoverClass);
}

export const removeHoverClass = target => {
    target.classList.remove(hoverClass);
}

const addCSSRule = (sheet, selector, rules, index) => {
	if("insertRule" in sheet) {
		sheet.insertRule(selector + "{" + rules + "}", index);
	}
	else if("addRule" in sheet) {
		sheet.addRule(selector, rules, index);
	}
}