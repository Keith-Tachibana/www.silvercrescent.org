// Detect if the browser is IE or not.
// If it is not IE, we assume that the browser is NS.
const IE = document.all ? true : false

// If NS -- that is, !IE -- then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE)

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
let tempX = 0;
let tempY = 0;


const objectArray = [];

fillObjectArray();
positionDivs();

function fillObjectArray() {
  const demon1Div = document.getElementById("demon1");
  const demon1X = 10; //position div from half width of the page
  const demon1Y = 415;
  const demon1Factor = 0.15 //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const demon1Array = [];
  demon1Array.push(demon1Div, demon1X, demon1Y, demon1Factor);
  objectArray.push(demon1Array);

  const demon2Div = document.getElementById("demon2");
  const demon2X = 90; //position div from half width of the page
  const demon2Y = 390;
  const demon2Factor = 0.16 //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const demon2Array = [];
  demon2Array.push(demon2Div, demon2X, demon2Y, demon2Factor);
  objectArray.push(demon2Array);

  const demon3Div = document.getElementById("demon3");
  const demon3X = 160; //position div from half width of the page
  const demon3Y = 400;
  const demon3Factor = 0.17 //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const demon3Array = [];
  demon3Array.push(demon3Div, demon3X, demon3Y, demon3Factor);
  objectArray.push(demon3Array);

  const demon4Div = document.getElementById("demon4");
  const demon4X = 220; //position div from half width of the page
  const demon4Y = 420;
  const demon4Factor = 0.18 //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const demon4Array = [];
  demon4Array.push(demon4Div, demon4X, demon4Y, demon4Factor);
  objectArray.push(demon4Array);

  const imp1Div = document.getElementById("imp1");
  const imp1X = 0; //position div from half width of the page
  const imp1Y = 10;
  const imp1Factor = 0.1; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const imp1Array = [];
  imp1Array.push(imp1Div, imp1X, imp1Y, imp1Factor);
  objectArray.push(imp1Array);

  const imp2Div = document.getElementById("imp2");
  const imp2X = 0; //position div from half width of the page
  const imp2Y = 275;
  const imp2Factor = 0.11; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const imp2Array = [];
  imp2Array.push(imp2Div, imp2X, imp2Y, imp2Factor);
  objectArray.push(imp2Array);

  const imp3Div = document.getElementById("imp3");
  const imp3X = 250; //position div from half width of the page
  const imp3Y = 275;
  const imp3Factor = 0.12; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const imp3Array = [];
  imp3Array.push(imp3Div, imp3X, imp3Y, imp3Factor);
  objectArray.push(imp3Array);

  const imp4Div = document.getElementById("imp4");
  const imp4X = 200; //position div from half width of the page
  const imp4Y = 50;
  const imp4Factor = 0.13; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const imp4Array = [];
  imp4Array.push(imp4Div, imp4X, imp4Y, imp4Factor);
  objectArray.push(imp4Array);

  const tombstone1Div = document.getElementById("tombstone1");
  const tombstone1X = 0; //position div from half width of the page
  const tombstone1Y = 375;
  const tombstone1Factor = 0.11; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const tombstone1Array = [];
  tombstone1Array.push(tombstone1Div, tombstone1X, tombstone1Y, tombstone1Factor);
  objectArray.push(tombstone1Array);

  const tombstone2Div = document.getElementById("tombstone2");
  const tombstone2X = 250; //position div from half width of the page
  const tombstone2Y = 350;
  const tombstone2Factor = 0.12; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const tombstone2Array = [];
  tombstone2Array.push(tombstone2Div, tombstone2X, tombstone2Y, tombstone2Factor);
  objectArray.push(tombstone2Array);

  const flames1Div = document.getElementById("flames1");
  const flames1X = 0; //position div from half width of the page
  const flames1Y = 410;
  const flames1Factor = 0.01; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const flames1Array = [];
  flames1Array.push(flames1Div, flames1X, flames1Y, flames1Factor);
  objectArray.push(flames1Array);

  const flames2Div = document.getElementById("flames2");
  const flames2X = 50; //position div from half width of the page
  const flames2Y = 410;
  const flames2Factor = 0.02; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const flames2Array = [];
  flames2Array.push(flames2Div, flames2X, flames2Y, flames2Factor);
  objectArray.push(flames2Array);

  const flames3Div = document.getElementById("flames3");
  const flames3X = 100; //position div from half width of the page
  const flames3Y = 410;
  const flames3Factor = 0.03; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const flames3Array = [];
  flames3Array.push(flames3Div, flames3X, flames3Y, flames3Factor);
  objectArray.push(flames3Array);

  const flames4Div = document.getElementById("flames4");
  const flames4X = 150; //position div from half width of the page
  const flames4Y = 410;
  const flames4Factor = 0.04; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const flames4Array = [];
  flames4Array.push(flames4Div, flames4X, flames4Y, flames4Factor);
  objectArray.push(flames4Array);

  const flames5Div = document.getElementById("flames5");
  const flames5X = 200; //position div from half width of the page
  const flames5Y = 410;
  const flames5Factor = 0.05; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const flames5Array = [];
  flames5Array.push(flames5Div, flames5X, flames5Y, flames5Factor);
  objectArray.push(flames5Array);

  const flames6Div = document.getElementById("flames6");
  const flames6X = 250; //position div from half width of the page
  const flames6Y = 410;
  const flames6Factor = 0.06; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const flames6Array = [];
  flames6Array.push(flames6Div, flames6X, flames6Y, flames6Factor);
  objectArray.push(flames6Array);

  const sunDiv = document.getElementById("sun");
  const sunX = 30; //position div from half width of the page
  const sunY = 0;
  const sunFactor = 0.2; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  const sunArray = [];
  sunArray.push(sunDiv, sunX, sunY, sunFactor);
  objectArray.push(sunArray);
}

// Main function to retrieve mouse x-y pos.s

function getMouseXY(e) {
  if (IE) { // grab the x-y pos.s if browser is IE
    tempX = event.clientX + document.body.scrollLeft;
    tempY = event.clientY + document.body.scrollTop;
  } else {  // grab the x-y pos.s if browser is NS
    tempX = e.pageX;
    tempY = e.pageY;
  }
  // catch possible negative values in NS4
  if (tempX < 0) { tempX = 0 }
  if (tempY < 0) { tempY = 0 }

  moveDiv(tempX);

  return true;
}

function moveDiv(tempX) {
  const windowWidth = window.innerWidth;
  for (let i = 0; i < objectArray.length; i++) {
    const yourDivPositionX = objectArray[i][3] * (0.5 * windowWidth - tempX) + objectArray[i][1];
    objectArray[i][0].style.left = yourDivPositionX + 'px';
  }
}

function positionDivs() {
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i][0].style.left = objectArray[i][1] + "px";
    objectArray[i][0].style.top = objectArray[i][2] + "px";
  }
}
