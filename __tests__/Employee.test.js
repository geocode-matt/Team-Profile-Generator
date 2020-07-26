const Employee = require(`../lib/Employee`);
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const employee = new Employee('bob', 9, 'bob@email.com');

test('creates employee object', () => {
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringMatching(emailRegEx));
});

test('gets an employee name', () => {
    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets an employee ID', () => {
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets an employee email', () => {
    expect(employee.getEmail()).toEqual(expect.stringMatching(emailRegEx));
});

test('gets the role of the employee', () => {
    expect(employee.getRole()).toEqual(expect.stringMatching('Employee'));
});