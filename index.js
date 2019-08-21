// Solution 1
function addClickListeners() {
  for (var i = 1; i <= 5; i++) {
  	// get the dom node of `button i`, ex: var btn = ...; 
    var btn = document.getElementById('btn' + i);
    // call btn.addEventListener('click', ...);
    btn.addEventListener('click', function(v) {
    	alert(v);
    }.bind(null, i));
  }
}

addClickListeners();

// Solution 2
// function createClickHandler(v) {
//   return function() {
//   	alert(v);
//   }
// }

// function addClickListeners() {
//   for (var i = 1; i <= 5; i++) {
//   	// get the dom node of `button i`, ex: var btn = ...; 
//     var btn = document.getElementById('btn' + i);
//     // call btn.addEventListener('click', ...);
//     btn.addEventListener('click', createClickHandler(i));
//   }
// }

// addClickListeners();


//Solution 3
// function addClickListeners() {
//   for (let i = 1; i <= 5; i++) {
//   	// get the dom node of `button i`, ex: var btn = ...; 
//     let btn = document.getElementById('btn' + i);
//     // call btn.addEventListener('click', ...);
//     btn.addEventListener('click', function() {
//     	alert(i);
//     });
//   }
// }

// addClickListeners();