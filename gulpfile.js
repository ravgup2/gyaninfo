/*
  gulpfile.js
  ===========
 Any file in gulp/task directory get
 automatically required below.

  To add a new task, simply add a new task file to that directory.
*/

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subdirectories
requireDir('./gulp/tasks', { recurse: true });