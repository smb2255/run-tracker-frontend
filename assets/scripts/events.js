'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onSignUp reached')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onSignIn reached')
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePass = function (event) {
  const data = getFormFields(event.target)
  console.log('onChangePass reached')
  event.preventDefault()
  api.changePass(data)
    .then(ui.changePassSuccess)
    .catch(ui.changePassFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  console.log('onSignOut reached')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
// const onNewRun = function (event) {
// event.preventDefault()

// }
const addHandlers = function () {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePass)
  $('#sign-out-form').on('submit', onSignOut)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePass,
  onSignOut,
  addHandlers
}
