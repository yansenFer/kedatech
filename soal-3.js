function countNested(input) {
  let total = 0

  for (const key in input) {
    if (typeof input[key] === 'object') {
      total += countNested(input[key])
    } else if (typeof input[key] === 'number' && input[key] % 2 === 0) {
      total += input[key]
    }
  }

  return total
}

// Inputan
const input1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
}

console.log(countNested(input1))

module.exports = { countNested }
