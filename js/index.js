//foreach
//The forEach() method calls a function once for each element in an array, in order.
//output: 1 2 3 4 5 a b 
const arr = [1, 2, 3, 4, "a", 'b'];
arr.forEach(item => {
    console.log(item + " ");
});
//array.forEach(item,index,arr)=>{}
//for loop
//output:1 2 3 4 5 a b
for (let x of arr) {
    console.log(x);
}
//map
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
//output:2 3 4 5 6 a1 b1 
const mapExample = arr.map(x => x + 1)
mapExample.forEach(item => {
    console.log(item + " ");
});
//filter
//The filter() method creates an array filled with all array elements that pass a test
//output:2 3 4 5 
const ans = arr.filter(x => x > 1)
console.log(ans)
    //include
    //The includes() method determines whether a string contains the characters of a specified string.//only for primitve type
console.log(arr.includes(2));
//output:true
console.log(arr.includes('e'));
//output:false
//indexOf
//finds the index of variable in array
//output:1
console.log(arr.indexOf(2)) //only for primitive types
    //findindex
    //The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
    //output:3
console.log(arr.findIndex(x => x > 3)) //for objects
    //find
    //It returns the value if it is contained in the array
    //output:4
console.log(arr.find(x => x > 3))
    //reduce
    //it provides single output value
    //output:1234abc
const func = (val1, val2) => val1 + val2
console.log(arr.reduce(func, " "))
    //slice
    //The slice() method returns the selected elements in an array, as a new array object.
    //output:3 4 a//doesnot affect the actuall array
console.log(arr.slice(2, 5)) //from 2 to 5th index
    //splice
    //The splice() method adds/removes items to/from an array, and returns the removed item
    //output:1, 2, "x", "y", 4, "a", "b", "c"
arr.splice(2, 1, "x", "y")
console.log(arr)
    //sort
    //Arranging the elements in order
    //output:1, 2, 4,"a", "b", "c", "x", "y"
console.log(arr.sort()); //arr.sort((a,b)=>a-b)-->asc
//reverse
//Reverse the array
//output:"y", "x", "c", "b", "a",4, 2, 1
console.log(arr.reverse());
//concat
//concats string
//output:"y", "x", "c", "b", "a",4, 2, 1, "xx", "yy"
arr1 = ["xx", "yy"];
console.log(arr.concat(arr1))
    //pop
    //removes data from array
    //output:"y", "x", "c", "b", "a",4, 2
arr.pop(1)
console.log(arr)
    //push
    //adds element into array
    //output:"y", "x", "c", "b", "a", 4, 2, 33
arr.push(33)
console.log(arr)
    //shift
    //The shift() method removes the first element from an array and returns that removed element.
    //output:y
console.log(arr.shift())
    //unshift
    //Adds data in array
    //output:100, 10000, "x", "c", "b", "a", 4, 2, 33
arr.unshift(100, 10000)
console.log(arr)