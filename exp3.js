// 3) Sample data with nested arrays 

const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10,11,12]];

// 1) Find the sum of all numbers in the nested arrays
a = data.flat()
sum = a.reduce((n1,n2) => n1+n2)
console.log(`1)  the sum of numbers  is`, sum);
console.log('-------------------------------------------------');

// 2) Find the maximum number in the entire nested array.
maximum = a.reduce((n1,n2) => n1>n2?n1:n2)
console.log('2)  The maximum of number is',maximum);
console.log('-------------------------------------------------');

// 3) Find the average of all numbers in the nested arrays.
average = sum /a.length
console.log("3)  The sum of the number ",average);
console.log('-------------------------------------------------');

// 4) Find square of each number in the nested arrays.
square = data.map((value) => value.map((element)=>element**2))
console.log("4)  the square root of number is",square);
console.log('-------------------------------------------------');

// 5) Find all even numbers from the nested arrays.
even = a.filter((value)=>value%2==0)
console.log("5)  the even numbers from the nested array",even);
console.log('-------------------------------------------------');

// 6) Use reduceRight to concatenate all nested arrays in reverse order.
reverse = data.reduceRight((n1,n2)=>n1.concat(n2))
console.log("6) reverse",reverse);
console.log('-------------------------------------------------');

// 7) create a flattened array from the nested arrays.
a = data.flat()
console.log(a);
console.log('-------------------------------------------------');

// 8) check if the number 5 is present in any of the nested arrays
x = a.some((value)=>value==5)
console.log(`8)  the value 5 is presented`,x );
console.log('-------------------------------------------------');

// 9) create a single string of all numbers separated by a comma.
string = a.toString()
console.log('9)  create a single string of all numbers separated by a comma.',string);
console.log('-------------------------------------------------');

//  10) Print each number in the nested arrays.
a.forEach((element) => {console.log(element);})
console.log('-------------------------------------------------');

// 11) Sort the nested arrays based on the sum of their numbers.
sumNested = data.map((values)=>values.reduce((n1,n2) => n1+n2))
console.log('11)   ',sumNested);
console.log('-------------------------------------------------');

 
//12) Use map to get the product of the first and last number in each nested array.
product = data.map((values)=>values[0]*values[values.length-1])
console.log('Use map to get the product of the first and last number in each nested array.',product);
console.log('-------------------------------------------------');

// 13) Use filter to get all arrays where the sum of numbers is greater than 15.
grether = sumNested.filter((element)=>element>15)
console.log(`13 )  Use filter to get all arrays where the sum of numbers is greater than 15`, grether);
console.log('-------------------------------------------------');

// 14) Use reduce to find the product of all numbers in the nested arrays.
products = a.reduce((n1,n2) => n1*n2)
console.log(`14)  the sum of numbers  is`, products);
console.log('-------------------------------------------------');

// 15) create an array of square roots of all numbers in the nested arrays.
squareRoot = data.map((elelments)=>elelments.map((value) =>Math.sqrt(value)))
console.log(`15)  squareRoot`, squareRoot);
console.log('-------------------------------------------------');

//16 Use includes to check if the number 20 is present in any of the nested arrays.
include = a.includes(elelments => elelments==20)
console.log(`16)  the number 20 is present`,include);
console.log('-------------------------------------------------');

// 17) Use map to convert each number in the nested arrays to its string representation.
stringRepo = data.map((element)=>element.map((value)=>value.toString()))
console.log(stringRepo);
console.log('-------------------------------------------------');

//18) Use filter to get all arrays where the length is greater than 2
lengthGre = data.filter((value)=>value.length>2)
console.log(lengthGre);
console.log('-------------------------------------------------');

// 19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.
reverseCon = data.reduceRight((n1,n2)=>n1.concat(n2)).sort((n1,n2)=>n2-n1)
console.log(reverseCon);
console.log('-------------------------------------------------');


// 20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.
evenSqaure = Array.from(a).map((elelments)=>elelments**2).filter((items) =>items%2==0)
console.log("create an array of squares of all even numbers",evenSqaure);
console.log('-------------------------------------------------');

// 21) Sort the nested arrays based on the length of each array.
sortLength = data.sort((a,b)=>a.length-b.length)
console.log(" Sort the nested arrays based on the length of each array.",sortLength);
console.log('-------------------------------------------------');

// 22) Use map to convert each number in the nested arrays to its negative.
negative = data.map((values)=>values.map((items)=>-items))
console.log(`negative`, negative);
console.log('-------------------------------------------------');

// 23) Use filter to get all arrays where the last number is greater than 10.
 filteredArrays = data.filter(array => array[array.length - 1] > 10);
console.log(`Use filter to get all arrays where the last number is greater than 10.`, filteredArrays);
console.log('-------------------------------------------------');

//  24) Use reduceRight to get the difference between consecutive numbers in each nested array.




// 25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.
evenSqaureRoot = Array.from(a).filter((items) =>items%2==0).map((elelments)=>Math.sqrt(elelments))
console.log("create an array of squares of all even numbers",evenSqaureRoot);
console.log('-------------------------------------------------');

// 26) Use includes to check if the number 15 is present in any of the nested arrays.
presentOrnot = a.includes(15)
console.log(`presentOrnot`, presentOrnot);
console.log('-------------------------------------------------');

// 27) Use map to convert each number in the nested arrays to its absolute value.






// 28) Use filter to get all arrays where the first number is less than 5.
lessthan5 = data.filter(elements=>elements[0]<5)
console.log(`Use filter to get all arrays where the first number is less than 5.`, lessthan5);
console.log('-------------------------------------------------');

// 29) Use reduceRight to concatenate and flatten all nested arrays in reverse order.

//30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.
greaterthan5 = Array.from(data).map((items)=>items.filter((values)=>values>5))
console.log(greaterthan5);
console.log('-------------------------------------------------');
