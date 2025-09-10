const { countNested } = require('./soal-3')

describe('soal 3', () => {
  it('Test 1', () => {
    const input = {
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

    const expected = 6
    const output = countNested(input)

    console.log('\n=== Test 1 ===')
    console.log('Input    :', JSON.stringify(input))
    console.log('Output   :', output)
    console.log('Expected :', expected)

    expect(output).toBe(expected)
    console.log('Status   : ✅ Test 1 sukses')
  })

  it('Test 2', () => {
    const input = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: 'car' },
    }

    const expected = 12
    const output = countNested(input)

    console.log('\n=== Test 2 ===')
    console.log('Input    :', JSON.stringify(input))
    console.log('Output   :', output)
    console.log('Expected :', expected)

    expect(output).toBe(expected)
    console.log('Status   : ✅ Test 2 sukses')
  })
})
