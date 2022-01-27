// React and both useState useEffect
import React, { useState } from 'react';
// axios to make api call
import axios from 'axios'
// use History to back to all author page
import { useHistory, Link } from 'react-router-dom';


const Create = () => {

    const [name, setName] = useState("")

    const [errors, setErrors] = useState([])
    const history = useHistory();

    const handleSubmit = (e) => {
        // prevent refreshing
        e.preventDefault()

        const newAuthor = {name: name};

        axios.post("http://localhost:8000/api/authors", newAuthor)
            .then(res => history.push("/"))
            .catch(err => {
                // console.log(err.response.data)

                const { errors } = err.response.data.error
                // console.log(Object.entries(error))
                const messages = Object.keys(errors).map( error => errors[error].message)
                // console.log(messages)
                setErrors(messages);
            })
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <h3>Add a new Author</h3>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                    {
                        errors.map((error) => {
                            return <div style={{color: "red"}}>{error}</div>
                        })
                    }
                </p>
                <Link to="/" className='btn'>Cancel</Link>
                <input className="btn" type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Create;
