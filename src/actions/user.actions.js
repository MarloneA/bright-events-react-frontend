import { userConstants } from '../constants'
import { userService } from '../services'
import { alertActions } from './'
import { history } from '../helpers'

export const userActions = {
  login,
  logout,
  register
}

function login () {
  return ''
}

function logout () {
  return ''
}

function register (user) {
  return dispatch => {
    dispatch(request(user))
    userService.register(user)
      .then(
        user => {
          dispatch(success())
          history.push('/login')
          dispatch(alertActions.success('Registration successful'))
        },
        error => {
          dispatch(failure(error))
          dispatch(alertActions.error(error))
        }
      )
  }

  function request (user) { return { type: userConstants.REGISTER_REQUEST, user } }
  function success (user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure (error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
