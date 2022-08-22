import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {userReducer} from './reducer';
import { combineReducers} from 'redux';
const redux = require('redux');
const createStore = redux.createStore;

const rootReducer = combineReducers({
    user: userReducer
})

//Redux-Persist

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

//Store

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor}