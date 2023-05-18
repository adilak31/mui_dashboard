
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../../../shared/type'
import { Post } from '../type'
import { createPost, getPostsList } from './actions'


export interface InitialState {
    list: {
        status: Status,
        data: Post[]
    },
    create: {
        status: Status
    }
}
const initialState: InitialState = {
    list: {
        status: "init",
        data: []
    },
    create: {
        status: 'init'
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
            })

    }

})
export default postSlice.reducer