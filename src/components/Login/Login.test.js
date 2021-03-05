import { validateLoginInput, regex } from './Login'

describe("login", () => {
      test('function should fail on incorrect email', () => {
            expect(validateLoginInput('abc', '123456', regex)).not.toBe(true)
      })
      test('function should fail if password is less than 6 characters', () => {
            expect(validateLoginInput('abc@example.com', '1234', regex)).not.toBe(true)
      })
      test('function should fail if email has whitespaces', () => {
            expect(validateLoginInput('   ', '123456', regex)).not.toBe(true)
      })
      test('function should fail if password has whitespaces', () => {
            expect(validateLoginInput('abc@example.com', '    ', regex)).not.toBe(true)
      })
      test('function should pass on correct email and password', () => {
            expect(validateLoginInput('abc@example.com', '123456', regex)).toBe(true)
      })
})