"use strict";
// Red,Green,White,Black,orange 
let myColor = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
let output1 = myColor.join(",");
// Red+Green+White+Black
let output2 = myColor.join("+");
// Red,Green,White
let output3 = myColor.slice(0, 3).join(",");
// Red
let output4 = myColor[0];
// Green,White
let output5 = myColor.slice(1, 3).join(",");
// Red,Green,White,Black,orange
let output6 = myColor.concat("orange").join(",");
document.getElementById('ans1').innerHTML = output1 + "<br>" + output2 + "<br>" + output3 + "<br>" + output4 + "<br>" + output5 + "<br>" + output6 + "<br>";
// question 2
let numbers = [10, 20, 30, 90, 50];
// Using for loop
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i];
}
let sum2 = 0;
numbers.forEach(elements => sum2 += elements);
document.getElementById("ans2").innerHTML = "Sum using for loop = " + sum1 + "<br>" + "Sum using forEach loop = " + sum2;
// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic).
let numbers_2 = [10, 5, 25, 8, 30, 15];
function maxfinder(num) {
    let assumedmax = 0;
    for (let i = 0; i < numbers_2.length; i++) {
        if (assumedmax < numbers_2[i]) {
            assumedmax = numbers_2[i];
        }
    }
    return assumedmax;
}
function minfinder(mnum) {
    let assumedmin = 0;
    for (let j = 0; j > numbers_2.length; j++) {
        if (assumedmin < numbers_2[j]) {
            assumedmin = numbers_2[j];
        }
    }
    return assumedmin;
}
let max = maxfinder(numbers_2);
let min = minfinder(numbers_2);
document.getElementById("ans3").innerHTML = "Maximum = " + max + "<br>" + "Minimum = " + min;
// 4.Write a JavaScript program for convert all array element in ASCII value.
let letters = ["A", "B", "C", "D"];
// let ascll:number[] = [];
let asciiStr = '';
for (let i = 0; i < letters.length; i++) {
    asciiStr += letters[i].charCodeAt(0) + " ";
}
document.getElementById('ans4').innerHTML = asciiStr;
// 5.Write a JavaScript program for remove negative values using the filter array function.
let numbers_4 = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
document.getElementById('ans5').innerHTML = numbers_4.filter(num => num >= 0);
// 6. Write a JavaScript program using array map() method and return the square of array element.
let arr = [2, 5, 6, 3, 8, 9];
document.getElementById("ans6").innerHTML = arr.map(num => num * num);
// 7.Write a JavaScript program for sort array in ascending descending.
let numbers_5 = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
document.getElementById("ans7").innerHTML = numbers_5.sort((a, b) => a - b);
// 8. Write a JavaScript program which filters out any string which is less than 8 characters. 
let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
document.getElementById("ans8").innerHTML = words.filter(num => num.length < 8);
// 9. write a JavaScript program to  to print expected output for following string.
// x = "airplane";    output:- r
// x = "oxoxoxox";   output:- "oXoXoXoX"
// x = "A New Java Book";   
//  output:-  "a new java book" , "A NEW JAVA BOOK"
let x = "airplane";
let out1 = x[2];
// let x:string[] = ["a", "i", "r", "p", "l", "a", "n", "e"];
let z = "oxoxoxox";
let out2 = z.replaceAll('x', 'X');
let y = "a new java book";
let out3 = y.toLowerCase() + "<br>" + y.toUpperCase();
document.getElementById("ans9").innerHTML = out1 + '<br>' + out2 + '<br>' + out3;
// ans10
let normal = ["1", '2', '3', '4'];
let reversed = normal.reverse();
document.getElementById("ans10").innerHTML = reversed;
// ans11
let check = ["1", '2', '3', '4'];
let res = check.includes("100");
if (res == true) {
    document.getElementById("ans11").innerHTML = "yess array contains this value";
}
else {
    document.getElementById("ans11").innerHTML = "noo array does not contain this value";
}
//question12
let name3 = 'nihal';
let total_character = name3.length;
document.getElementById("ans12").innerHTML = total_character;
//question 13
let name2 = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";
let changed = name2.replaceAll('dog', 'cat');
document.getElementById("ans13").innerHTML = changed;
// question 14
let name4 = "Hire the top 1% freelance developers";
let output7 = name4.split(" ").slice(0, 4);
document.getElementById("ans14").innerHTML = output7.join();
// question 15
let str = ['5', '32', 'Daniel'];
let out = str.join(',');
document.getElementById("ans15").innerHTML = out;
