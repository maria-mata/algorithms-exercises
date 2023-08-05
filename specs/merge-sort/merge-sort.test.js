/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  if (nums.length < 2) return nums;

  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
};

// left and right are already sorted
function merge(left, right) {
  const sorted = [];

  // breaks when one of the arrays is empty
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // pushes the first element, while also removing it from the original
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  // one of the lists will be empty, but the other will not so we concatenate everything
  return sorted.concat(left, right);
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
