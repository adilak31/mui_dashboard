import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Status } from '../../../shared/type'
import { getCommentsDetail, getCommentsList } from './actions'
import { Comment } from '../type'

export interface InitialState {
    list: {
        status: Status
        data: Comment[]
    },
    detail: {
        status: Status
        data: Comment
    }
}

const initialState: InitialState = {
    list: {
        status: 'init',
        data: []
    },
    detail: {
        status: 'init',
        data: {} as Comment
    }
}

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCommentsList.pending, (state, action) => {
            state.list.status = 'loading'
        }),
            builder.addCase(getCommentsList.fulfilled, (state, action) => {
                state.list.status = 'success'
                state.list.data = action.payload
            }),
            builder.addCase(getCommentsList.rejected, (state, action) => {
                state.list.status = 'error'
            }),
            builder.addCase(getCommentsDetail.pending, (state, action) => {
                state.detail.status = 'loading'
            }),
            builder.addCase(getCommentsDetail.fulfilled, (state, action) => {
                state.detail.status = 'success'
                state.detail.data = action.payload
            }),
            builder.addCase(getCommentsDetail.rejected, (state, action) => {
                state.detail.status = 'error'
            })
    }
})


export default commentSlice.reducer