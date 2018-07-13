/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: particlesNumber, distributionSize, predictionFactor, predictiveClass, hoverClass, predictiveTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"particlesNumber\", function() { return particlesNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distributionSize\", function() { return distributionSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"predictionFactor\", function() { return predictionFactor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"predictiveClass\", function() { return predictiveClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hoverClass\", function() { return hoverClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"predictiveTimeout\", function() { return predictiveTimeout; });\nconst particlesNumber = 50;\r\nconst distributionSize = 10;\r\nconst predictionFactor = 10;\r\nconst predictiveClass = 'predictive-item';\r\nconst hoverClass = 'predictive-item-hover';\r\nconst predictiveTimeout = 1000;\n\n//# sourceURL=webpack:///./constants.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var particle_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! particle-filter */ \"./node_modules/particle-filter/lib/index.js\");\n/* harmony import */ var particle_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(particle_filter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./styles.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./constants.js\");\n/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mouse */ \"./mouse.js\");\n\r\n\r\n\r\n\r\n\t\r\n\r\nObject(_styles__WEBPACK_IMPORTED_MODULE_1__[\"addPredictiveHoverRules\"])();\r\n\r\nconst elements = document.querySelectorAll(`[${_constants__WEBPACK_IMPORTED_MODULE_2__[\"predictiveClass\"]}]`);;\r\nconst filter = new particle_filter__WEBPACK_IMPORTED_MODULE_0___default.a(_constants__WEBPACK_IMPORTED_MODULE_2__[\"particlesNumber\"], 2, _constants__WEBPACK_IMPORTED_MODULE_2__[\"distributionSize\"]);\r\nconst mouseHandler = Object(_mouse__WEBPACK_IMPORTED_MODULE_3__[\"getMouseHandler\"])(filter, elements, element => {\r\n    Object(_styles__WEBPACK_IMPORTED_MODULE_1__[\"addHoverClass\"])(element);\r\n    setTimeout(() => Object(_styles__WEBPACK_IMPORTED_MODULE_1__[\"removeHoverClass\"])(element), _constants__WEBPACK_IMPORTED_MODULE_2__[\"predictiveTimeout\"]);\r\n});\r\n\r\ndocument.body.onmousemove = mouseHandler;\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./mouse.js":
/*!******************!*\
  !*** ./mouse.js ***!
  \******************/
/*! exports provided: getMouseHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMouseHandler\", function() { return getMouseHandler; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./constants.js\");\n\r\n\r\nconst isIn = (x,y,coordinates) => \r\n\tx > coordinates.x && \r\n\tx < (coordinates.x + coordinates.width) && \r\n\ty > coordinates.y && \r\n\ty < (coordinates.y + coordinates.height);\r\n\r\nconst getMouseHandler = (filter, elements, callback) => {\r\n\t\r\n\tconst coordinatesCheckers = [];\r\n\tfor(let i = 0, l = elements.length; i < l; i++){\r\n\t\tconst element = elements[i],\r\n\t\t\trect = element.getBoundingClientRect();\r\n\r\n\t\tcoordinatesCheckers.push((x,y) => isIn(x,y,rect));\r\n\t}\r\n\r\n\r\n\tlet globalX, \r\n\t\tglobalY;\r\n\r\n\treturn e => {\r\n\r\n    \tlet x, y;\r\n\r\n    \tif (document.all)  { \r\n      \t\tx = event.x + document.body.scrollLeft; \r\n      \t\ty = event.y + document.body.scrollTop; \r\n    \t} else {\r\n      \t\tx = e.pageX;\r\n      \t\ty = e.pageY;\r\n    \t}\r\n\r\n    \tglobalX = globalX || x;\r\n    \tglobalY = globalY || y;\r\n\r\n    \tfilter.update([(x - globalX)*_constants__WEBPACK_IMPORTED_MODULE_0__[\"predictionFactor\"], (y - globalY)*_constants__WEBPACK_IMPORTED_MODULE_0__[\"predictionFactor\"]]);\r\n\r\n\t\tconst filterState = filter.result.state,\r\n\t\t\tpredictX = globalX + filterState[0],\r\n\t\t\tpredictY = globalY + filterState[1];\r\n\r\n    \tfor(let i = 0, l = coordinatesCheckers.length; i < l; i++){\r\n    \t\tif(coordinatesCheckers[i](predictX, predictY)){\r\n    \t\t\tcallback(elements[i])\r\n    \t\t}\r\n    \t}\r\n\r\n    \tglobalX = x;\r\n    \tglobalY = y;\r\n\t}\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./mouse.js?");

/***/ }),

/***/ "./node_modules/particle-filter/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/particle-filter/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nmodule.exports = particleFilter;\r\n\r\nfunction nextDouble(maxValue, minValue) {\r\n    var max = maxValue || 1,\r\n        min = minValue || 0,\r\n        randomValue = Math.random();\r\n    if (!min) {\r\n        return randomValue * max;\r\n    }\r\n    return (0.5 - randomValue) * (max - min);\r\n}\r\n\r\nfunction uniformDistribution(maxValue) {\r\n    this.maxValue = maxValue;\r\n}\r\n\r\nuniformDistribution.prototype.generate = function () {\r\n    return nextDouble(this.maxValue);\r\n}\r\n\r\nfunction featureParticle(state, weight, variance) {\r\n    var defaultVariance = 50;\r\n\r\n    this.variance = variance || defaultVariance;\r\n    this.weight = weight || 0;\r\n    this.state = state.slice();\r\n};\r\n\r\nfeatureParticle.prototype.diffuse = function () {\r\n    var state = this.state,\r\n        variance = this.variance;\r\n\r\n    for (var i = 0, l = state.length; i < l; i++) {\r\n        state[i] += nextDouble(variance, -variance);\r\n    }\r\n};\r\n\r\nfeatureParticle.prototype.clone = function () {\r\n    return new featureParticle(this.state.slice(), this.weight);\r\n};\r\n\r\nfunction particleFilter(particlesNumber, variablesNumber, distributionSize) {\r\n\r\n    var particlesNumber = particlesNumber || 100,\r\n        variablesNumber = variablesNumber || 1,\r\n        distributionSize = distributionSize || 10;\r\n\r\n    this.particles = [];\r\n    this.epsilon = Number.MIN_VALUE;\r\n    this.variance = 0;\r\n    this.distributions = [];\r\n\r\n    for (var i = 0; i < variablesNumber; i++) {\r\n        this.distributions.push(new uniformDistribution(distributionSize));\r\n    }\r\n\r\n    this.generateParticles(particlesNumber, this.distributions);\r\n};\r\n\r\nparticleFilter.prototype.generateParticles = function (numberOfParticles, distributions) {\r\n    var nDim = distributions.length,\r\n        particles = this.particles;\r\n    for (var i = 0; i < numberOfParticles; i++) {\r\n        var randomParam = [];\r\n        for (var dim = 0; dim < nDim; dim++) {\r\n            randomParam[dim] = distributions[dim].generate();\r\n        }\r\n        particles.push(new featureParticle(randomParam, 1 / numberOfParticles));\r\n    }\r\n};\r\n\r\nparticleFilter.prototype.resample = function (sampleCount) {\r\n    var resampledParticles = [],\r\n        filteredParticles = this.filter(this.particles.length);\r\n\r\n    for (var i = 0, l = filteredParticles.length; i < l; i++) {\r\n        var newPart = filteredParticles[i].clone();\r\n        newPart.weight = 1 / this.particles.length;\r\n        resampledParticles.push(newPart);\r\n    }\r\n\r\n    return resampledParticles;\r\n};\r\n\r\nparticleFilter.prototype.filter = function (sampleCount) {\r\n    var cumulativeWeights = [],\r\n        cumSumInd = 0,\r\n        cumSum = 0,\r\n        particles = this.particles;\r\n\r\n    for (var i = 0, l = particles.length; i < l; i++) {\r\n        var p = particles[i];\r\n        cumSum += p.weight;\r\n        cumulativeWeights[cumSumInd++] = cumSum;\r\n    }\r\n\r\n    var maxCumWeight = cumulativeWeights[particles.length - 1],\r\n        minCumWeight = cumulativeWeights[0];\r\n\r\n    var filteredParticles = [];\r\n\r\n    for (var i = 0; i < sampleCount; i++) {\r\n        var randWeight = minCumWeight + nextDouble(1) * (maxCumWeight - minCumWeight),\r\n            particleInd = 0;\r\n        while (cumulativeWeights[particleInd] < randWeight) {\r\n            particleInd++;\r\n        }\r\n\r\n        var p = particles[particleInd];\r\n        filteredParticles.push(p);\r\n    }\r\n\r\n    return filteredParticles;\r\n};\r\n\r\nparticleFilter.prototype.predict = function (effectiveMinRatio) {\r\n    var newParticles,\r\n        particles = this.particles,\r\n        effectiveRatio = this.effectiveLength(this.normalWeights()) / this.particles.length;\r\n    if (effectiveRatio > this.epsilon &&\r\n        effectiveRatio < effectiveMinRatio) {\r\n        newParticles = this.resample(particles.length);\r\n    }\r\n    else {\r\n        newParticles = [];\r\n        for (var i = 0, l = particles.length; i < l; i++) {\r\n            var cloned = particles[i].clone();\r\n            cloned.diffuse();\r\n            newParticles.push(cloned);\r\n        }\r\n    }\r\n\r\n    this.particles = newParticles;\r\n};\r\n\r\nparticleFilter.prototype.effectiveLength = function (weights) {\r\n    var sumSqr = this.epsilon,\r\n        sum = 0;\r\n    for (var i = 0, l = weights.length; i < l; i++) {\r\n        var w = weights[i];\r\n        sumSqr += w * w;\r\n        sum += w;\r\n    }\r\n\r\n    return sum / sumSqr;\r\n};\r\n\r\nparticleFilter.prototype.normalWeights = function () {\r\n    var particles = this.particles,\r\n        normalizedWeights = [],\r\n        weightSum = this.epsilon;\r\n    for (var i = 0, l = particles.length; i < l; i++) {\r\n        weightSum += particles[i].weight;\r\n    }\r\n\r\n    for (var i = 0, l = particles.length; i < l; i++) {\r\n        normalizedWeights.push(particles[i].weight / weightSum);\r\n    }\r\n\r\n    return normalizedWeights;\r\n};\r\n\r\nparticleFilter.prototype.update = function (measure, effectiveMinRatio) {\r\n\r\n    this.predict(effectiveMinRatio || 0.9);\r\n\r\n    var particles = this.particles,\r\n        maxWeightParticle;\r\n\r\n    for (var i = 0, l = particles.length; i < l; i++) {\r\n        var particle = particles[i],\r\n            state = particle.state,\r\n            sumSqr = 0;\r\n\r\n        for (var j = 0, sl = state.length; j < sl; j++) {\r\n            var diff = measure[j] - state[j];\r\n            sumSqr += diff * diff;\r\n        }\r\n\r\n        var weight = 1 / Math.sqrt(sumSqr);\r\n        particle.weight = weight;\r\n\r\n        if (!maxWeightParticle || maxWeightParticle.weight < weight) {\r\n            maxWeightParticle = particle;\r\n        }\r\n    }\r\n\r\n    this.result = maxWeightParticle;\r\n    return maxWeightParticle;\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./node_modules/particle-filter/lib/index.js?");

/***/ }),

/***/ "./styles.js":
/*!*******************!*\
  !*** ./styles.js ***!
  \*******************/
/*! exports provided: addPredictiveHoverRules, addHoverClass, removeHoverClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPredictiveHoverRules\", function() { return addPredictiveHoverRules; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addHoverClass\", function() { return addHoverClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeHoverClass\", function() { return removeHoverClass; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./constants.js\");\n\r\n\r\n\r\nconst hoverRegex = /\\S+:hover/g;\r\n\r\nconst addPredictiveHoverRules = () => {\r\n\r\n\tconst sheets = document.styleSheets;\r\n\r\n\tfor(let i = 0, il = sheets.length; i < il; i++){\r\n\t\tconst sheet = sheets[i],\r\n\t\t\trules = sheet.cssRules,\r\n\t\t\trulesToAdd = [];\r\n\r\n\t\tfor(let j = 0, jl = rules.length; j < jl; j++){\r\n\t\t\tconst rule = rules[j],\r\n\t\t\t\tselectorText = rule.selectorText;\r\n\r\n\t\t\tif(selectorText.indexOf(':hover') > -1){\r\n\t\t\t\trulesToAdd.push({\r\n\t\t\t\t\tselector: selectorText.replace(hoverRegex, '.' + _constants__WEBPACK_IMPORTED_MODULE_0__[\"hoverClass\"]),\r\n\t\t\t\t\tcss: rule.style.cssText\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\trulesToAdd.map(r => addCSSRule(sheet, r.selector, r.css, 1));\r\n\t}\r\n}\r\n\r\nconst addHoverClass = target => {\r\n    target.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"hoverClass\"]);\r\n}\r\n\r\nconst removeHoverClass = target => {\r\n    target.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_0__[\"hoverClass\"]);\r\n}\r\n\r\nconst addCSSRule = (sheet, selector, rules, index) => {\r\n\tif(\"insertRule\" in sheet) {\r\n\t\tsheet.insertRule(selector + \"{\" + rules + \"}\", index);\r\n\t}\r\n\telse if(\"addRule\" in sheet) {\r\n\t\tsheet.addRule(selector, rules, index);\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./styles.js?");

/***/ })

/******/ });