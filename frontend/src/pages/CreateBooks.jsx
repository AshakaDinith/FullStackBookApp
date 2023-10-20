import React, { useState } from 'react';
import '../styles.css'; // Import the CSS file
import BackButton from '../components/home/BackButton';
import Spinner from '../components/home/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [ISBN, setISBN] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      ISBN,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books/newbook', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check the console.');
        console.log(error);
      });
  };

  return (
    <div className="container">
      <BackButton destination="/" />
      <div className="header">
        <h1>Create Book</h1>
      </div>
      {loading ? <Spinner /> : ''}
      <div>
        <div className="form-group">
          <label className="label">ISBN</label>
          <input
            className="input"
            type="text"
            value={ISBN}
            onChange={(e) => setISBN(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Title</label>
          <input
            className="input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Author</label>
          <input
            className="input"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="bottom-link">
        <button className="button" onClick={handleSaveBook}>
          Save
        </button>
      </div>
      </div>
    </div>
  );
};

export default CreateBooks;
