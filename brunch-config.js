exports.config = {
  // See http://brunch.io/#documentation for docs.
  modules: {
    definiton: false,
    wrapper: false
  },
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app/,
        'vendor.js': /^(bower_components|vendor)/
      }
    },
    stylesheets: {
      joinTo: {
        'app.css': /^app/,
        'vendor.css': /^(bower_components|vendor)/
      }
    },
    templates: {
      joinTo: 'app.js'
    }
  },
  plugins: {
    jshint: {
      pattern: /^app\/.*\.js$/
    }
  }
};
