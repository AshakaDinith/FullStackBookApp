# Full Stack Book Management App

A simple full-stack web application for managing books. This application provides both a backend (Node.js) and a frontend (React) to create, list, and delete books. Users can interact with a MongoDB database to store book information, including title, author, and ISBN.

![App Preview](https://github.com/AshakaDinith/FullStackBookApp/blob/main/frontend/public/app-screenshot.png)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  

## Features

- **Backend (Node.js):**
  - Express server to handle API requests.
  - MongoDB database for storing book information.
  - RESTful API endpoints for managing books.

- **Frontend (React):**
  - A user-friendly form for inputting book details.
  - A list of books displayed below the form.
  - Fetches and displays books from the backend.
  - Supports adding new books through the form.
  - Allows deleting books by ISBN.

## Technologies

- Node.js
- Express
- MongoDB
- React
- CSS/SCSS for custom styling

## Setup

1. Clone the repository:

   ```shell
   git clone https://github.com/AshakaDinith/FullStackBookApp.git

2. Install dependencies for the backend:
    ```shell
   cd FullStackBookApp/backend
   npm install
   npm i cors express mongoose nodemon
3. Start the backend server:
   ```shell
   npm run dev

4. Install dependencies for the frontend:
    ```shell
    cd FullStackBookApp/frontend
    npm install
    npm i axios react react-router-dom
    
5. Start the frontend server:
    ```shell
    npm run dev
    

6. Access the application in your web browser at http://localhost:5173.
   

## API Endpoints

- GET /books: Retrieve a list of all books.
- POST /books/newbook: Add a new book.
- DELETE /books/:isbn: Delete a book by ISBN.
