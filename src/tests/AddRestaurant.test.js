import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddRestaurant from '../components/AddRestaurant'
import { RestaurantsContext } from '../context/RestaurantsContext'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <RestaurantsContext.Provider value={{}}>
                <AddRestaurant />
            </RestaurantsContext.Provider>
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})