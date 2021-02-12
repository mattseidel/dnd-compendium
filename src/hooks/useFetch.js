import { useEffect, useState } from "react"
import { getAll } from "../helpers/http"

export const useFetch = (category) => {
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAll(category).then((response) => {
            setState(response)
            setLoading(false)
        })
    }, [state, setState])

    return [state, loading]
}
