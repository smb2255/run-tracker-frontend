'use strict'
const store = require('./store')

const signUpSuccess = function () {
  console.log('Sign up is successful')
  $('#user-messages').html(`<p> Sign up success! </p>`)
}

const signUpFailure = function () {
  $('#user-messages').html(`<p>Sign-up failed!</p>`)
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#user-messages').html(`<p>You have signed in!</p>`)
}

const signInFailure = function () {
  $('#user-messages').html(`<p>Sign-in failed!</p>`)
}

const changePassSuccess = function () {
  $('#user-messages').html('<p> You have changed your password </p>')
}

const changePassFailure = function () {
  $('#user-messages').html('<p> You have not changed your password </p>')
}
const signOutSuccess = function () {
  store.user = null
  $('#user-messages').html(`<p>Sign-out success!</p>`)
}
const signOutFailure = function () {
  $('#user-messages').html(`<p>Sign-out failed!</p>`)
}
const newRunSuccess = function () {
  $('#user-messages').html(`<p>New run stored!</p>`)
}
const newRunFailure = function () {
  $('#user-messages').html(`<p>Run wasn't stored!</p>`)
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
  newRunFailure
}
