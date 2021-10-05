const Intern = require("../lib/Intern");
 // Tests check properties are able to get created from new object 
test("Setting School", () => {
  const testValue = "AU";
  const e = new Intern("Interny", 1, "test2@test.edu", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Interny", 1, "test2@test.edu", "AU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "AU";
  const e = new Intern("Interny", 1, "test2@test.edu", testValue);
  expect(e.getSchool()).toBe(testValue);
});