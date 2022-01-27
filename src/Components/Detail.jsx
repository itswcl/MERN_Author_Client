// React and both useState useEffect
import React, { useState, useEffect } from 'react';
// axios to make api call
import axios from 'axios'
// link to path to other route
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
    // get the author as obj
    const [author, setAuthor] = useState({})
    // get id from URL
    const { id } = useParams()

    useEffect(() => {
        // API call with ID
        axios("http://localhost:8000/api/authors/" + id)
            // set the author res.data with key author
            .then(res => setAuthor(res.data.author))
            .catch(err => console.log(err))
    },[])

    return <div>
        <Link to="/">Home</Link>
        {/* {JSON.stringify(author)} */}
        {
            <p>
                Name: {author.name}
            </p>
        }
    </div>;
};

export default Detail;
