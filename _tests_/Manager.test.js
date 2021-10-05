
const Manager = require("../lib/Manager");
 // Tests check properties are able to get created from new object 
test("Setting office number", () => {
  const testValue = 3200;
  const e = new Manager("Andy", 1, "test2@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Andy", 1, "test2@test.com", 3200);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOfficeNumber()", () => {
  const testValue = 3200;
  const e = new Manager("Andy", 1, "test2@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});