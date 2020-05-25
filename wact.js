// console.log('Wact.js file loaded');
//add main wact class to body element
const bodytag = document.body;
bodytag.setAttribute("class", "wact-enable");

//create accessibility button inside body
// create div
const button = document.createElement('button');
//add class to button
// const wactbtn = button.setAttribute("class", "wact-btn");
// adjust button styling
button.setAttribute("style", "position:absolute;right:0px; margin-top: 10px;border: 1px solid #5f5f5f; border-radius: 25px;padding: 5px; background-color: lightblue");

//add text/icon to button
button.textContent = 'Wact';
// add/prepend the element to the body
bodytag.prepend(button);

// create the dropdown elements and add styles/classes
const dropel = document.createElement('div');
// dropel.setAttribute("class", "wact-container");
dropel.setAttribute("style", "background: red;display:none;");
dropel.innerHTML = 'Prepend div';

// create click event listener to element
// const wactClick = document.querySelector("button.wact-btn");
button.addEventListener('click', function(e) {
  dropel.style.cssText = "display:block; float:right; position:relative; top:40px; right:5px;";
  bodytag.prepend(dropel);
  // console.log(e);
}); // console.log(bodytag.style);
