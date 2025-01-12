// import { compose, createStore, applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// // import { loggerMiddleware } from './middleware/logger';

const middleWares = [process.env.NODE_ENV !=='production' && logger].filter(
    Boolean
); // a great way to avoid logger from appearing on production, i have chosed !== production instead of development because this is the safest option (in case i wanted to have other environments)

// const composedEnhancer = 
// (process.env.NODE_ENV !== 'production' &&
//     window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//     compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));


export const store = configureStore({
  reducer: rootReducer,
  // middleware: middleWares,
})

// export const persistor = persistStore(store);
