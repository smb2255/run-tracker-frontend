'use strict'
const store = require('./store')
const showAllMyRunsTemplate = require('./templates/show-all-runs.handlebars')
const listHtml = require('./events')

const signUpSuccess = function () {
  console.log('Sign up is successful')
  $('#user-messages').html(`<p> Sign up success! </p>`)
  $('#change-password').hide()
}

const signUpFailure = function () {
  $('#user-messages').html(`<p>Sign-up failed!</p>`)
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#user-messages').html(`<p>You have signed in!</p>`)
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#change-password').show()
  $('#new-run').show()
  $('#sign-out').show()
  $('#show-all-runs').show()
  $('#delete-run').show()
}

const signInFailure = function () {
  $('#user-messages').html(`<p>Sign-in failed!</p>`)
}

const changePassSuccess = function () {
  $('#user-messages').html('<p> You have changed your password </p>')
  $('#change-password').hide()
}

const changePassFailure = function () {
  $('#user-messages').html('<p> You have not changed your password </p>')
}
const signOutSuccess = function () {
  store.user = null
  $('#user-messages').html(`<p>Sign-out success!</p>`)
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#new-run').hide()
  $('#sign-in').show()
  $('#sign-up').show()
}
const signOutFailure = function () {
  $('#user-messages').html(`<p>Sign-out failed!</p>`)
}
const newRunSuccess = function (data) {
  const runHtml = (`<H2>Run has been logged!</H2>
    <ul>
    <li>TIME: ${data.run.time}</li>
    <LI>DISTANCE: ${data.run.distance}</LI>
    <LI>DATE: ${data.run.date}</LI>
    </ul>
    `)
  $('#user-messages').html(runHtml)
  $('#show-all-runs').show()
}
const newRunFailure = function () {
  $('#user-messages').html(`<p>Run wasn't stored!</p>`)
}
const showAllMyRunsSuccess = function (data) {
  $('#user-messages').html('')
  store.runs = data.runs
  console.log(data)
  const showAllRunsHtml = showAllMyRunsTemplate({runs: data.runs})
  $('#user-messages').append(showAllRunsHtml)
  $('#update-run').show()
  $('#show-all-runs').hide()
}
const showAllMyRunsFailure = function () {
  $('#user-messages').html(`<p> You have no saved runs. </p>`)
}

const deleteRunSuccess = function (data) {
  console.log(data)
  $(data).html('')
  // $('#user-messages').html(`<p> Run was deleted </p>`)
}
const deleteRunFailure = function (data) {
  $('#user-messages').html(`<p> Error: run not deleted </p>`)
}

const updateRunSuccess = function (data) {
  $('#user-messages').html(`<p> Run has been updated </p>`)
}

const updateRunFailure = function (data) {
  $('#update-run-message').html(`<p> Error: run has not been updated</p>`)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePassSuccess,
  changePassFailure,
  signOutSuccess,
  signOutFailure,
  newRunSuccess,
  newRunFailure,
  showAllMyRunsSuccess,
  showAllMyRunsFailure,
  deleteRunSuccess,
  deleteRunFailure,
  updateRunSuccess,
  updateRunFailure
}
