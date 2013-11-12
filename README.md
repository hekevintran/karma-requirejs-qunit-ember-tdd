Toolkit For Seeding An Ember Project Using Karma, RequireJs, Qunit, and TDD
===========================================================================

Quickstart
----------

- `git clone https://github.com/practicefusion/karma-requirejs-qunit-ember-tdd.git`
- `npm install`
- `bower install`
- `node_modules/karma/bin/karma start`
- edit code under test or src patterns listed in the karma.conf.js file and they will automatically be run through karma.  You can see the results in your terminal window you ran karma start in.
- If files aren't being loaded propertly, karma will complain about the file not having a timestamp and issue a 404 response.  Edit the patterns for loading files in your karma.conf.js file to fix this.

Types Of Tests Supported
------------------------

- Model Tests: See test/unit/PersonTest.js for an example.
- Dom Tests For Views: See test/dom/PersonDivViewTest.js for an example.
- Dom Tests For Components: See test/dom/PersonDivComponentTest.js for an example.

To Do:
------
- Add an Integration Test example.
- Fix sporadic issue where karma takes longer than normal to execute the tests.
