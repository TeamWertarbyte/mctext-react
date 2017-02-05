/* eslint-env jest */
import { isString } from './util'

describe('isString', () => {
  it('returns true if the argument is a string', () => {
    expect(isString('42')).toBe(true)
    expect(isString(String('hello'))).toBe(true)
  })

  it('returns false if the argument is not a string', () => {
    expect(isString(42)).toBe(false)
    expect(isString({ foo: 'bar' })).toBe(false)
    expect(isString(['foo'])).toBe(false)
  })
})
