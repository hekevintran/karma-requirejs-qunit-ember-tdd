'use strict';

define(function(require) {
    var Ember = require('Ember'),
        DomTestHelper = require('test/TestHelpers/DomTestLoader'),
        $ = require('jquery'),
        PersonDivComponentTemplate = require('text!src/templates/components/person-div-component.handlebars'),
        Person = require('src/models/Person'),
        TestTemplateLoader = require('test/TestHelpers/TestTemplateLoader');

    var viewTestsContainer = $('#viewTests');

    DomTestHelper.setupTestModule('PersonDivComponent');

    test('it should render a model passed in', function() {
        // TODO: move code into pf github repo
        var person = Person.create({
            firstName: 'first',
            lastName: 'last'
        });

        TestTemplateLoader.loadTemplates([
            {
                id: 'application',
                template: '{{outlet}}'
            },
            {
                id: 'components/test-component',
                template: PersonDivComponentTemplate
            },
            {
                id: 'index',
                template: '{{test-component person=model}}'
            }
        ]);

        Ember.run(function() {
            var App = Ember.Application.create({
                rootElement: '#viewTests'
            });

            App.IndexRoute = Ember.Route.extend({
                model: function() {
                    return person;
                }
            });
        });

        equal($('#viewTests').find('p').text(), "first last", "First Name not rendered inside a paragraph.");
    });
});
