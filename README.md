# Task Management App

This is a simple Task Management App implemented in Express.js using the HTTP module. It allows users to create, read, update, and delete tasks. The app provides basic CRUD functionality along with pagination support for retrieving tasks.

## Features

- Create a new task with a title and description
- Retrieve a list of all tasks
- Retrieve a single task by ID
- Update a task's title, description, and status
- Delete a task
- Retrieve tasks with pagination support

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MohammadAmarena/task-management-app-expressJs.git

### Navigate to the project directory:

cd task-management-app-expressjs

### Install the dependencies

npm install

# Usage

1. Start the server:
- npm run dev
The server will start running on `http://localhost:3131`.

1. Use a tool like Postman Or REST Client to interact with the API.

- Postman test collection on https://elements.getpostman.com/redirect?entityId=27888960-7801f5be-3860-4515-8bad-d52eb461ab9c&entityType=collection
- test.rest file exists within you need to install REST Client extension in vsCode and injoy

@url = `http://localhost:3131`

* Create a task:
  POST `{{url}}`/tasks "Content-Type: application/json" -d '{"title":"Task 1", "description":"This is task 1"}'

* Retrieve all tasks:
  GET `{{url}}`/tasks

* Retrieve a specific task by ID:
  GET `{{url}}`/tasks/{taskId}

* Update a task:
  PUT `{{url}}`/tasks/{taskId} "Content-Type: application/json" -d '{"title":"Updated Task 1", "description":"This is an updated task"}'

* Delete a task:
  DELETE `{{url}}`/tasks/{taskId}

* Retrieve tasks with pagination: (default value is: limit = 10 and ooffset = 0)
  GET `{{url}}`/tasks?
  GET `{{url}}`/tasks?limit=3&offset=2
  GET `{{url}}`/tasks?offset=2
  GET `{{url}}`/tasks?limit=3

#### Modify the code and customize it according to your requirements.

## Contributing
- Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.