// load all files with filename before extension ending in "Test" as tests
var tests = [];
for (var file in window.__karma__.files) {
    if (/Test\.js$/.test(file)) {
        tests.push(file);
    }
}

require.config({
    // Karma serves files from '/base'
    baseUrl: '/base',

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
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
