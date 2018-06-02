/* eslint-env jest */
import React from 'react'
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Loading from '../index'

// Create the mock store
const mockStore = configureMockStore()

const store = (flag) => {
  const initialState = {
    loading: {
      loading: flag
    }
  }
  return mockStore(initialState)
}
describe('Loading Component', () => {
  it('should render loader when loading flag true', () => {
    const wrapper = shallow(<Loading store={store(true)} />)
    expect(wrapper.props().isLoading).toEqual(true)
    expect(wrapper.html()).toContain('class="loading-container"')
  })
  it('should not render loader when loading flag false', () => {
    const wrapper = shallow(<Loading store={store(false)} />)
    expect(wrapper.props().isLoading).toEqual(false)
    expect(wrapper.html()).not.toContain('class="loading-container"')
  })
})
