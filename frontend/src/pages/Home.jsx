
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/home/Spinner';
import { Link } from 'react-router-dom';

const Home = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
  
    useEffect(() => {
      setLoading(true);
      axios
        .get('http://localhost:5555/books')
        .then((response) => {
          setBooks(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);
  


  return (
    <div >
      <div>
        <h1>Book List</h1>
        <Link to='/books/newbook'>Add New Book</Link>
      </div>
      {loading ?(
        <Spinner/>
      ):(
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>ISBN</th>
                    <th>Author</th>
                    <th>#</th>
                </tr>
            </thead>

            <tbody>
                {books.map((book,index)=>(
                    <tr key={book._id}>
                        <td>
                            {index+1}
                        </td>
                        <td>
                            {book.title}
                        </td>
                        <td>
                            {book.ISBN}
                        </td>
                        <td>
                            {book.author}
                        </td>
                        <td>
                            <Link to={`/books/${book._id}`}>
                            Delete
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      )}
    </div>
  )
}

export default Home