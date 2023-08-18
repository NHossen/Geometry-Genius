function calculateTriangleArea() {
    const getBaseValue=getElementByIdfunction('triangel-base','value');
//console.log(getBaseValue);
const getHeightValue=getElementByIdfunction('triangel-height','value');
//console.log(getHeightValue);
const areaOfTriangel=0.5*getBaseValue*getHeightValue;
setInnerText('triangel-area', areaOfTriangel);
}


function calculateRectangleArea(){
    const getWidthValue=getElementByIdfunction('rectangle-width','value');
    const getLengthValue=getElementByIdfunction('rectangle-length','value');
    const areaOfRectangel=getWidthValue*getLengthValue;
    setInnerText('rectangle-area',areaOfRectangel);
    
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



