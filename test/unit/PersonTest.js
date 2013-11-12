define(['src/models/Person'], function(Person) {
    var person,
        fullName;

    module('Person');

    QUnit.testStart(function() {
        person = Person.create({firstName: 'first', lastName: 'last'});
    });

    test('fullName is both first and last', function() {
        fullName = person.get('fullName');
        equal(fullName, 'first last', 'fullName was instead ' + fullName);
    });

    test('fullName changes when firstName is updated', function() {
        person.set('firstName', 'secondFirst');
        fullName = person.get('fullName');
        equal(fullName, 'secondFirst last', 'fullName was instead ' + fullName);
    });
});

