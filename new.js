// Tryangel
function calculateTriangleArea() {
    const getBaseValue=getElementByIdfunction('triangel-base');
//console.log(getBaseValue);
const getHeightValue=getElementByIdfunction('triangel-height');
//console.log(getHeightValue);
const areaOfTriangel=0.5*getBaseValue*getHeightValue;
setInnerText('triangel-area', areaOfTriangel);

addToCalculationEntry('Tyaggel',areaOfTriangel);
}

//Rectangel
function calculateRectangleArea(){
    const getWidthValue=getElementByIdfunction('rectangle-width');
    const getLengthValue=getElementByIdfunction('rectangle-length');
    const areaOfRectangel=getWidthValue*getLengthValue;
    setInnerText('rectangle-area',areaOfRectangel);

    addToCalculationEntry('Rectangel',areaOfRectangel);
    
}
//parallelogram
function calculateParallelogramArea(){
    const getBaseValue=getElementByIdfunction('parallelogram-base');
    const getHeightValue=getElementByIdfunction('parallelogram-height');
    const areaOfParallelogram=getBaseValue*getHeightValue;
    setInnerText('parallelogram-area',areaOfParallelogram);

    //add to calculation entry

    addToCalculationEntry('Paralleogram',areaOfParallelogram);

}

//rhombus
function calculateRhombusArea(){
    const getValueRombosh=getElementByIdfunction('diagonal-base');
    const geDiagonal=getElementByIdfunction('diagonal-height');
    const areaOfRhombosh=0.5*getValueRombosh*geDiagonal;
    setInnerText('rhombus-area',areaOfRhombosh);
}

//pentagoan

function calculatePentagonArea(){
    const getValuePentagon=getElementByIdfunction('Pentagon-base');
    const getvalueB=getElementByIdfunction('Pentagon-height');
    const areaOfPentagon=0.5*getValuePentagon*getvalueB;
    setInnerText('Pentagon-area',areaOfPentagon);
}

//ellipse
function calculateEllipseArea(){
    const getValueElipse=getElementByIdfunction('Ellipse-a');
    const getValueelipseB=getElementByIdfunction('Ellipse-b');
    const areaOfElipseArea=3.1415*getValueElipse*getValueelipseB;
    const areaTwoDecimal=areaOfElipseArea.toFixed(2);
    setInnerText('Ellipse-area',areaTwoDecimal);
    

}



// Get value by function
function getElementByIdfunction(elementID){
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

//add to calculation entry
/*
 1.get the element where you want to add the dynamic html
 2.Create an element you want to add
 3.if needed add some class
 4.set inner html it could be dynamic template string
 5. add the create element by appenchild with paarent chaild
*/
function addToCalculationEntry(areaType,area){
    console.log(areaType+ ' ' + area)
    const calculationEntry=document.getElementById('calculation-entry');//step 1

       const count=calculationEntry.childElementCount;


    const p=document.createElement('p');//step 2
    p.innerHTML=`${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button">Convert</button>`             //areaType+ ' ' + area //area;
    calculationEntry.appendChild(p);
}


