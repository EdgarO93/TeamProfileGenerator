const Engineer = require("../lib/Engineer");

test("Getting GH account", () => {
  const testValue = "GHuser";
  const e = new Engineer("Testy", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Testy", 1, "test@test.com", "GHuser");
  expect(e.getRole()).toBe(testValue);
});

test("Getting GitHub username via getGithub()", () => {
  const testValue = "GHuser";
  const e = new Engineer("Testy", 1, "test@test.com", testValue);
  expect(e.getGitHub()).toBe(testValue);
});