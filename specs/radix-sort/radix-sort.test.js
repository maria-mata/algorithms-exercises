/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function radixSort(array) {
  // find longest number
  const length = getLongestNumber(array);
  // create buckets - an array of 10 arrays (bucket for 0 - 9)
  const buckets = Array.from({ length: 10 }, () => []);
  // iterate for length of longest number
  for (let i = length; i>= 0; i--) {
    while (array.length) {
      const number = array.shift();
      const digit = getDigit(number, i, length);
      buckets[digit].push(number); 
    }

    for (let j = 0; j < buckets.length; j++) {
      const bucket = buckets[j];

      while (bucket.length) {
        array.push(bucket.shift());
      }
    }
  }

  return array;
}

// number, place for the digit, and length of the longest number
function getDigit(number, place, length) {
  const digits = number.toString();
  const diff = length - digits.length;
  return digits[place - diff] || 0;
}

// returns the length of the longest number
function getLongestNumber(array) {
  let length = 0;

  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i].toString().length;
    length = currentLength > length ? currentLength : length;
  }

  return length;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
