const arr = [12, 2, 1, 4, 18];
[arr[4], arr[3], arr[2], arr[1], arr[0]] = [arr[0], arr[1], arr[2], arr[3], arr[4]]
console.log(arr); 

let arr1 = [14, 3, 5, 7, 8, 11];
for(let i = 0, j = arr1.length - 1; i < j; i++, j--)
    [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
console.log(arr1);