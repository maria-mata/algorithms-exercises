/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

// O(n^2) - time complexity
// O(1) - space complexity
function bubbleSort(nums, stop = null) {
  const stopIndex = stop || nums.length - 1;
  let swapCount = 0;

  for (let i = 0; i < stopIndex; i++) {
    const current = nums[i];
    const next = nums[i + 1];
    if (current > next) {
      nums[i] = next;
      nums[i + 1] = current;
      swapCount += 1;
    }
  }

  if (swapCount > 0) {
    return bubbleSort(nums, stopIndex - 1);
  } else {
    return nums;
  }
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
