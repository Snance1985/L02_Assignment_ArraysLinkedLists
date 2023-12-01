function lesson2Array(arr) {
  // Step 1: Remove duplicated values
  let singularArray = [...new Set(arr)];

  // Step 2: Reverse the array
  let backwardArray = singularArray.reverse();

  // Step 3: Print the result
  console.log(backwardArray.join(', '));
}

// Test Case 1
let input1 = [20, 30, 20, 21, 93, 13, 65, 60, 19, 73, 30, 46, 46, 57, 13, 19, 13, 65];
console.log('Example Input 1:');
lesson2Array(input1);
console.log('\n');

// Test Case 2
let input2 = [1, 1, 1, 1, 1, 1, 2, 3, 2, 3, 3, 2, 1, 0];
console.log('Example Input 2:');
lesson2Array(input2);
console.log('\n');

// Test Case 3
let input3 = [1, 1, 1, 1, 1, 1, 1, 1, 1];
console.log('Example Input 3:');
lesson2Array(input3);

// Additional Test Case to test an empty Array
const additionalTest1 = [];
console.log('\nAdditional Test Case number 1:');
lesson2Array(additionalTest1);
console.log('\n');

// Additional Test Case to test an Array with all unique elements
const additionalTest2 = [4, 2, 3, 7, 8, 6, 1, 5, 9];
console.log('Additional Test Case number 2:');
lesson2Array(additionalTest2);

/**
 * Mini Essay Question:
 * Time Complexity: O(n), where n is the length of the input array.
 * Space Complexity: O(m), where m is the number of unique elements in the input array.
 *
 * The code could be improved by using an in-place algorithm to remove duplicates, which would
 * reduce the space complexity to O(1). However, this might result in a slightly more complex
 * implementation and could affect the readability of the code.
 */
