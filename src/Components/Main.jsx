// React and both useState useEffect
import React, { useState, useEffect } from 'react';
// axios to make api call
import axios from 'axios'
// link to path to other route
import { Link } from 'react-router-dom';

import PopUp from './PopUp';

const Main = () => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            // in findAll we set {authors: authors}
            .then(res => setAuthors(res.data.authors))
            .catch(err => console.log(err))
    }, [])

    const deleteAuthor = (deleteId, name) => {
        if (window.confirm(`Are you sure you want to remove ${name}?`)) {
            axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
                .then(res => setAuthors(authors.filter((author, idx) => author._id !== deleteId)))
                .catch(err => console.log(err))
        }
    }



    return <div>
        <Link to="/authors/new">Add an author</Link>
        <h3>We have quotes by:</h3>
        {/* {JSON.stringify(authors)} */}
        <table className='m-auto'>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
            </thead>
            <tbody>
                {
                    authors.map((author, idx) => {
                        return (
                            <tr key={author._id}>
                                <td>
                                    <Link to={"/authors/" + author._id}>{author.name}</Link>
                                </td>
                                <td>
                                    <Link className="btn" to={"/authors/" + author._id + "/edit"}>Edit</Link>
                                    &nbsp;
                                    {/* PopUp is another way to do pop up window with custom dialog*/}
                                    {/* <PopUp deleteAuthor={deleteAuthor} author={author}/> */}
                                    {/* use windows.confirm to do pop up*/}
                                    <button className="btn" onClick={() => deleteAuthor(author._id, author.name)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>;
};

export default Main;
