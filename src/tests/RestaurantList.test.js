import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RestaurantList from '../components/RestaurantList'
import { RestaurantsContext } from '../context/RestaurantsContext'
console.log('=====> RestaurantsContext', RestaurantsContext)

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <RestaurantsContext.Provider
                value={{
                    restaurants: [],
                }}>
                <RestaurantList />
            </RestaurantsContext.Provider>
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})