const { maxSubArray } = require('./soal-2')

describe('soal 2', () => {
  it('Test 1', () => {
    const input = [100, 200, 300, 400]
    const n = 2

    const expected = 700
    const output = maxSubArray(input, n)

    console.log('\n=== Test 1 ===')
    console.log('Input    :', JSON.stringify(input))
    console.log('Output   :', output)
    console.log('Expected :', expected)

    expect(output).toBe(expected)
    console.log('Status   : ✅ Test 1 sukses')
  })

  it('Test 2', () => {
    const input = [1, 4, 2, 10, 23, 3, 1, 0, 20]
    const n = 4

    const expected = 39
    const output = maxSubArray(input, n)

    console.log('\n=== Test 2 ===')
    console.log('Input    :', JSON.stringify(input))
    console.log('Output   :', output)
    console.log('Expected :', expected)

    expect(output).toBe(expected)
    console.log('Status   : ✅ Test 2 sukses')
  })

  it('Test 3', () => {
    const input = [-3, 4, 0, -2, 6, -1]
    const n = 2

    const expected = 5
    const output = maxSubArray(input, n)

    console.log('\n=== Test 2 ===')
    console.log('Input    :', JSON.stringify(input))
    console.log('Output   :', output)
    console.log('Expected :', expected)

    expect(output).toBe(expected)
    console.log('Status   : ✅ Test 2 sukses')
  })
})
