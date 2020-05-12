import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bulma/css/bulma.css'
import './styles.scss'

import { createStore } from 'redux'
import { reducer } from './reducer/reducer'
import { Provider } from 'react-redux'

const store = createStore(reducer)

const rootElement = document.getElementById('root')
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement)
