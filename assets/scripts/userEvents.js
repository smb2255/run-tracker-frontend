'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api.js')
const userUi = require('./userUi.js')
// const store = require('./store.js')

const introSignIn = function (event) {
  event.preventDefault()
  $('#intro').hide()
  $('#sign-up-style').hide()
  $('#sign-in-style').show()
  $('#navigation').show()
  $('#sign-space').show()
}

const introSignUp = function (event) {
  event.preventDefault()
  $('#intro').hide()
  $('#sign-in-style').hide()
  $('#sign-up-style').show()
  $('#navigation').show()
  $('#sign-space').show()
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onSignUp reached')
  api.signUp(data)
    .then(userUi.signUpSuccess)
    .catch(userUi.signUpFailure)
  $('#sign-up-form').find('input[type=text], textarea').val('')
  $('#sign-up-form').find('input[type=password], textarea').val('')
}

// Add click events for the sign up section form; prevents refresh.
const addSignUpHandlers = function () {
  $('#sign-up-form').on('submit', onSignUp)
}

const addSignInHandlers = function () {
  $('#sign-in-form').on('submit', onSignIn)
}

// Add click events for the intro section buttions.
const addIntroHandlers = function () {
  $('#sign-in-button-intro').on('click', introSignIn)
  $('#sign-up-button-intro').on('click', introSignUp)
}
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onSignIn reached')
  api.signIn(data)
    .then(userUi.signInSuccess)
    .catch(userUi.signInFailure)
}
const onChangePass = function (event) {
  const data = getFormFields(event.target)
  console.log('onChangePass reached')
  event.preventDefault()
  api.changePass(data)
    .then(userUi.changePassSuccess)
    .catch(userUi.changePassFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  console.log('onSignOut reached')
  api.signOut()
    .then(userUi.signOutSuccess)
    .catch(userUi.signOutFailure)
}

// const addHandlers = function () {
//   $('#sign-in-button').on('click', introSignIn)
//   $('#sign-up-button').on('click', introSignUp)
//   $('#sign-up-link').on('click', introSignUp)
//   $('#sign-up-form').on('submit', onSignUp)
//   $('#sign-in-form').on('submit', onSignIn)
//   $('#change-password-form').on('submit', onChangePass)
//   $('#sign-out-form').on('submit', onSignOut)
// }

module.exports = {
  introSignIn,
  introSignUp,
  onSignUp,
  onSignIn,
  onChangePass,
  onSignOut,
  // addHandlers,
  addSignUpHandlers,
  addSignInHandlers,
  addIntroHandlers
}
