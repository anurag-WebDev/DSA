// Here the main idea is to keep moving forward as long as we can.
// The moment we cannot move further, we will jump from the cell
// that takes as far as possible among all the cells that we have passed  through
// here we have maxReach which gets the maximum position we can reach using one of the jumps
//that we have iterated through.
//also we have moves which tells us the no of moves we can make using the last jump we have made.
//while iterating we will update the maxReach, decrease the number of moves by one.
//the moment we run out of moves, we will jump from the cell that allows us to reach the max position

const flyMeToDestination = (A) => {
  if (A[0] === 0) {
    return -1; // first element is zero so we return -1;
  }
  let n = A.length;
  if (n === 1 || n === 2) { // we only 1 or 2 elements return the array
    return A;
  }
  let maxReach = A[0]; // maxReach set to first element
  let moves = A[0]; // moves set to first element
  let res = []; // array to store the elements from where we can reach the end
  res.push(A[0]); // initially pushed first element
  for (let i = 1; i < n - 1; i++) {
    // for loop iterating through the elements till last index
    if (maxReach >= n - 1) {
      // if maxReach is greater than or equal to length of array
      res.push(A[n - 1]); // we have reached the end so we push last element to res and return res
      return res;
    }
    if (A[i] + i > maxReach) {
      // when we find a new element greater than maxReach we push to res array.
      res.push(A[i]);
    }
    maxReach = Math.max(maxReach, A[i] + i); // we update maxReach if the new element is greater than maxReach
    moves--; // decrease the moves
    if (moves == 0) {
      // if moves is zero i.e we utilized the max possible from the element
      moves = maxReach - i; // so we update the moves to new maxreach - index
    }
  }
  return -1; // if we cant reach the end we return -1;
};

const arr = [1, 7, 3, 0, 0, 0, 0, 0, 6];
// const arr = [1, 7];
const res = flyMeToDestination(arr);

console.log(res);

// intially we set the maxReach,moves to first element of the array.

// we declare a res array to store the elements from where we can jump to the end of the array.

// we initialize the res array with first element of the array.

// we iterate through the loop from 1st index till last index.

// we check if maxReach is greater than or equal to length of the array minus one i.e last index, if it is we have reached the last index, we push the last index value to array and we return the res array.

// we check while iterating if the element value + value of index is greater than maxReach, if it is we push the element value in the array and update the maxReach variable.

// we decrease the moves for every iteration, if moves is equal to zero i.e the max has been reach from that element so we update the moves to new maxReach - index and increase the jump by 1 as one jump has been taken.

// finally if we cant reach the end from the max possible element value we return -1;
