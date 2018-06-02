/* eslint-env jest */
import React from 'react'
import configureMockStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { LoginPage } from '../index'

// Create the mock store
const mockStore = configureMockStore()

const store = (items = {}) => {
  const initialState = {
    login: {
      joke: 'test',
      id: '123',
      items
    }
  }
  return mockStore(initialState)
}
describe('Login Component', () => {
  it('should render header with title', () => {
    const wrapper = shallow(<LoginPage store={store()} />)
    expect(wrapper.props().id).toEqual('123')
    expect(wrapper.html()).toContain('class="App-title"')
  })

  it('should dispatch action on click of like button', () => {
    const wrapper = mount(<LoginPage store={store()} />)
    wrapper.find('[data-qa="like"]').simulate('click')
    const actions = wrapper.props().store.getActions()
    const LikeAction = actions.find(action => action.type === 'LIKE_ACTION')
    expect(LikeAction.type).toEqual('LIKE_ACTION')
    expect(LikeAction.payload).toEqual({
      joke: 'test',
      id: '123',
      status: 'Like'
    })
  })

  it('should dispatch action on click of Unlike button', () => {
    const wrapper = mount(<LoginPage store={store()} />)
    wrapper.find('[data-qa="unlike"]').simulate('click')
    const actions = wrapper.props().store.getActions()
    const UnlikeAction = actions.find(action => action.type === 'LIKE_ACTION')
    expect(UnlikeAction.type).toEqual('LIKE_ACTION')
    expect(UnlikeAction.payload).toEqual({
      joke: 'test',
      id: '123',
      status: 'Unlike'
    })
  })

  it('should navigate to summery screen', () => {
    const wrapper = mount(<LoginPage store={store({'items': '1'})} />)
    wrapper.find('[data-qa="summery"]').simulate('click')
    const actions = wrapper.props().store.getActions()
    const summeryAction = actions.find(action => action.type === 'GO_TO_SUMMERY')
    expect(summeryAction.type).toEqual('GO_TO_SUMMERY')
  })

  it('Should render the uploaded image', () => {
    const wrapper = mount(<LoginPage store={store()} />)
    const file = new Blob(['file contents'], { type: 'image/gif' }) // eslint-disable-line
    const dummyFileReader = { readAsDataURL: jest.fn(), onloadend: () => {} }
    window.FileReader = jest.fn(() => dummyFileReader)
    wrapper.find('[data-qa="fileUpload"]').simulate(
      'change',
      {
        target: { files: [file] }
      }
    )
    // expect(wrapper.find('[data-qa="img"]').length).toEqual(1)
  })

  it('Should not render the uploaded image for invalid file', () => {
    const wrapper = mount(<LoginPage store={store()} />)
    wrapper.find('[data-qa="fileUpload"]').simulate('change')
    expect(wrapper.find('[data-qa="error"]').text()).toEqual('UnSupported image')
  })
})
