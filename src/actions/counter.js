import { actionsTypes } from '../constants/counter'

const actions = {
  decrement: (payload) => ({
    type: actionsTypes.COUNTER_DECREMENT,
    payload: payload
  }),
  increment: (payload) => ({
    type: actionsTypes.COUNTER_INCREMENT,
    payload: payload
  })
}

export { actions }