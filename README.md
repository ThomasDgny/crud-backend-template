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

| Endpoint             | Method | Description                 | 
| --------------------  | ------ | ---------------------------- | 
| `/users`             | GET    | Get all users               | 
| `/users/:id`         | GET    | Get a user by ID            |
| `/users/:id`         | DELETE | Delete a user by ID         | 
| `/users`             | POST   | Create a new user           | 
| `/users/:id`         | PATCH  | Update a user by ID         | 

### Example Request Body for Creating a User

```json
{
    "username": "jhon",
    "email": "jhon@example.com",
    "age": 23
}
````
### Example Response from Creating a User
```json
{
    "message": "user jhon added to database",
    "status": 200,
    "data": {
        "new": {
            "username": "jhon",
            "email": "jhon@example.com",
            "age": 23
        }
    }
}
````
<br>
For testing, you can use tools like Postman. The API responses are not shown in this README, but you can test them in your development environment.
Make sure to replace the URL examples with the actual URL where your API is hosted.
Feel free to customize this table format and add more details as needed for your project's specific requirements.

<br>
## License
This repo is cretaed under the [MIT License](https://opensource.org/licenses/MIT).
