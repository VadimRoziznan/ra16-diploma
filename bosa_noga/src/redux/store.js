import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Используем localStorage
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import { cartMiddleware } from './middlewares/cartMiddleware'

// Конфигурация для redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // Указываем, что сохраняем только состояние корзины
};

// Оборачиваем rootReducer в persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Создаём Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Создаём store с помощью configureStore
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Отключаем проверку сериализуемости для redux-persist
    })
      .concat(sagaMiddleware) // Добавляем sagaMiddleware
      .concat(cartMiddleware), // Добавляем cartMiddleware
});

// Создаём persistor для синхронизации состояния
const persistor = persistStore(store);

// Запускаем rootSaga
sagaMiddleware.run(rootSaga);

// Экспортируем store и persistor
export { store, persistor };