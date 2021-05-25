import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UpdateRestaurant from '../components/UpdateRestaurant'
import { RestaurantsContext } from '../context/RestaurantsContext'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <RestaurantsContext.Provider value={{}}>
                <UpdateRestaurant />
            </RestaurantsContext.Provider>
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})