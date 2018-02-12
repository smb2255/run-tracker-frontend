'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}
const changePass = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const signOut = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createNewRun = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/runs/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      'Content-Type': 'application/json'
    },
    data
  })
}
const showAllMyRuns = function () {
  return $.ajax({
    url: config.apiOrigin + '/runs/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const showAllMyRunsNew = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/runs/',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const deleteRun = function (id) {
  // const id = $(data).data('id')
  return $.ajax({
    url: config.apiOrigin + '/runs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRun = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/runs/' + store.updateId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
      'Content-Type': 'application/json'
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePass,
  signOut,
  createNewRun,
  showAllMyRuns,
  deleteRun,
  updateRun
  // showAllMyRunsNew
}
