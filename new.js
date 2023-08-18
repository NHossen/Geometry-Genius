// Tryangel
function calculateTriangleArea() {
    const getBaseValue=getElementByIdfunction('triangel-base','value');
//console.log(getBaseValue);
const getHeightValue=getElementByIdfunction('triangel-height','value');
//console.log(getHeightValue);
const areaOfTriangel=0.5*getBaseValue*getHeightValue;
setInnerText('triangel-area', areaOfTriangel);
}

//Rectangel
function calculateRectangleArea(){
    const getWidthValue=getElementByIdfunction('rectangle-width','value');
    const getLengthValue=getElementByIdfunction('rectangle-length','value');
    const areaOfRectangel=getWidthValue*getLengthValue;
    setInnerText('rectangle-area',areaOfRectangel);
    
}
//parallelogram
function calculateParallelogramArea(){
    const getBaseValue=getElementByIdfunction('parallelogram-base','value');
    const getHeightValue=getElementByIdfunction('parallelogram-height','value');
    const areaOfParallelogram=getBaseValue*getHeightValue;
    setInnerText('parallelogram-area',areaOfParallelogram);
}

//rhombus
function calculateRhombusArea(){
    const getValueRombosh=getElementByIdfunction('diagonal-base','value');
    const geDiagonal=getElementByIdfunction('diagonal-height','value');
    const areaOfRhombosh=0.5*getValueRombosh*geDiagonal;
    setInnerText('rhombus-area',areaOfRhombosh);
}

//pentagoan

function calculatePentagonArea(){
    const getValuePentagon=getElementByIdfunction('Pentagon-base','value');
    const getvalueB=getElementByIdfunction('Pentagon-height','value');
    const areaOfPentagon=0.5*getValuePentagon*getvalueB;
    setInnerText('Pentagon-area',areaOfPentagon);
}

//ellipse
function calculateEllipseArea(){
    const getValueElipse=getElementByIdfunction('Ellipse-a','value');
    const getValueelipseB=getElementByIdfunction('Ellipse-b','value');
    const areaOfElipseArea=3.1415*getValueElipse*getValueelipseB;
    setInnerText('Ellipse-area',areaOfElipseArea);
    

}



// Get value by function
function getElementByIdfunction(elementID,valueID){
    const elementValue=document.getElementById(elementID);
    const value=elementValue.value;
    const valueParseIntoFlot=parseFloat(value);
    return valueParseIntoFlot
}
//set value by function
function setInnerText(elementID, newText) {
    const element = document.getElementById(elementID);
    element.innerText = newText;
}



