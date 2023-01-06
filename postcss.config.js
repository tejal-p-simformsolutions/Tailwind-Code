// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './app/javascript/src/**/*.jsx',
    './app/javascript/src/**/*.js',
    './app/views/**/*.html.haml',
    './app/views/**/*.html.erb',
    './node_modules/reactstrap/dist/reactstrap.full.js',
    './node_modules/fullcalendar/dist/fullcalendar.js',
    './app/views/**/*.html.erb',
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
  // Whitelist bpk backpack css, starting classes with bkp-
  whitelistPatterns: [
    /^bpk-/,
    /^DayPicker-/,
    /^col-/,
    /^btn/,
    /^fc-/,
    /tasty/,
    /^bg-\w+-200$/,
    /^text-\w+-800$/,
    /^trix-/
  ]
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
}
