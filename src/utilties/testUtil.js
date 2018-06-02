/* eslint-env jest */
export const isValidReducer = (reducer) => {
  expect(typeof reducer).toEqual('function')
  expect(typeof reducer.toString).toEqual('function')
}

export const testReducer = (state, reducer, payload, result) => {
  expect(reducer(state, payload)).toEqual(result)
}
