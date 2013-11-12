'use strict';

define(function(require) {
    var Ember = require('Ember'),
        PersonDivView = require('src/views/PersonDivView'),
        Person = require('src/models/Person'),
        DomTestLoader = require('test/TestHelpers/DomTestLoader');

    DomTestLoader.setupTestModule('PersonDivView');

    var person = Person.create({firstName: 'first', lastName: 'last'}),
        controller = Ember.ObjectController.create({
            content: person
        });

    Ember.set(PersonDivView, 'controller', controller);

    test('full name should be rendered inside a paragraph', function() {
        Ember.run(function() {
            PersonDivView.appendTo('#viewTests');
        });

        equal($('#viewTests').find('p').text(), "first last", "First Name not rendered inside a paragraph.");
    });
});
