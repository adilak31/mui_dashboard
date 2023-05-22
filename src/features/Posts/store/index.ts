
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../../../shared/type'
import { Post } from '../type'
import { createPost, getPostDetail, getPostsList } from './actions'


export interface InitialState {
    list: {
        status: Status,
        data: Post[]
    },
    create: {
        status: Status
    },
    detail: {
        status: Status,
        data: Post
    }
}
const initialState: InitialState = {
    list: {
        status: "init",
        data: []
    },
    create: {
        status: 'init'
    },
    detail: {
        status: 'init',
        data: {} as Post
    }

}
export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPostsList.pending, (state, action) => {
            state.list.status = 'loading'
        }),
            builder.addCase(getPostsList.fulfilled, (state, action) => {
                state.list.status = 'success'
                state.list.data = action.payload
            }),
            builder.addCase(getPostsList.rejected, (state, action) => {
                state.list.status = 'error'
            }),
            builder.addCase(createPost.pending, (state, action) => {
                state.create.status = 'loading'
            }),
            builder.addCase(createPost.fulfilled, (state, action) => {
                state.create.status = 'success'
            }),
            builder.addCase(getPostDetail.pending, (state, action) => {
                state.detail.status = 'loading'
            }),
            builder.addCase(getPostDetail.fulfilled, (state, action) => {
                state.detail.status = 'success'
                state.detail.data = action.payload
            }),
            builder.addCase(getPostDetail.rejected, (state, action) => {
                state.detail.status = 'error'
            })

    }

})
export default postSlice.reducer