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
const onNewRun = function (event) {
  event.preventDefault()
  console.log('onNewRun reached')
  let data = getFormFields(event.target)
  data = JSON.stringify(data)
  api.createNewRun(data)
    .then(ui.newRunSuccess)
    .catch(ui.newRunFailure)
}

const onShowAllMyRuns = function (event) {
  event.preventDefault()
  console.log('onShowAllMyRuns reached')
  api.showAllMyRuns()
    .then(ui.showAllMyRunsSuccess)
    .catch(ui.showAllMyRunsFailure)
}

const onDeleteRun = function (event) {
  event.preventDefault()
  const data = $(this).parents('div')
  console.log('what is this', data)
  api.deleteRun(data)
    .then(function () { ui.deleteRunSuccess(data) })
    .catch(ui.deleteRunFailure)
}

// const updateRun = function (event) {
// event.preventDefault()
// console.log('onUpdateRun reached')
// }

// }
const addHandlers = function () {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePass)
  $('#sign-out-form').on('submit', onSignOut)
  $('#new-run-form').on('submit', onNewRun)
  $('#show-all-runs-form').on('submit', onShowAllMyRuns)
  $('#user-messages').on('click', '.removeRunButton', onDeleteRun)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePass,
  onSignOut,
  onNewRun,
  onShowAllMyRuns,
  onDeleteRun,
  addHandlers
}
