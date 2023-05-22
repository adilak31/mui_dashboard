import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../../shared/type";
import { Todos } from "../type";
import { createTodos, getTodosDetail, getTodosList } from "./actions";

interface Initialstate {
    list: {
        status: Status,
        data: Todos[]
    },
    create: {
        status: Status
    },
    detail: {
        status: Status,
        data: Todos
    }
}
const initialstate: Initialstate = {
    list: {
        status: 'init',
        data: []
    },
    create: {
        status: 'init'
    },
    detail: {
        status: 'init',
        data: {} as Todos
    }
}
const todosSlice = createSlice({
    name: 'todos',
    initialState: initialstate,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodosList.pending, (state, action) => {
            state.list.status = 'loading'
        }),
            builder.addCase(getTodosList.fulfilled, (state, action) => {
                state.list.status = 'success'
                state.list.data = action.payload
            }),
            builder.addCase(getTodosList.rejected, (state, action) => {
                state.list.status = 'error'
            }),
            builder.addCase(createTodos.pending, (state, action) => {
                state.create.status = 'loading'
            }),
            builder.addCase(createTodos.fulfilled, (state, action) => {
                state.create.status = 'success'
            }),
            builder.addCase(createTodos.rejected, (state, action) => {
                state.create.status = 'error'
            }),
            builder.addCase(getTodosDetail.pending, (state, action) => {
                state.detail.status = 'loading'
            }),
            builder.addCase(getTodosDetail.fulfilled, (state, action) => {
                state.detail.status = 'success'
                state.detail.data = action.payload
            }),
            builder.addCase(getTodosDetail.rejected, (state, action) => {
                state.detail.status = 'error'
            })


    }
})
export default todosSlice.reducer