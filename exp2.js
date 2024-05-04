// 2) Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

str = "dog";
output = [];

ans1 = str.charAt(0);

ans2 = str.substring(0, 2);

ans = str.charAt(1);

ans3 = str.substring(1, 3);

ans4 = str.charAt(2);

output.push(ans1, ans2, str, ans, ans3, ans4);
console.log(output);
