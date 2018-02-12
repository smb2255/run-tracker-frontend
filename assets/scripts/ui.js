'use strict'
const store = require('./store')
const api = require('./api')
const showAllMyRunsTemplate = require('./templates/show-all-runs.handlebars')
// const listHtml = require('./events')

const newRunSuccess = function (data) {
  const runHtml = (`<H2>Run has been logged!</H2>
    <ul>
    <li>TIME: ${data.run.time}</li>
    <LI>DISTANCE: ${data.run.distance}</LI>
    <LI>DATE: ${data.run.date}</LI>
    </ul>
    `)
  $('#user-messages').html(runHtml)
  $('#show-all-runs-title').show()
  $('#delete-runs-message').html('')
  $('#update-run-message').html('')
  api.showAllMyRuns()
    .then(showAllMyRunsSuccess)
    .catch(showAllMyRunsFailure)
}
const newRunFailure = function () {
  $('#user-messages').html(`<p>Run wasn't stored!</p>`)
  $('#delete-runs-message').html('')
  $('#update-run-message').html('')
}
const showAllMyRunsSuccess = function (data) {
  // $('#show-all-runs-title').html('')
  store.runs = data.runs
  console.log(data)
  const showAllRunsHtml = showAllMyRunsTemplate({runs: data.runs})
  $('#show-all-runs').html(showAllRunsHtml)
  $('#update-run').show()
  $('#delete-run').show()
  // $('#show-all-runs').hide()
  $('#show-all-runs-title').show()
  $('#update-run-message').html('')
}
const showAllMyRunsFailure = function () {
  $('#show-all-runs').html(`<p> You have no saved runs. </p>`)
  $('#delete-runs-message').html('')
  $('#update-run-message').html('')
}

const deleteRunSuccess = function (data) {
  console.log('hi')
  $('#update-run-message').html('')
  $('#delete-runs-message').html(`<p> Run was deleted </p>`)
  $('#user-messages').html('')
  api.showAllMyRuns()
    .then(showAllMyRunsSuccess)
    .catch(showAllMyRunsFailure)
}

// const showAllMyRunsNewSuccess

const deleteRunFailure = function (id) {
  $('#delete-runs-message').html(`<p> Error: run not deleted </p>`)
  $('#update-run-message').html('')
  $('#user-messages').html('')
}

const updateRunSuccess = function (data) {
  $('#update-run-message').html(`<p> Run has been updated </p>`)
  $('#delete-runs-message').html('')
  $('#user-messages').html('')
}

const updateRunFailure = function (data) {
  $('#update-run-message').html(`<p> Error: run has not been updated</p>`)
  $('#delete-runs-message').html('')
  $('#user-messages').html('')
}
module.exports = {
  newRunSuccess,
  newRunFailure,
  showAllMyRunsSuccess,
  showAllMyRunsFailure,
  deleteRunSuccess,
  deleteRunFailure,
  updateRunSuccess,
  updateRunFailure
}
