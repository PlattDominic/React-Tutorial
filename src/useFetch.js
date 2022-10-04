import { useState, useEffect } from 'react';


const useFetch = (url) => {
    // way to this so I don't have to do the conditional check in component is by making null an empty array instead
    // const [blogs, setBlogs] = useState([])
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('Failed to fetch blogs');
                }
                return res.json()
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;