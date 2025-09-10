const { sortDesc } = require('./soal-1')

describe('sortDesc - Detailed Output', () => {
  it('Test 1: Sort array terbesar ke terkecil', () => {
    const input = [1, 2, 4, 3, 5, 3, 2, 1]
    const expected = [5, 4, 3, 3, 2, 2, 1, 1]
    const output = sortDesc([...input]) // pakai spread biar input asli nggak berubah

    console.log('\n=== Test 1 ===')
    console.log('Input    :', JSON.stringify(input))
    console.log('Output   :', JSON.stringify(output))
    console.log('Expected :', JSON.stringify(expected))

    expect(output).toEqual(expected)
    console.log('Status   : ✅ Test 1 sukses')
  })

  it('Test 2: Array dengan angka sama semua', () => {
    const input = [3, 3, 3, 3]
    const expected = [3, 3, 3, 3]
    const output = sortDesc([...input])

    console.log('\n=== Test 2 ===')
    console.log('Input    :', JSON.stringify(input))
    console.log('Output   :', JSON.stringify(output))
    console.log('Expected :', JSON.stringify(expected))

    expect(output).toEqual(expected)
    console.log('Status   : ✅ Test 2 sukses')
  })

  it('Test 3: Array kosong', () => {
    const input = []
    const expected = []
    const output = sortDesc([...input])

    console.log('\n=== Test 3 ===')
    console.log('Input    :', JSON.stringify(input))
    console.log('Output   :', JSON.stringify(output))
    console.log('Expected :', JSON.stringify(expected))

    expect(output).toEqual(expected)
    console.log('Status   : ✅ Test 3 sukses')
  })
})
