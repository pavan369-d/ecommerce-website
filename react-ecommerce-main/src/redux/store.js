import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productSaga from './productSaga';
import rootReducer from './rootReducer';


const sagaMiddleware=createSagaMiddleware();
const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
}
);

sagaMiddleware.run(productSaga)
export default store;