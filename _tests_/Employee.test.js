const Employee = require("../lib/Employee");

describe('Making Employee', () => {
    it('Making new Employee', () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it('Can make name', () => {
        const name = "Edgar";
        const e = new Employee(name);
        expect(e.name).toBe(name);

    });

    it("Can make id", () => {
        const testValue = 100;
        const e = new Employee("Edgar", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Can make email", () => {
        const testValue = "test@test.org";
        const e = new Employee("Edgar", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Edgar";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });

    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 100;
            const e = new Employee("Edgar", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });

    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@test.org";
            const e = new Employee("Edgar", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });

    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Edgar", 1, "test@test.org");
            expect(e.getRole()).toBe(testValue);
        });
    });

});
