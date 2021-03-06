import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../components/NotFound'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})