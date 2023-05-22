import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Comment } from "../type"

export const getCommentsList = createAsyncThunk(
    'comments/getCommentsList',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Comment[]>("https://jsonplaceholder.typicode.com/comments")
            return response.data
        }
        catch (error) {
        }

    }
)
export const getCommentsDetail = createAsyncThunk(
    'comments/getCommentsDetail',
    async (id: string, thunkAPI) => {
        try {
            const response = await axios.get<Comment>("https://jsonplaceholder.typicode.com/comments/" + id)
            return response.data
        } catch (error) {

        }
    }

)