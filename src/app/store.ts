import storage from 'redux-persist/lib/storage'
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import {gradeReducer} from "entities/grade";
import {questionsReducer} from "entities/question";
import {passReducer} from "entities/pass";
import {redirectReducer} from "entities/redirect";


const rootReducer = combineReducers({
    grade: gradeReducer,
    questions: questionsReducer,
    pass: passReducer,
    redirect: redirectReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            },
        })
})

export type AppDispatch = typeof store.dispatch
export type RootStateStore = ReturnType<typeof store.getState>
export const persistor = persistStore(store)
export default store