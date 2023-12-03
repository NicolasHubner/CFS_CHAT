import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profileSlice';

export const store = configureStore({
    reducer: {
        profile: profileReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
            imutableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
