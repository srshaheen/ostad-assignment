//calculate sum

function CalculateSum(a, b){
    let sum = a + b;
    return sum;
}




//is Even

function isEven(a){
    if(a % 2 == 0){
        return true;
    }else{
        return false;
    }
}



//find largest number of an array

function findMax(numbers) {
    let sortedArray = numbers.sort((a, b) => b - a);
    return sortedArray[0];
}



//reverse string
function reverseString(str) {
    return str.split('').reverse().join('');
}


//filter odd number
function filterOddNumbers(numbers) {
    return numbers.filter(number => number % 2 !== 0);
}


//sum of all element
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}


//sort array accending order
function sortArray(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}


//capitalize fist letter
function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}






