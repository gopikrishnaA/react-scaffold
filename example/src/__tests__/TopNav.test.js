import React from 'react'
import renderer from 'react-test-renderer'
import TopNav from 'connect-nav/lib/TopNav'

it('renders correctly', () => {
  const tree = renderer.create(<TopNav />).toJSON()
  expect(tree).toMatchSnapshot()
})
