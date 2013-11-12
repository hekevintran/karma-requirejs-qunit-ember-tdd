define(['Ember', 'text!src/templates/PersonDivTemplate.handlebars'], function(Ember, PersonDivTemplate) {
    var PersonDivView = Ember.View.create({
        // TODO: figure out how to have this be compiled at build time
        defaultTemplate: Ember.Handlebars.compile(PersonDivTemplate)
    });

    return PersonDivView;
});
