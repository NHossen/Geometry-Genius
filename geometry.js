// console.log('Cliked')

function calculateTyangleArea(){
    const baseBase=document.getElementById("triangel-base").value;
    const base=parseFloat(baseBase)
   
    //console.log(base)

    const baseheight=document.getElementById("triangel-height").value;
    const height=parseFloat(baseheight);

    //console.log(height)

    const triangelSqare=0.5*base*height;

    //console.log(triangelSqare)

    const triangelArea=document.getElementById('triangel-area');
    triangelArea.innerText=triangelSqare

}