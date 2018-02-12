'use strict'
const store = require('./store')
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
  $('#delete-run').show()
  // $('#show-all-runs').hide()
  $('#show-all-runs').show()
}
const showAllMyRunsFailure = function () {
  $('#user-messages').html(`<p> You have no saved runs. </p>`)
}

const deleteRunSuccess = function () {
  console.log('hi')
  $('#user-messages').html(`<p> Run was deleted </p>`)
}
const deleteRunFailure = function (id) {
  $('#user-messages').html(`<p> Error: run not deleted </p>`)
}

const updateRunSuccess = function (data) {
  $('#user-messages').html(`<p> Run has been updated </p>`)
}

const updateRunFailure = function (data) {
  $('#update-run-message').html(`<p> Error: run has not been updated</p>`)
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
