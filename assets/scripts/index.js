'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./events')
const userEvents = require('./userEvents')

$(() => {
  setAPIOrigin(location, config)
})
$(() => {
  events.addHandlers()
  userEvents.addSignInHandlers()
  userEvents.addSignUpHandlers()
  userEvents.addIntroHandlers()
  $('#change-pass').hide()
  $('#sign-in-style').hide()
  $('#sign-up-style').hide()
  $('#create-run').hide()
  $('#update-run').hide()
  $('#navigation').hide()
  $('#greeting-space').hide()
  $('#sign-space').hide()
  $('#show-all-runs').hide()
  $('#show-all-runs-title').hide()
  $('#delete-run').hide()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
