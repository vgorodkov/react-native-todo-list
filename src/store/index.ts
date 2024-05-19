import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import categoryReducer from './slices/categorySlice';
import taskModalReducer from './slices/taskModalSlice';
import taskReducer from './slices/taskSlice';
import timeFilterReducer from './slices/timeFilterSlice';

const rootReducer = combineReducers({
  category: categoryReducer,
  task: taskReducer,
  taskModal: taskModalReducer,
  timeFilter: timeFilterReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['category', 'task', 'timeFilter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
