const PolymerProject = require('polymer-build').PolymerProject;

const project = new PolymerProject(require('./polymer.json'));

const gulp = require('gulp');
const mergeStream = require('merge-stream');

// Create a build pipeline to pipe both streams together to the 'build/' dir
mergeStream(project.sources(), project.dependencies())
  .pipe(gulp.dest('build/'));
