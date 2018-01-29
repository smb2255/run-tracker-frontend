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
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePass = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePass(data)
    .then(ui.changePassSuccess)
    .catch(ui.changePassFailure)
}
// const onNewRun = function (event) {
// event.preventDefault()

// }
const addHandlers = function () {
  $('#sign-up-form').on('submit', onSignUp)
  $('#user-messages').on('submit', onSignIn)
  $('#user-messages').on('submit', onChangePass)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePass,
  addHandlers
}
