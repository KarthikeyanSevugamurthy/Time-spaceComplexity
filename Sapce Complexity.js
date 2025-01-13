function constantSpace(arr) {
    [arr[0], arr[1]] = [arr[1], arr[0]]; 
    console.log(arr);
}
function linearSpace(arr) {
    let newArray = [...arr]; 
    console.log(newArray);
}

function binarysearch(arr,target)
{
   l=0;h=arr.length-1;
   while(l<=h)
   {
    mid =Math.floor((l+h)/2);
    if(arr[mid]===target)
    {
        return "FOUND";
    }
    else if(arr[mid]<target)
    {
      l=mid+1;
    }
    else
    {
        h=mid-1;
    }
   }
  
}
function mergeSort(arr) {
    if (arr.length <= 1) return arr; 
    let mid = Math.floor(arr.length / 2); 
    let left = mergeSort(arr.slice(0, mid)); 
    let right = mergeSort(arr.slice(mid)); 
    return merge(left, right); 
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    while(i < left.length)
        result.push(left[i++]);
    while(j < right.length)
        result.push(right[j++]);
    return result;
}
function quadraticSpace(arr) {
    
    let arr2 = Array.from({ length: arr.length }, () => Array(arr.length).fill(0));

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            arr2[i][j] = arr[i][j] + arr[j][i]; 
        }
    }
    console.log(arr2);
  
}

let arr=[[1,2,3],[1,23,4]]
quadraticSpace(arr);

let array = [5, 2, 9, 1, 5, 6];
console.log(mergeSort(array)); 



linearSpace([1, 2, 3]); // Copy the array so O(n)


constantSpace([1, 2]); // In-place swap

console.log(binarysearch([1,3,6,7,8,4,9,0,0],6));//O(logn)