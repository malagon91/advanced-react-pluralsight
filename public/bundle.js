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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./lib/components/index.js ***!
  \*********************************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Cannot find module '@babel/core'\\n babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.\\n    at Function.Module._resolveFilename (module.js:547:15)\\n    at Function.Module._load (module.js:474:25)\\n    at Module.require (module.js:596:17)\\n    at require (internal/module.js:11:18)\\n    at Object.<anonymous> (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js:8:11)\\n    at Module._compile (module.js:652:30)\\n    at Object.Module._extensions..js (module.js:663:10)\\n    at Module.load (module.js:565:32)\\n    at tryModuleLoad (module.js:505:12)\\n    at Function.Module._load (module.js:497:3)\\n    at Module.require (module.js:596:17)\\n    at require (internal/module.js:11:18)\\n    at loadLoader (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\loader-runner\\\\lib\\\\loadLoader.js:13:17)\\n    at iteratePitchingLoaders (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:169:2)\\n    at runLoaders (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:362:2)\\n    at NormalModule.doBuild (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:179:3)\\n    at NormalModule.build (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:268:15)\\n    at Compilation.buildModule (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:146:10)\\n    at moduleFactory.create (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:433:9)\\n    at factory (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:253:5)\\n    at applyPluginsAsyncWaterfall (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:99:14)\\n    at C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\tapable\\\\lib\\\\Tapable.js:268:11\\n    at NormalModuleFactory.params.normalModuleFactory.plugin (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\webpack\\\\lib\\\\CompatibilityPlugin.js:52:5)\\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\tapable\\\\lib\\\\Tapable.js:272:13)\\n    at resolver (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:74:11)\\n    at process.nextTick (C:\\\\MM\\\\Code\\\\cursos\\\\advanced-react-pluralsight\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js:205:8)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);