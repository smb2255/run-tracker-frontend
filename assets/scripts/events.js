'use strict'
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')

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
  const id = event.target.id
  console.log(id)
  api.updateRun(id)
    .then(() => ui.deleteRunSuccess(id))
    .catch(ui.deleteRunFailure)
}

// const onDeleteRun = function (event) {
//   event.preventDefault()
//   const data = $(this).parents('div')
//   console.log('what is this', data)
//   api.deleteRun(data)
//     .then(function () { ui.deleteRunSuccess(data) })
//     .catch(ui.deleteRunFailure)
// }

const onUpdateRun = function (event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  store.updateId = data.run.id
  data = JSON.stringify(data)
  console.log(data)
  api.updateRun(data)
    .then(ui.updateRunSuccess)
    .catch(ui.updateRunFailure)
}

const addHandlers = function () {
  $('#new-run-form').on('submit', onNewRun)
  $('#show-all-runs-button').on('click', onShowAllMyRuns)
  // $('#remove-run-button').on('click', onDeleteRun)
  $('#user-messages').on('click', '.updateRunButton', onUpdateRun)
  $('#update-run-form').on('submit', onUpdateRun)
  $('#delete-run').on('click', onDeleteRun)
}
module.exports = {
  onNewRun,
  onShowAllMyRuns,
  onDeleteRun,
  onUpdateRun,
  addHandlers
}
