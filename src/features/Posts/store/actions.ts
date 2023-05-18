import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"
import { CreatPost, Post } from "../type"


export const getPostsList = createAsyncThunk(
    'posts/getPostsList',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
            return response.data
        }
        catch (error) {
        }

    }
)

export const createPost = createAsyncThunk(
    'post/creatPost',
    async (values: CreatPost, thunkAPI) => {
        try {
            await axios.post("https://jsonplaceholder.typicode.com/posts", values)
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
