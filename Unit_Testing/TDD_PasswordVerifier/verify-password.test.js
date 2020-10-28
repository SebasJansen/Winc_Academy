const { TestScheduler } = require('jest');
const functions = require("./verify-password.js");

const testParameters = {
    test1: 'henkie1',
    test2: '1234a',
    test3: 'z',
    test4: 'henkie1234',
    test5: 'HENKhenk',
    test6: 'HENK33$',
    test7: '1234',
    test8: ''
}

test("check if password has less than 9 characters", () => {
    expect(functions.verifyPasswordLength(testParameters.test1)).toBe(true);
    expect(functions.verifyPasswordLength(testParameters.test2)).toBe(true);
    expect(functions.verifyPasswordLength(testParameters.test3)).toBe(true);
    expect(functions.verifyPasswordLength(testParameters.test4)).toBe(false);
    expect(functions.verifyPasswordLength(testParameters.test5)).toBe(true);
    expect(functions.verifyPasswordLength(testParameters.test6)).toBe(true);
    expect(functions.verifyPasswordLength(testParameters.test7)).toBe(true);
    expect(functions.verifyPasswordLength(testParameters.test8)).toBe(true);
});
test("check if password is not null", () => {
    expect(functions.verifyPasswordIsNotNull(testParameters.test1)).toBe(true);
    expect(functions.verifyPasswordIsNotNull(testParameters.test2)).toBe(true);
    expect(functions.verifyPasswordIsNotNull(testParameters.test3)).toBe(true);
    expect(functions.verifyPasswordIsNotNull(testParameters.test4)).toBe(true);
    expect(functions.verifyPasswordIsNotNull(testParameters.test5)).toBe(true);
    expect(functions.verifyPasswordIsNotNull(testParameters.test6)).toBe(true);
    expect(functions.verifyPasswordIsNotNull(testParameters.test7)).toBe(true);
    expect(functions.verifyPasswordIsNotNull(testParameters.test8)).toBe(true);
});
test("check if password contains uppercase characters", () => {
    expect(functions.verifyPasswordContainsUppercaseCharacters(testParameters.test1)).toBe(false);
    expect(functions.verifyPasswordContainsUppercaseCharacters(testParameters.test2)).toBe(false);
    expect(functions.verifyPasswordContainsUppercaseCharacters(testParameters.test3)).toBe(false);
    expect(functions.verifyPasswordContainsUppercaseCharacters(testParameters.test4)).toBe(false);
    expect(functions.verifyPasswordContainsUppercaseCharacters(testParameters.test5)).toBe(true);
    expect(functions.verifyPasswordContainsUppercaseCharacters(testParameters.test6)).toBe(true);
    expect(functions.verifyPasswordContainsUppercaseCharacters(testParameters.test7)).toBe(false);
    expect(functions.verifyPasswordContainsUppercaseCharacters(testParameters.test8)).toBe(false);
});
test("check if password contains lowercase characters", () => {
    expect(functions.verifyPasswordContainsLowercaseCharacters(testParameters.test1)).toBe(true);
    expect(functions.verifyPasswordContainsLowercaseCharacters(testParameters.test2)).toBe(true);
    expect(functions.verifyPasswordContainsLowercaseCharacters(testParameters.test3)).toBe(true);
    expect(functions.verifyPasswordContainsLowercaseCharacters(testParameters.test4)).toBe(true);
    expect(functions.verifyPasswordContainsLowercaseCharacters(testParameters.test5)).toBe(true);
    expect(functions.verifyPasswordContainsLowercaseCharacters(testParameters.test6)).toBe(false);
    expect(functions.verifyPasswordContainsLowercaseCharacters(testParameters.test7)).toBe(false);
    expect(functions.verifyPasswordContainsLowercaseCharacters(testParameters.test8)).toBe(false);
});
test("check if password contains numbers", () => {
    expect(functions.verifyPasswordContainsNumbers(testParameters.test1)).toBe(true);
    expect(functions.verifyPasswordContainsNumbers(testParameters.test2)).toBe(true);
    expect(functions.verifyPasswordContainsNumbers(testParameters.test3)).toBe(false);
    expect(functions.verifyPasswordContainsNumbers(testParameters.test4)).toBe(true);
    expect(functions.verifyPasswordContainsNumbers(testParameters.test5)).toBe(false);
    expect(functions.verifyPasswordContainsNumbers(testParameters.test6)).toBe(true);
    expect(functions.verifyPasswordContainsNumbers(testParameters.test7)).toBe(true);
    expect(functions.verifyPasswordContainsNumbers(testParameters.test8)).toBe(false);
});
test("check if password is valid", () => {
    expect(functions.verifyPassword(testParameters.test1)).toBe(true);  // henkie1
    expect(functions.verifyPassword(testParameters.test2)).toBe(true);  // 1234a
    expect(functions.verifyPassword(testParameters.test3)).toBe(true);  // z
    expect(functions.verifyPassword(testParameters.test4)).toBe(true);  // henkie1234
    expect(functions.verifyPassword(testParameters.test5)).toBe(true);  // HENKhenk
    expect(functions.verifyPassword(testParameters.test6)).toBe(false); // HENK33$
    expect(functions.verifyPassword(testParameters.test7)).toBe(false);  // 1234
    expect(functions.verifyPassword(testParameters.test8)).toBe(false);  // ''
});