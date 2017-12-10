import { Record } from 'immutable'
import axios from 'axios'

export const consts = {
  LOGIN_REQUESTED: 'login/LOGIN_REQUESTED',
  LOGIN_SUCCESS: 'login/LOGIN_SUCCESS',
  LOGIN_FAIL: 'login/LOGIN_FAIL',
}

const User = Record({
  token: {
    tokenType: '',
    accessToken: '',
    refreshToken: '',
    expiresIn: '',
  },
  user: {
    id: '',
    email: '',
    role: '',
    createdAt: '',
  },
})
const InitialState = Record({
  isFetching: false,
  loggedIn: false,
  error: null,
  user: new User(),
})

export const actionHandlers = {
  [consts.LOGIN_REQUESTED]: (state) => state.withMutations((ctx) => ctx.set('isFetching', true)),
  [consts.LOGIN_SUCCESS]: (state, action) => state.withMutations((ctx) =>
    ctx.set('isFetching', false)
    .set('error', null)
    .set('loggedIn', true)
    .set('user', new User(action.response.data))
  ),
  [consts.LOGIN_FAIL]: (state, action) => state.withMutations((ctx) =>
    ctx.set('isFetching', false)
      .set('error', action.error)),
}

export const logIn = (email, password) => dispatch => {
  dispatch({ type: consts.LOGIN_REQUESTED })
  axios.post('http://localhost:4000/v1/auth/login', {
    email,
    password,
  })
    .then(response => dispatch({ type: consts.LOGIN_SUCCESS, response }))
    .catch(error => dispatch({ type: consts.LOGIN_FAIL, error }))
}

const initialState = new InitialState()
export const reducers = (state = initialState, action) => {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default reducers
