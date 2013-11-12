require.config({
    // the application serves files from '/'
    baseUrl: '/',

    paths: {
        'jquery': 'src/bower_components/jquery/jquery',
        'handlebars': 'src/bower_components/handlebars/handlebars',
        'Ember': 'src/bower_components/ember/ember',
        'text': 'src/bower_components/requirejs-text/text'
    },

    shim: {
        'Ember':{
            deps:[ 'jquery', 'handlebars'],
            exports:'Ember'
        }
    }
});

define(function(require) {
    var Ember = require('Ember'),
        Person = require('src/models/Person'),
        PersonDivComponentTemplate = require('text!src/templates/components/person-div-component.handlebars'),
        App = Ember.Application.create(),
        person = Person.create({
            firstName: 'first',
            lastName: 'last'
        });

    Ember.TEMPLATES['application'] = Ember.Handlebars.compile('{{outlet}}');
    Ember.TEMPLATES['index'] = Ember.Handlebars.compile('{{person-div-component person=model}}');
    Ember.TEMPLATES['components/person-div-component'] = Ember.Handlebars.compile(PersonDivComponentTemplate);

    App.IndexRoute = Ember.Route.extend({
        model: function() {
            return person;
        }
    });
});
