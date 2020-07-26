const Intern = require(`../lib/Intern`);
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const intern = new Intern('jimmy', 12, 'jimmy@email.com', 'University of Texas at Austin');

test('creates intern object', () => {
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringMatching(emailRegEx));
});

test('gets the intern name', () => {
    expect(intern.getName()).toEqual(expect.any(String));
});

test('gets the intern ID', () => {
    expect(intern.getId()).toEqual(expect.any(Number));
});

test('gets the intern email', () => {
    expect(intern.getEmail()).toEqual(expect.stringMatching(emailRegEx));
});

test('gets the intern school', () => {
    expect(intern.getSchool()).toEqual(expect.stringMatching('University of Texas at Austin'));
});

test('gets the role of the intern', () => {
    expect(intern.getRole()).toEqual(expect.stringMatching('Intern'));
});