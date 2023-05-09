import axios from "axios"
import { useEffect, useState } from "react"
import { Status } from "../../../../shared/type"
import { Post } from "../../type"


const listService = () => {
    const [list, setList] = useState<Post[]>([])
    const [status, setStatus] = useState<Status>('init')
    const isLoading = status === 'loading'
    const isError = status === 'error'
    const isSuccess = status === 'success'
    const fetchList = async () => {
        try {
            setStatus('loading')
            const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
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
    return { isError, isLoading, isSuccess, list }

}

export default listService
