'use strict'
const store = require('./store')

const signUpSuccess = function (data) {
  store.user = data.user
  console.log('Sign up is successful')
  $('#user-messages').html(`<p> Sign up success! </p>`)
  $('#change-password').hide()
}

const signUpFailure = function () {
  $('#user-messages').html(`<p>Sign-up failed!</p>`)
}

const signInSuccess = function (response) {
  console.log('sign in reached')
  store.user = response.user
  $('#greeting-space').show()
  $('#sign-space').hide()
  $('.sign-in-title').hide()
  $('#sign-in').hide()
  $('#create-run').show()
  $('#show-all-runs').show()
  $('#show-all-runs-title').show()
  $('#update-run').show()
  const userGreet = store.user.email.split('@')
  if (userGreet[0].length < 16) {
    $('.user-greeting').html(userGreet[0]).css('text-transform', 'uppercase')
  } else {
    $('.user-greeting').html('Friend').css('text-transform', 'uppercase')
  }

  // $('#user-messages').html(`<p>You have signed in!</p>`)
  // $('#sign-up-style').hide()
  // $('#sign-in').hide()
  // $('#change-password').show()
  // $('#new-run').show()
  // $('#sign-out').show()
  // $('#show-all-runs').show()
  // $('#delete-run').show()
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePassSuccess,
  changePassFailure,
  signOutSuccess,
  signOutFailure
}
