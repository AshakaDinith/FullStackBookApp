import express, { request, response } from "express";
import {Book} from '../models/bookModel.js';

const router = express.Router();

//save a new book
router.post('/newbook',async(request,response)=>{
    try{
        if(
            !request.body.title||
            !request.body.author||
            !request.body.ISBN
        ){
            return response.status(400).send({
                message: 'Send all data',
            });
        }
        const newBook = {
            title:request.body.title,
            author:request.body.author,
            ISBN:request.body.ISBN
        };

        const book = await Book.create(newBook);
        return response.status(201).send(book);


    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})

router.get('/',async(request,response)=>{
    try{
        const books = await Book.find({});
        return response.status(200).json({
            count:books.length,
            data:books
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
})

router.delete('/:id',async(request,response)=>{
    try {
        const {id} = request.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).json({message:'Book not found'});
        }
        return response.status(200).send({message:'Book deleted successfully.'})
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});


export default router;