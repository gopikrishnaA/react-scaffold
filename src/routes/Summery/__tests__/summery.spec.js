/* eslint-env jest */
import React from 'react'
import configureMockStore from 'redux-mock-store'
import { mount } from 'enzyme'
import { Summery } from '../index'

// Create the mock store
const mockStore = configureMockStore()

const store = (items = {}) => {
  const initialState = {
    login: {
      items
    }
  }
  return mockStore(initialState)
}

describe('Summery Component', () => {
  it('should render header with title', () => {
    const wrapper = mount(<Summery store={store()} />)
    expect(wrapper.find('.h1').text()).toEqual('Summery')
  })
  it('should render table header with below names', () => {
    const wrapper = mount(<Summery store={store()} />)
    expect(wrapper.find('.th1').text()).toEqual('S.no')
    expect(wrapper.find('.th2').text()).toEqual('JokeId')
    expect(wrapper.find('.th3').text()).toEqual('Joke')
    expect(wrapper.find('.th5').text()).toEqual('TimeStamp')
    expect(wrapper.find('[selected=true]').props().children).toEqual('Filter By')
  })
  it('should render table items', () => {
    const items = {
      '123': {
        joke: 'test',
        status: 'like',
        timeStamp: '22-02-2010'
      }
    }
    const wrapper = mount(<Summery store={store(items)} />)
    const elements = wrapper.find('[data-qa="tr123"]').props().children
    expect(elements[0].props.children).toEqual(1)
    expect(elements[1].props.children).toEqual('123')
    expect(elements[2].props.children).toEqual('test')
    expect(elements[3].props.children).toEqual('like')
    expect(elements[4].props.children).toEqual('22-02-2010')
  })
})
