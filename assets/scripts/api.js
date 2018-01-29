'use strict'

const config = require('../../config')
const store = require('../../store.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/runs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/runs',
    method: 'POST',
    data
  })
}
const changePass = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePass
}
