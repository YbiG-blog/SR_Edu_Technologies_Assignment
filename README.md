**Frontend README.md:**

# Frontend for My To-Do List

This is the frontend for the "My To-Do List" web application.

## Project Setup

Before you start the project, make sure you have the necessary dependencies installed. You can use npm for managing packages.

1. Install project dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

By default, the frontend runs on port 3000. You can access the web application in your browser at `http://localhost:3000`.

## Technologies Used

- React
- Axios (for making API requests)
- CSS (for styling)

**Backend README.md:**

# Backend for My To-Do List

This is the backend for the "My To-Do List" web application.

## Project Setup

Before you start the project, make sure you have the necessary dependencies installed. You can use npm for managing packages.

1. Install project dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   node app.js
      OR
   nodemon app.js
   ```

By default, the backend runs on port 8000. It provides API endpoints for managing tasks.

## API Endpoints

- `GET /api/v1/getToDoList`: Get the list of tasks.
- `POST /api/v1/addToDo`: Add a new task.
- `PUT /api/v1/markCompleted/:_id(taskId)`: Mark a task as completed.
- `DELETE /api/v1/deleteToDo/:_id((taskId))`: Delete a task.

## Technologies Used

- Node.js
- Express (for building the server)
- Mongoose (for database interaction)
- MongoDB (as the database)

# Deployment
You can access the deployed application at the following link :
`https://to-do-list-sredu.netlify.app/`


