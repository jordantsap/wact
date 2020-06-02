document.addEventListener("DOMContentLoaded", function () {
  /**
   * Basic Setup
   * Style dom elements
   **********************
   * Currently the image tags
   * set js attribute for width to be 100%
   * of the parent element
   */

  //add main wact-enable class to body element
  const bodytag = document.body;
  bodytag.setAttribute("class", "wact-enable");

  // javascript style images to fit container of 100% width
  const img = bodytag.querySelectorAll("img");
  img.forEach(function (i) {
    i.style.width = "100%";
  });

  // structure font awasome cdn
  const head = document.querySelector("head");
  const link = document.createElement("link");
  head.appendChild(link); // apend the link tab in the head of the document before assigning it, for integrity issues
  //Object.assign for multiple assignments
  Object.assign(link, {
    "href": "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    "rel": "stylesheet",
    "integrity": "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
    "crossorigin": "anonymous",
  });

  //create accessibility button inside DOM
  const button = document.createElement("button");

  //add text/icon to button with textContent/innerHTML
  button.innerHTML = '<i class="fa fa-universal-access fa-3x"></i>';
  //add id to button, not so needed after second thought
  button.setAttribute("id", "dropbutton");
  // adjust button styling with set attribute
  button.setAttribute("style", "position:fixed;right:0px; margin-top: 10px;border: 1px solid #5f5f5f; border-radius: 25px;");

  // add/prepend the element to the body
  bodytag.prepend(button);

  // create the dropdown elements and add styles/classes/etc
  const dropel = document.createElement("div");

  dropel.style.display = "none";

  // remove csstext and append methods after testing
  dropel.style.cssText = "position:fixed; right:5px; top: 10%;max-width:100%; border:2px solid #f5f5f5;border-radius: 25px; background-color: #5f5f5f;color: #fff;";
  bodytag.prepend(dropel);

  /*widget elements start here*/
  // main container widget
  const wactWidget = document.createElement("div");
  wactWidget.setAttribute("id", "wactwidget");
  wactWidget.setAttribute("style", "position:relative;padding: 10px;");
  //add the above id inside the div
  dropel.appendChild(wactWidget); //<div id="wactwidget"></div>

  // add div header
  let wactWidgetHead;
  wactWidgetHead = document.createElement("div");
  wactWidgetHead.setAttribute("class", "wact-header");
  wactWidgetHead.setAttribute(
    "style",
    "text-align:center;padding-bottom:5px;border-bottom: 2px solid #f5f5f5;"
  );
  wactWidgetHead.textContent = "Wact Widget header";
  wactWidget.appendChild(wactWidgetHead); //<div id="wactWidgetHead"></div>

  //add div inner
  const wactWidgetInner = document.createElement("div");
  wactWidgetInner.setAttribute("class", "wact-inner");
  wactWidgetInner.setAttribute("style", "height:200px;background-color: #5f5f5f;margin:10px;padding:5px;border:1px solid black;");
  wactWidgetInner.textContent = "Wact Widget Inner";
  wactWidget.appendChild(wactWidgetInner); //<div id="wactWidgetHead"></div>

  // create the main table for widget
  const wactWidgetTable = document.createElement("table");

  // start widget table items with pr, td
  //create object for each items - title, icon, function
  // start loop
  wactWidgetInner.innerHTML = [
    {
      fontsize: "Font-Size",
    },
    {
      animation: "Stop Animations",
    },
    {
      keyboard: "Keyboard",
    },
  ];

  // add table footer
  const wactWidgetFooter = document.createElement("div");
  wactWidgetFooter.setAttribute("class", "wact-footer");
  wactWidgetFooter.setAttribute("style", "position:relative;padding: 0px;text-align:center;");
  wactWidgetFooter.textContent = "Wact Widget Footer";
  wactWidget.appendChild(wactWidgetFooter); //<div id="wactWidgetHead"></div>

  // create click event listener to element with anonymous function
  button.addEventListener("click", function () {
    if (dropel.style.display == "none") {
      // use prepend because i want the div to appear below button
      bodytag.prepend(dropel);
      // use text css alternative to style attribute
      dropel.style.cssText = "position:fixed; right:5px; top: 10%;max-width:100%; border:2px solid #f5f5f5;border-radius: 25px; background-color: #5f5f5f;color: #fff;";
    }
    else {
      dropel.setAttribute("style", "display:none");
    }
  });

  // end document.DOMContentLoaded
});
