// React and both useState useEffect
import React, { useState, useEffect } from 'react';
// axios to make api call
import axios from 'axios'
// use History to back to all author page
import { useHistory, Link, useParams } from 'react-router-dom';

const Update = () => {

    const [author, setAuthor] = useState({})
    const { id } = useParams()
    const history = useHistory()

    const [errors, setErrors] = useState([])
    const [invalidMessage, setInvalidMessage] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                // console.log(res)
                setAuthor(res.data.author)
            })
            .catch(err => {
                // console.log(err.response.data.error.message)
                setInvalidMessage("We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?");
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = {
            ...author,
            name: author.name
        }

        axios.put(`http://localhost:8000/api/authors/${id}`, name)
            .then(res => history.push('/'))
            .catch(err => {
                // console.log(err)
                // console.log(err.response.data.error)
                const { errors } = err.response.data.error
                const messages = Object.keys(errors).map(error => errors[error].message)
                setErrors(messages);
            })
    }


    return (
        <div>
            <Link to="/">Home</Link>
            {
                <p>{invalidMessage}</p>
            }
            {
                author.name === undefined
                    ? <p></p>
                    :
                    <form onSubmit={handleSubmit}>
                        <h3>Edit the Author</h3>
                        <p>
                            <label>Name:</label>
                            <input type="text" onChange={(e) => setAuthor({ ...author, name: e.target.value })} value={author.name} />
                        </p>
                        {
                            errors.map((error) => {
                                return <div style={{ color: "red" }}>{error}</div>
                            })
                        }
                        <Link to="/" className='btn'>Cancel</Link>
                        <input className="btn" type="submit" value="edit" />
                    </form>
            }
        </div>
    );
};

export default Update;
