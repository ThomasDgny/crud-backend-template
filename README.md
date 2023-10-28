# Node.js & Express.js CRUD API Template

A template for building a CRUD (Create, Read, Update, Delete) REST API using Node.js and Express.js. This project provides a starting point for creating APIs that interact with a database.

## Features

- Create, Read, Update, and Delete operations for a resource.
- Preconfigured with Express.js for routing and middleware.
- Database integration (you can specify the database you want to use).
- Error handling and validation.
- CORS support for enabling cross-origin requests.

## Getting Started

### Installation

1. Clone the repository:
 ```bash
  git clone https://github.com/GoodGuyForReal/crud-backend-template.git
  ```

<br>
   
2. Install dependencies:
 ```bash
cd express-crud-api-template
npm install
 ```


## API Endpoints

Below are the available API endpoints for this CRUD API:

| Endpoint             | Method | Description                 | Example Request                                        |
| --------------------  | ------ | ---------------------------- | ------------------------------------------------------ |
| `/users`             | GET    | Get all users               | [View](http://localhost:5000/users)                    |
| `/users/:id`         | GET    | Get a user by ID            | [View](http://localhost:5000/users/5776786867)        |
| `/users/:id`         | DELETE | Delete a user by ID         | [View](http://localhost:5000/users/8)                  |
| `/users`             | POST   | Create a new user           | [View](http://localhost:5000/users)                    |
| `/users/:id`         | PATCH  | Update a user by ID         | [View](http://localhost:5000/users/3)                  |

### Example Request Body for Creating a User

```json
{
    "username": null,
    "email": "taric@example.com",
    "age": 23
}


