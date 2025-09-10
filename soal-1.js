//sort terbesar ke terkecil
const input = [1, 2, 4, 3, 5, 3, 2, 1]

function sortDesc(number) {
  for (let i = 0; i < number.length; i++) {
    for (let y = 0; y < number.length; y++) {
      if (number[y] < number[y + 1]) {
        const temp = number[y]
        number[y] = number[y + 1]
        number[y + 1] = temp
      }
    }
  }

  return number
}

console.log(sortDesc(input))

module.exports = { sortDesc }
