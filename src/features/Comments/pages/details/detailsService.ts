import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Status } from "../../../../shared/type"
import { Comment } from "../../type"


const detailsService = () => {
    const [details, setDetails] = useState<Comment>({} as Comment)
    const params = useParams()
    const [status, setStatus] = useState<Status>('init')
    const isLoading = status === 'loading'
    const isError = status === 'error'
    const isSuccess = status === 'success'
    const fetchDetails = async () => {
        try {
            setStatus('loading')
            const response = await axios.get<Comment>('https://jsonplaceholder.typicode.com/comments/' + params.id)
            setStatus('success')
            setDetails(response.data)
        }
        catch (error) {
            setStatus('error')
        }

    }
    useEffect(() => {
        fetchDetails()
    }, [])
    return { isError, isLoading, isSuccess, details }
}

export default detailsService
