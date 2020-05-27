document.addEventListener("DOMContentLoaded", function(){

  // console.log('Wact.js file loaded');
  //add main wact-enable class to body element
  const bodytag = document.body;
  bodytag.setAttribute("class", "wact-enable");

  //create accessibility button inside body
  const button = document.createElement('button');

  //add text/icon to button with textContent
  button.textContent = 'Wact';

  // adjust button styling with set attribute
  button.setAttribute("style", "position:fixed;right:0px; margin-top: 10px;border: 1px solid #5f5f5f; border-radius: 25px;padding: 5px; background-color: lightblue");

  // add/prepend the element to the body
  bodytag.prepend(button);

  // create the dropdown elements and add styles/classes
  const dropel = document.createElement('div');
  // dropel.setAttribute("class", "wact-container"); //not used tersting below
  dropel.style.display = "none"; // initial value, uncomment aftyer
  // bodytag.prepend(dropel); // comment by default
  dropel.style.cssText = "position:fixed; right:5px; top: 8%;max-width:100%; border:1px solid #000000; background-color: #5f5f5f;color: #fff;";

  // use innerHTML to create the wact dropdown elements
  dropel.innerHTML = [{
    fontsize: 'Font-Size'
  },
  {
    animation: 'Stop Animations'
  },
  {
    keyboard: 'Keyboard'
  }
];

// create click event listener to element with anonymous function
button.addEventListener('click', function() {
  if (dropel.style.display == "none") {
    // use prepend because i want the div to appear below button
    bodytag.prepend(dropel);
    // use text css alternative to style attribute
    dropel.style.cssText = "display:block; float:right; position:fixed; top:8%; right:5px;";
  } else {
    dropel.setAttribute('style', "display:none");
  }
});

// javascript style images to fit container of 100% width
const img = bodytag.querySelectorAll('img');
img.forEach(function(i) {
  i.style.width = '100%';
});

// end document.DOMContentLoaded
})
