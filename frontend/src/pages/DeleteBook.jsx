import React, { useState } from 'react';
import BackButton from '../components/home/BackButton';
import Spinner from '../components/home/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles.css'; // Import the CSS file

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
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
      <div className="header">
        <h2>Delete Book</h2>
      </div>
      {loading ? <Spinner /> : ''}
      <div className="confirmation">
      <h3>Are you sure you want to delete this book?</h3>
      <button className="button delete-button" onClick={handleDeleteBook}>
        Yes, Delete it
      </button>
     </div>
     <BackButton destination="/" />
    </div>
  );
}

export default DeleteBook;
