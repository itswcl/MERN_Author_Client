// React and both useState useEffect
import React, { useState, useEffect } from 'react';
// axios to make api call
import axios from 'axios'
// link to path to other route
import { Link } from 'react-router-dom';

const Main = (props) => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            // in findAll we set {authors: authors}
            .then(res => setAuthors(res.data.authors))
            .catch(err => console.log(err))
    })
    return <div>
        {JSON.stringify(authors)}
    </div>;
};

export default Main;
