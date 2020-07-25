const Employee = require(`../lib/Employee`);
// const { tsExternalModuleReference, exportAllDeclaration } = require("@babel/types");

test('creates employee object', () => {
    const employee = new Employee('bob', 9, 'email@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});