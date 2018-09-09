import React from 'react'
import renderer from 'react-test-renderer'
import ConnectNav from './ConnectNav'

it('renders correctly', () => {
  const tree = renderer.create(<ConnectNav />).toJSON()
  expect(tree).toMatchSnapshot()
})
