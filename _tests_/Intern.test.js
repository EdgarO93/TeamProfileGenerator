const Intern = require("../lib/Intern");

test("Setting School", () => {
  const testValue = "AU";
  const e = new Intern("Interny", 1, "test2@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Interny", 1, "test2@test.com", "AU");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "AU";
  const e = new Intern("Interny", 1, "test2@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});