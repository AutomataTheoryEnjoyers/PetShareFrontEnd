import { isOdd } from "./isodd";

describe('IsOdd', () => {
  it('Should check whether a number is odd', () => {
    expect(isOdd(1)).toBe(true)
    expect(isOdd(2)).toBe(false)
  })
})
