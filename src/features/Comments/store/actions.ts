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