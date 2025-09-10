const arrayNumber = [-3, 4, 0, -2, 6, -1]
const n = 2

function maxSubArray(arr, n) {
  let total = 0

  for (let i = 0; i < arr.length; i++) {
    let temp = 0
    for (let y = 0; y < n; y++) {
      if (i < arr.length - 1) {
        temp += arr[i + y]
      }
    }
    if (total < temp) {
      total = temp
    }
  }

  return total
}

console.log(maxSubArray(arrayNumber, n))

module.exports = { maxSubArray }
