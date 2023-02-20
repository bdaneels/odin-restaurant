/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateAbout": () => (/* binding */ populateAbout)
/* harmony export */ });


function populateAbout() {

    let aboutCard = document.createElement('div')
    aboutCard.setAttribute('id', 'about-card')
    let previousAbout = document.querySelector('#about-card')
    if (previousAbout) {previousAbout.remove()}
    let startDiv = document.querySelector('#hero-container')
    startDiv.innerHTML = ""

    let aboutText = document.createElement('div')
    aboutText.textContent = "This is a placeholder for an about us Element for a pizza restaurant"

    let aboutTitle = document.createElement('h2')
    aboutTitle.setAttribute('id', 'about-title')
    aboutTitle.textContent= "Our Contact Details"

    aboutCard.appendChild(aboutTitle)
    aboutCard.appendChild(aboutText)

    startDiv.appendChild(aboutCard)

    let bgDiv = document.querySelector('#content')
    bgDiv.classList.remove('menu')
    bgDiv.classList.add('content')


}




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXN0YXJ0ZXIvLi9zcmMvYWJvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcblxuZnVuY3Rpb24gcG9wdWxhdGVBYm91dCgpIHtcblxuICAgIGxldCBhYm91dENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0Q2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LWNhcmQnKVxuICAgIGxldCBwcmV2aW91c0Fib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0LWNhcmQnKVxuICAgIGlmIChwcmV2aW91c0Fib3V0KSB7cHJldmlvdXNBYm91dC5yZW1vdmUoKX1cbiAgICBsZXQgc3RhcnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVyby1jb250YWluZXInKVxuICAgIHN0YXJ0RGl2LmlubmVySFRNTCA9IFwiXCJcblxuICAgIGxldCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0VGV4dC50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyBhIHBsYWNlaG9sZGVyIGZvciBhbiBhYm91dCB1cyBFbGVtZW50IGZvciBhIHBpenphIHJlc3RhdXJhbnRcIlxuXG4gICAgbGV0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgYWJvdXRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LXRpdGxlJylcbiAgICBhYm91dFRpdGxlLnRleHRDb250ZW50PSBcIk91ciBDb250YWN0IERldGFpbHNcIlxuXG4gICAgYWJvdXRDYXJkLmFwcGVuZENoaWxkKGFib3V0VGl0bGUpXG4gICAgYWJvdXRDYXJkLmFwcGVuZENoaWxkKGFib3V0VGV4dClcblxuICAgIHN0YXJ0RGl2LmFwcGVuZENoaWxkKGFib3V0Q2FyZClcblxuICAgIGxldCBiZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICBiZ0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51JylcbiAgICBiZ0Rpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcblxuXG59XG5cblxuXG5leHBvcnQge3BvcHVsYXRlQWJvdXR9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9