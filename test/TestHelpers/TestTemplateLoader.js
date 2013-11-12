define(function(require) {
    var Ember = require('Ember');

    return {
        loadTemplates: function(templates) {
            var i = 0,
                template = '';

            for(i; i < templates.length; i++) {
                template = templates[i];

                Ember.TEMPLATES[template.id] = Ember.Handlebars.compile(template.template);
            }
        }
    };
});
