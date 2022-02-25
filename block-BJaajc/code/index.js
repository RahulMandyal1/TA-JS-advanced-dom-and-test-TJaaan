// Function to get fullName 
function getFullName(firstName ,lastName){
    return `${firstName} ${lastName}`;
}
//function to get palindorme 

function isPalidrome(str){
    let getArray = str.split('');
    let arr  = getArray.reverse();
    let reversedStr = arr.reduce((acc,cv)=>{
        acc+=cv;
        return acc;
    },'');
    return str === reversedStr;
}
// function to get circumfrence 

function isCircumfrence(radius){
    let circumfrence  =  2*3.14*radius;
    return `The circumference is ${circumfrence}`;
}

//function to  get area of a circle 

function getArea(radius){
    let r = radius*radius;
    let area  = 3.14*r;
    return `The area is ${area}`;
}

module.exports = {
    getFullName,
    isPalidrome,
    isCircumfrence,
    getArea
};