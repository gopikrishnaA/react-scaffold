import React from 'react'
import renderer from 'react-test-renderer'
import ConnectNav from 'connect-nav/lib/TopNav/ConnectNav'

it('renders correctly', () => {
  const tree = renderer.create(<ConnectNav />).toJSON()
  expect(tree).toMatchSnapshot()
})
