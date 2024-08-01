// Bubble sort

// Login starts with comparison of first two elements and if the left element is greater than right element , they swap their position.
// Comparison proceedes till the end of array.

// Algorithm

// (A,N)

// A- Array - [34,15,29,8]
// N- Number of elements- 4

// 1 - for loop for round 1,2.. N-1
// 2- for loop for i=0;1,2,..N-1-round
// If A[i] > A[i+1] then swap A[i] and A[i+1]
// Return Array

//time complexity O(n2)

let bubblesort = (myArray) => {
  for (let i = 1; i <= myArray.length - 1; i++) {
    for (let j = 0; j <= myArray.length - 1 - i; j++) {
      if (myArray[j] > myArray[j + 1]) {
        let temp = myArray[j];
        myArray[j] = myArray[j + 1];
        myArray[j + 1] = temp;
      }
    }
  }
  return myArray;
};


//Improve time complexity --  inner functions run upto no swapping takes place.

var myArray = [19, 132, 110, 231, 15, 29, 13];
console.log(bubblesort(myArray));

let bubblesortModification = (newArray) => {
  for (let x = 1; x <= newArray.length - 1; x++) {
    let flag = 0;
    for (let y = 0; y <= newArray.length - 1 - x; y++) {
      if (newArray[y] > newArray[y + 1]) {
        let tempValue = newArray[y];
        newArray[y] = newArray[y + 1];
        newArray[y + 1] = tempValue;
        flag = 1;
      }
      if (flag == 0) {
        return newArray;
      }
    }
  }
};

let newArray = [10, 2, 11, 12, 13];
console.log(bubblesortModification(newArray));
