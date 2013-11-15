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

Join Us
-------
- If you are passionate about javascript, single page apps, test driven development, ember, and helping doctors save lives,
we're hiring!  Take a look at our open positions:  [http://www.practicefusion.com/careers/jobs.html](http://www.practicefusion.com/careers/jobs.html)  Don't forget to tell them that David Nelson sent you :-)

License
-------

The MIT License (MIT)

Copyright (c) 2013 Practice Fusion, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
