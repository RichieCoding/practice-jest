const reverseString = require('./reverseString')

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
})

test('Should reverse a string', () => {
  expect(reverseString('hello')).toEqual('olleh')
})
