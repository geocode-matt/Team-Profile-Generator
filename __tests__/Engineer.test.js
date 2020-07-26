const Engineer = require(`../lib/Engineer`);
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const engineer = new Engineer('matt', 11, 'matt@email.com', 'geocode-matt');

test('creates engineer object', () => {
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringMatching(emailRegEx));
});

test('gets the engineer name', () => {
    expect(engineer.getName()).toEqual(expect.any(String));
});

test('gets the engineer ID', () => {
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('gets the engineer email', () => {
    expect(engineer.getEmail()).toEqual(expect.stringMatching(emailRegEx));
});

test('gets the engineer github id', () => {
    expect(engineer.getGithub()).toEqual(expect.stringMatching('geocode-matt'));
});

test('gets the role of the employee', () => {
    expect(engineer.getRole()).toEqual(expect.stringMatching('Engineer'));
});