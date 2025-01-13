function consTantTime(arr)
{
    return arr[0];
}
const linearsearch = (array,target) =>{
   
     flag=false;
    for( let i=0; i<array.length;i++)
    { 
        if(array[i]===target)
          flag=true;
        
    }
    return "found";
};

function quadraticTime(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i] + arr[j]);
        }
    }

}
function binarysearch(arr,target)
{
   l=0;h=arr.length-1;
   while(l<=h)
   {
    mid =Math.floor(l-((l-h)/2));
    if(arr[mid]===target)
    {
        return "FOUND";
    }
    else if(arr[mid]<target)
    {
      h=mid-1;
    }
    else
    {
      l=mid+1;
    }
   }
  
}

sortarray=(array)=>{
    array.sort();
    console.log(array);
}
array=[1,3,6,2,0,6];
console.log(array);
console.log(".....................");
console.log(consTantTime(array))// 0(1)
console.log(".....................");
console.log(linearsearch(array,6))// worst case o(n)
console.log(".....................");
quadraticTime(array);//O(n**2)
console.log(".....................");
console.log(binarysearch(array,6));//O(logn)
console.log(".....................");
sortarray(array)//)(nlogn)