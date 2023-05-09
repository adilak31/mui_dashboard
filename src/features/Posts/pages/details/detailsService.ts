import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Status } from "../../../../shared/type"
import { Post } from "../../type"


const detailsService = () => {
    const [details, setDetails] = useState<Post>({} as Post)
    const params = useParams()
    const [status, setStatus] = useState<Status>('init')
    const isLoading = status === 'loading'
    const isError = status === 'error'
    const isSuccess = status === 'success'
    const fetchPosts = async () => {
        try {
            setStatus('loading')
            const response = await axios.get<Post>('https://jsonplaceholder.typicode.com/posts/' + params.id)
            setDetails(response.data)
            setStatus('success')
        }
        catch (error) {
            setStatus('error')
        }

    }
    useEffect(() => {
        fetchPosts()
    }, [])

    return { isLoading, isError, isSuccess, details }

}

export default detailsService
