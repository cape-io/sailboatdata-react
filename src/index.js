import React from 'react'
import { render } from 'react-dom'
// Add the latest es2016+ stuff that we love.
import 'babel-polyfill'

import configureStore from './redux/configureStore'
// Root React component.
import Root from './redux/Root'
import { searchIndex } from './helpers/fetch'
// Define our inital state object. This could be a fetch() to an API endpoint.
const initialState = window.reactData || {}
// Configure and create our Redux store.
const store = configureStore(initialState)

// Fetch our initialInfo
searchIndex(store.dispatch)
// Define our destination where we insert our root react component.
const destEl = document.getElementById('root')

// The root component needs the Redux `store`.
render(<Root store={store} />, destEl)
