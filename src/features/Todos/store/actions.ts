import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"
import { CreateTodos, Todos } from "../type"

export const getTodosList = createAsyncThunk(
    'todos/getTodosList',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Todos[]>("https://jsonplaceholder.typicode.com/todos")
            return response.data
        }
        catch (error) {
        }

    }
)
export const createTodos = createAsyncThunk(
    'todos/createTodos',
    async (values: CreateTodos, thunkAPI) => {
        try {
            await axios.post("https://jsonplaceholder.typicode.com/todos", values)
            toast.success('🦄 Wow so easy!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
        catch (error) {
            toast.error('error', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }
)
