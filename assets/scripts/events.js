'use strict'
const config = require('./config.js')
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
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







const addHandlers = function () {
  $('#user-messages').on('submit', onSignUp)
  $('#user-messages').on('submit', onSignIn)
  $('#user-messages').on('submit', onChangePass)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePass,
  addHandlers
}
