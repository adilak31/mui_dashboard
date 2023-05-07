import axios from "axios"
import { useEffect, useState } from "react"
import { Status } from "../../../../shared/type"
import { Comment } from "../../type"

export const listService = () => {
    const [list, setList] = useState<Comment[]>([])
    const [status, setStatus] = useState<Status>('init')
    const isLoading = status === 'loading'
    const isError = status === 'error'
    const isSuccess = status === 'success'
    const fetchList = async () => {
        try {
            setStatus('loading')
            const response = await axios.get<Comment[]>("https://jsonplaceholder.typicode.com/comments")
            setList(response.data)
            setStatus('success')
        }
        catch (error) {
            setStatus('error')
        }

    }
    useEffect(() => {
        fetchList()
    }, [])
    return {
        isError, isLoading, isSuccess, list

    }
} 