let grocery=['A','B,','C'];
console.log(grocery);
// Accessing elements 
const fullList = ['Bnana', 'Mango', 'Oranges'];
var listItem = fullList[0];
console.log(listItem);
console.log(fullList[2]);
console.log(fullList[3])
//Update Elements
const fullList = ['Bnana', 'Mango', 'Oranges'];
fullList[1]= 'avocados';
// let and cost
let fullList = ['Bnana', 'Mango', 'Oranges'];
fullList=['Cherry'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3]='Spoon'
console.log(fullList);
console.log(utensils);

//.length
const fruits = ['A', 'B', 'C'];
console.log(fruits.length);
//.push 
const toDos = ['Go out', 'meet friends', 'serive bike'];
toDos.push('dinner','chill');
console.log(toDos);

//const toDos = ['Go out', 'meet friends', 'serive bike'];
toDos.pop();
console.log(toDos);

//array in function
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept)
function removeElement(newArr){
 newArr.pop(newArr)
}
removeElement(concept)
console.log(concept)
//Nested 
var numberClusters= [[1,2],[3,4],[5,6]];
const target= numberClusters[2][1];