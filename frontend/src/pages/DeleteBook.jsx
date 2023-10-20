import React,{useState} from 'react'
import BackButton from '../components/home/BackButton'
import Spinner from '../components/home/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteBook = () => {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false);
    })
  };
  return (
    <div>DeleteBook</div>
  )
}

export default DeleteBook