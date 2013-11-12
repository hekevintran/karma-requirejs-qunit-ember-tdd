'use strict';

define(function(require) {
    var Ember = require('Ember');
    return {
        setupTestModule: function(moduleName) {
            module(moduleName, {
                setup: function() {
                    Ember.run(function() {
                        $('body').append('<div id="viewTests"></div>');
                    });
                },
                teardown: function() {
                    Ember.run(function() {
                        $('#viewTests').remove();
                    });
                }
            });
        }
    }
});
