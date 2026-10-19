// Red,Green,White,Black,orange 
let myColor:string[] = ["Red", "Green", "White", "Black"];
// Red,Green,White,Black
let output1:string = myColor.join(",");
// Red+Green+White+Black
let output2:string = myColor.join("+");
// Red,Green,White
let output3:string = myColor.slice(0, 3).join(",");
// Red
let output4:string = myColor[0];
// Green,White
let output5:string = myColor.slice(1, 3).join(",");
// Red,Green,White,Black,orange
let output6:string = myColor.concat("orange").join(",");
document.getElementById('ans1').innerHTML = output1 + "<br>" + output2 + "<br>" + output3 + "<br>" + output4 + "<br>" + output5 + "<br>" + output6 + "<br>";




// question 2
let numbers:number[] = [10, 20, 30, 90, 50];
// Using for loop
let sum1:number = 0;
for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i];
} 


let sum2:number = 0;
numbers.forEach(elements => sum2 += elements)


document.getElementById("ans2")!.innerHTML ="Sum using for loop = " + sum1 + "<br>" + "Sum using forEach loop = " + sum2;

// 3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic).

let numbers_2 = [10, 5, 25, 8, 30, 15];

function maxfinder(num:number[]){
    let assumedmax:number = 0;
    for(let i:number = 0; i<numbers_2.length; i++){
        if(assumedmax < numbers_2[i]){
            assumedmax=numbers_2[i]
        }
    }
    return assumedmax;
}

function minfinder(mnum:number[]){
    let assumedmin:number = 0;
    for(let j:number =0; j>numbers_2.length; j++){
        if(assumedmin < numbers_2[j]){
            assumedmin=numbers_2[j]
        }
    }
    return assumedmin;
}

let max:number = maxfinder(numbers_2);
let min:number = minfinder(numbers_2);
document.getElementById("ans3")!.innerHTML ="Maximum = " + max + "<br>" +"Minimum = " + min;


// 4.Write a JavaScript program for convert all array element in ASCII value.
let letters:string[] = ["A", "B", "C", "D"];
// let ascll:number[] = [];
let asciiStr:string='';

for(let i:number = 0; i<letters.length; i++){
    asciiStr += letters[i].charCodeAt(0) + " ";
}
document.getElementById('ans4')!.innerHTML=asciiStr;


// 5.Write a JavaScript program for remove negative values using the filter array function.

let numbers_4:number[] = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];
document.getElementById('ans5')!.innerHTML=numbers_4.filter(num => num>=0)

// 6. Write a JavaScript program using array map() method and return the square of array element.

let arr = [2, 5, 6, 3, 8, 9];
document.getElementById("ans6")!.innerHTML=arr.map(num => num*num)

// 7.Write a JavaScript program for sort array in ascending descending.

let numbers_5 = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
document.getElementById("ans7")!.innerHTML=numbers_5.sort((a,b)=>a-b)

// 8. Write a JavaScript program which filters out any string which is less than 8 characters. 

let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];
document.getElementById("ans8")!.innerHTML= words.filter(num => num.length<8)



// 9. write a JavaScript program to  to print expected output for following string.
// x = "airplane";    output:- r
// x = "oxoxoxox";   output:- "oXoXoXoX"
// x = "A New Java Book";   
//  output:-  "a new java book" , "A NEW JAVA BOOK"
let x:string="airplane"
let out1:string = x[2];
// let x:string[] = ["a", "i", "r", "p", "l", "a", "n", "e"];
let z:string="oxoxoxox";
let out2:string = z.replaceAll('x', 'X');

let y:string="a new java book";

let out3:string =y.toLowerCase() +"<br>"+ y.toUpperCase();

document.getElementById("ans9")!.innerHTML= out1 + '<br>' + out2 + '<br>' + out3;


// ans10

let normal:string[] = ["1", '2', '3', '4'];

let reversed:string[] = normal.reverse()
document.getElementById("ans10")!.innerHTML= reversed;


// ans11

let check:string[] = ["1", '2', '3', '4'];
let res:boolean = check.includes("100");
if(res==true){
    document.getElementById("ans11")!.innerHTML= "yess array contains this value";
}else{
    document.getElementById("ans11")!.innerHTML= "noo array does not contain this value";

}


//question12
let name3:string = 'nihal';
let total_character:number = name3.length;

document.getElementById("ans12")!.innerHTML= total_character;


//question 13

let name2:string = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

let changed:string = name2.replaceAll('dog', 'cat');
document.getElementById("ans13")!.innerHTML= changed;


// question 14

let name4:string = "Hire the top 1% freelance developers";
let output7:string[]= name4.split(" ").slice(0,4)

document.getElementById("ans14")!.innerHTML=output7.join(,);

// question 15

let str:string[] =  ['5', '32', 'Daniel'];

let out:string = str.join(',');

document.getElementById("ans15")!.innerHTML=out;
