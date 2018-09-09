import React from 'react'
import renderer from 'react-test-renderer'
import TopNav from './TopNav'

it('renders correctly', () => {
  const tree = renderer.create(<TopNav />).toJSON()
  expect(tree).toMatchSnapshot()
})
