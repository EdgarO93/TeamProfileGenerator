const Employee = require("../lib/Employee");
//creates tests to test employee object
describe('Making Employee', () => {
    test('Making new Employee', () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
 // Uses test object created to check properties are able to get created
    test('Can make name', () => {
        const name = "Edgar";
        const e = new Employee(name);
        expect(e.name).toBe(name);

    });

    test("Can make id", () => {
        const testValue = 100;
        const e = new Employee("Edgar", testValue);
        expect(e.id).toBe(testValue);
    });

    test("Can make email", () => {
        const testValue = "test@test.org";
        const e = new Employee("Edgar", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        test("Can get name via getName()", () => {
            const testValue = "Edgar";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });

    describe("getId", () => {
        test("Can get id via getId()", () => {
            const testValue = 100;
            const e = new Employee("Edgar", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });

    describe("getEmail", () => {
        test("Can get email via getEmail()", () => {
            const testValue = "test@test.org";
            const e = new Employee("Edgar", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });

    describe("getRole", () => {
        test("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Edgar", 1, "test@test.org");
            expect(e.getRole()).toBe(testValue);
        });
    });

});
