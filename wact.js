document.addEventListener("DOMContentLoaded", function () {
  /**
   * Basic Setup
   * Style dom elements
   **********************
   * Currently the image tags
   * set js attribute for width to be 100%
   * of the parent element
   */

  //add main wact-enable class to body element-------------------------
  const bodytag = document.body;
  // not used anywhere but let it here
  bodytag.setAttribute("class", "wact-enable");

  // javascript style images to fit container of 100% width----------------
  const img = bodytag.querySelectorAll("img");
  img.forEach(function (i) {
    i.style.width = "100%";
  });

  /**
   * Head elements and links
   */
  // structure font awasome cdn------------
  const head = document.querySelector("head");
  const link = document.createElement("link");
  head.appendChild(link); // apend the link tab in the head of the document before assigning it, for integrity issues
  //Object.assign for multiple html tags
  Object.assign(link, {
    "href": "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    "rel": "stylesheet",
    "integrity": "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
    "crossorigin": "anonymous",
  });

  /**
   * button ----------------------
   * create accessibility button inside DOM
   */

  const button = document.createElement("button");

  //add text/icon to button with textContent/innerHTML
  button.innerHTML = '<i class="fa fa-universal-access fa-3x"></i>';
  //add id to button, not so needed after second thought
  button.setAttribute("id", "dropbutton");
  // adjust button styling with set attribute
  button.setAttribute("style", "position:fixed;right:0px; margin-top: 10px;border: 1px solid #5f5f5f; border-radius: 25px;");

  // add/prepend the element to the body
  bodytag.prepend(button);

  /**
   * create the dropdown elements and add styles/classes/etc
   */
  const dropel = document.createElement("div");

  /**
   *  SOS SOS SOS SOS -------------------------------
   * remove csstext below, it is used to keep the drop element open during development
   * uncomment dropel.style.display = "none";
   * append methods after testing
   */
  // SOS SOS SOS UNCOMMENT AFTER DEVELOPMENT
  // dropel.style.display = "none";
  dropel.style.cssText = "position:fixed; right:5px; top: 10%;max-width:100%; border:2px solid #f5f5f5;border-radius: 25px; background-color: #5f5f5f;color: #fff;";
  bodytag.prepend(dropel);
  // remove csstext end and append methods after testing ---------------

  /**
   * widget elements start here
   -----------------------------------
   */

  /**
   * APPEND TO main container widget to the dropped element div
   */
  const wactWidget = document.createElement("div");
  wactWidget.setAttribute("id", "wactwidget");
  wactWidget.setAttribute("style", "position:relative;padding: 10px;");
  //add the above id inside the div
  dropel.appendChild(wactWidget); //<div id="wactwidget"></div>

  /**
   * add widget div header
   */
  let wactWidgetHead;
  wactWidgetHead = document.createElement("div");
  wactWidgetHead.setAttribute("id", "wact-header");
  wactWidgetHead.setAttribute(
    "style",
    "text-align:center;padding-bottom:5px;border-bottom: 2px solid #f5f5f5;"
  );
  wactWidgetHead.textContent = "Wact Widget header";
  wactWidget.appendChild(wactWidgetHead); //<div id="wactWidgetHead"></div>

  /**
   * add widget div inner
   */
  const wactWidgetInner = document.createElement("div");
  wactWidgetInner.setAttribute("id", "wact-inner");
  wactWidgetInner.setAttribute("style", "height:200px;background-color: #5f5f5f;margin:10px;padding:5px;border:1px solid black;");
  // wactWidgetInner.textContent = "Wact Widget Inner";
  wactWidget.appendChild(wactWidgetInner); //<div id="wactWidgetHead"></div>

  /**
   * create the main widget section
   */
   // create main div for class="widget column"
  const wactWidgetMainDiv = document.createElement("div");
  // assign column class to above div
  const wactWidgetColumn = wactWidgetMainDiv.setAttribute("id", "widgetcolumn");
  // add created div class widgetcolumn inside the inner widget div
  wactWidgetInner.prepend(wactWidgetMainDiv);

  /**
   * Create the tools object items
   * later assigned to the inner widget columns
   object tools
   let Tools
   ingedients:
   name:
   hover title:
   icon:
   dom function:

   */
   // append or import
  wactWidgetMainDiv.append("wact inner container for some web accessibility tools"); // for simple text/string use the textContent = "";

  //create object for each items - title, icon, function
  // start loop


  /**
   * add table footer
   */
  const wactWidgetFooter = document.createElement("div");
  wactWidgetFooter.setAttribute("id", "wact-footer");
  wactWidgetFooter.setAttribute("style", "position:relative;padding: 0px;text-align:center;");
  wactWidgetFooter.textContent = "Wact Widget Footer";
  wactWidget.appendChild(wactWidgetFooter); //<div id="wactWidgetHead"></div>


  /**
   *  create click event listener to element with anonymous function
   */
  button.addEventListener("click", function () {
    if (dropel.style.display == "none") {
      // use text css alternative to style attribute
      dropel.style.cssText = "position:fixed; right:5px; top: 10%;max-width:100%; border:2px solid #f5f5f5;border-radius: 25px; background-color: #5f5f5f;color: #fff;";
      // use prepend because i want the div to appear below button
      bodytag.prepend(dropel);
    }
    else {
      dropel.setAttribute("style", "display:none");
    }
  });

  // end document.DOMContentLoaded
});
