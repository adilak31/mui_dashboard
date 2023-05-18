import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import commentSlice from '../features/Comments/store'
import todosSlice from "../features/Todos/store"
import postSlice from '../features/Posts/store'

export const store = configureStore({
    reducer: {
        comments: commentSlice,
        todos: todosSlice,
        posts: postSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const useAppDispatch: () => AppDispatch = useDispatch // for actions
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector //  for getting from state3