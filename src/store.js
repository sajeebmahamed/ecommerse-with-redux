import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { productDetailsReducer, productReducer } from './reducers/productReducer'

const reducer = combineReducers({
    productsList: productReducer,
    productDetails: productDetailsReducer
})

const initialState = {}
const middleWare = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store