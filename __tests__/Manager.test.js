const Manager = require(`../lib/Manager`);
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const manager = new Manager('joe', 10, 'joe@email.com', 5555);

test('creates manager object', () => {
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringMatching(emailRegEx));
});

test('gets the manager name', () => {
    expect(manager.getName()).toEqual(expect.any(String));
});

test('gets the manager ID', () => {
    expect(manager.getId()).toEqual(expect.any(Number));
});

test('gets the manager email', () => {
    expect(manager.getEmail()).toEqual(expect.stringMatching(emailRegEx));
});

test('gets the role of the employee', () => {
    expect(manager.getRole()).toEqual(expect.stringMatching('Manager'));
});