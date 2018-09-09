import React from 'react'
import renderer from 'react-test-renderer'
import UserNav from 'connect-nav/lib/TopNav/UserNav'

it('renders correctly with no props', () => {
  const tree = renderer.create(<UserNav />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly only names', () => {
  const tree = renderer
    .create(<UserNav firstName='Jane' lastName='Doe' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly wit image', () => {
  const tree = renderer
    .create(<UserNav firstName='Jane' lastName='Doe' userAvatar />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
