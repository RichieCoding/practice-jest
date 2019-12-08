const reverseString = require('./reverseString')

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
})

test('Should reverse a string', () => {
  expect(reverseString('hello')).toEqual('olleh')
})

test('Should reverse string with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh')
})
