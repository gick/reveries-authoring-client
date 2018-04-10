const {generateCountingSharedBundleUrlMapper,
  generateSharedDepsMergeStrategy} = require('polymer-bundler');
  const gulp = require('gulp');
  const mergeStream = require('merge-stream');
  const PolymerProject = require('polymer-build').PolymerProject;

const project = new PolymerProject(require('./polymer.json'));

  
mergeStream(project.sources(), project.dependencies())
  .pipe(project.bundler({
    excludes: ['bower_components/polymer-code-mirror'],
    sourcemaps: true,
    stripComments: true,
    strategy: generateSharedDepsMergeStrategy(3),
    urlMapper: generateCountingSharedBundleUrlMapper('shared/bundle_')
  }))
  .pipe(gulp.dest('build/'));
