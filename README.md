Toolkit For Seeding An Ember Project Using Karma, RequireJs, Qunit, and TDD
===========================================================================

Quickstart
----------

- `git clone https://github.com/practicefusion/karma-requirejs-qunit-ember-tdd.git`
- `npm install`
- `bower install`
- `node_modules/karma/bin/karma start`
- Edit code under test or src patterns listed in the karma.conf.js file and they will automatically be run through karma.  You can see the results in your terminal window you ran karma start in.
- If files aren't being loaded propertly, karma will complain about the file not having a timestamp and issue a 404 response.  Edit the patterns for loading files in your karma.conf.js file to fix this.
- NOTE: If you are debugging the tests, for instance using chrome developer tools, make sure to do this in a different browser process than the one that is connected to karma.  Otherwise, after hitting a breakpoint your tests will run about 10 times slower.  Doing your debugging in a different browser process avoids this problem.

Types Of Tests Supported
------------------------

- Model Tests: See test/unit/PersonTest.js for an example.
- Dom Tests For Views: See test/dom/PersonDivViewTest.js for an example.
- Dom Tests For Components: See test/dom/PersonDivComponentTest.js for an example.

To Do:
------
- Add an Integration Test example.
- Add an Ember Data Test example.
