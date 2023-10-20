import React, { useState } from 'react'; 
import BackButton from '../components/home/BackButton'
import Spinner from '../components/home/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateBooks = () => {
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [ISBN,setISBN] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveBook = () => {
        const data = {
            title,
            author,
            ISBN,
        };
        setLoading(true);
        axios.post('http://localhost:5555/books/newbook',data).then(()=>{
            setLoading(false);
            navigate('/');
        })
        .catch((error)=>{
            setLoading(false);
            alert('An error happened.Please check console');
            console.log(error);
        });
    };

  return (
    <div>
        <BackButton/>
        <h1>Create Book</h1>
        {loading ? <Spinner/> : ''}
        <div>
            <div>
                <label>ISBN</label>
                <input
                    type='text'
                    value={ISBN}
                    onChange={(e) => setISBN(e.target.value)}
                />
            </div>
            <div>
                <label>Title</label>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Author</label>
                <input
                    type='text'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>

            <button onClick={handleSaveBook}>Save</button>
        </div>
    </div>
  )
}

export default CreateBooks