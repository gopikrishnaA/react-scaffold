import React from 'react'
import renderer from 'react-test-renderer'
import UserNav from './UserNav'

it('renders correctly', () => {
  const tree = renderer.create(<UserNav />).toJSON()
  expect(tree).toMatchSnapshot()
})
