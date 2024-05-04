// 4) Sample data with mixed types in nested arrays
const mixedData = [
  [1, 'apple', 3, 'banana'],
  [4, 'orange', 6, 'grape'],
  [7, 'pear', 9, 'kiwi'],
  [10, 'melon', 12, 'strawberry']
];
// 1) Use map to create an array of strings containing both the type and value of each element.
newArr = mixedData.map((element)=>element.map((items)=>`${typeof items}:${items}`))
console.log("1)     ",newArr);
console.log('---------------------------------------');

// 2) Use filter to get all arrays where the number of strings is greater than the number of numbers
 filteredArrays = mixedData.filter(subArray =>
    subArray.filter(item => typeof item === 'string').length > subArray.filter(item => typeof item === 'number').length
  );
console.log(filteredArrays);
console.log('---------------------------------------');
// 3) Use reduce to concatenate all strings in the nested arrays into a single sentence.
console.log(mixedData.flat().filter(item=>typeof(item)=='string').reduce((n1,n2)=>n1+' '+n2));
console.log('---------------------------------------');

// 5) Use sort to sort the nested arrays based on the length of strings in each array.
sortString = mixedData.map((values)=>`${typeof values == String}`).sort((n1,n2)=>n1-n2)
console.log(sortString);
console.log('---------------------------------------');

// 6) Use map to convert each string in the nested arrays to its uppercase form.
UpperCase = mixedData.map((element)=> element.map((value)=>typeof value == 'string'? value.toUpperCase():value))
console.log(UpperCase);
console.log('---------------------------------------');
// 
//  7) Use filter to get all arrays where the sum of numbers is greater than 20.
sumFilter = mixedData.filter((elements) => elements.filter((items)=> typeof items == 'number').reduce((n1,n2) => n1+n2, 0) > 20 )
console.log(sumFilter);
console.log('---------------------------------------');

// 8) Use reduceRight to concatenate and flatten all nested arrays in reverse order.
a=mixedData.flat()
reverse = mixedData.reduceRight((n1,n2)=>n1.concat(n2))
console.log(reverse);

// 9) Use arrayFrom to create an array of the lengths of all strings in the nested arrays.
lengthStr = Array.from(mixedData ).flat().filter((elements)=>typeof elements == 'string').map((str)=>str.length)
console.log(lengthStr);

// 10) Use includes to check if the word 'apple' is present in any of the nested arrays.
include = a.includes('apple')
console.log(include);
 