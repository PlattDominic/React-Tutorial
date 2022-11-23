import { useState, useEffect } from 'react';


const useFetch = (url) => {
    // way to this so I don't have to do the conditional check in component is by making null an empty array instead
    // const [blogs, setBlogs] = useState([])
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal }) 
            .then(res => {
                if (!res.ok) {
                    throw Error('Failed to fetch blogs');
                }
                return res.json()
            })
            .then((data) => {
                setIsPending(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    // auto catches network / connection error
                    setIsPending(false);
                    setError(err.message);
                }
            })

        return () => abortCont.abort()
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;