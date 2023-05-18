import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../../shared/type";
import { Todos } from "../type";
import { createTodos, getTodosList } from "./actions";

interface Initialstate {
    list: {
        status: Status,
        data: Todos[]
    },
    create: {
        status: Status
    }
}
const initialstate: Initialstate = {
    list: {
        status: 'init',
        data: []
    },
    create: {
        status: 'init'
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
            })


    }
})
export default todosSlice.reducer