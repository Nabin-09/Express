# Express (How to get started ~Nabin)

## **Why do we use npm init -y**

This command sets up a node project and It creates a `package.json` file.
### What is `package.json` and what does it do ? 
- Metadata about the project (name, version, description, author, license).
- A list of dependencies (libraries your project needs to run).
- Scripts for automating tasks (e.g., start, test, dev).
Configuration options for various tools.

### We will be installing a `Dev dependency` - Nodemon 
This dependency will help us to see changes in server realtime , just like how live server is used to see live reload changes in html ,
CSS and JS.
And hence we will also have to update the scripts section in our package.json.
``` javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:dev" : "nodemon ./src/index.js",
    "start" : "node ./src/index.js"
  },
```
### Difference between `commonJs` and `ModuleJS`

| Feature             | CommonJS (CJS)                     | ES Modules (ESM)                      |
|---------------------|------------------------------------|---------------------------------------|
| Syntax              | `require`, `module.exports`        | `import`, `export`                    |
| Loading             | Synchronous                        | Asynchronous                          |
| File Extension      | `.js`                              | `.js` (with `"type": "module"`), `.mjs` |
| Default in Node.js  | Yes                                | No (must opt in)                      |
| Top-Level `await`   | ❌ Not supported                    | ✅ Supported                           |
| Use in Browsers     | ❌ Not supported                    | ✅ Supported                           |
| Export Style        | `module.exports = {}`              | `export` & `export default`           |

### Basic Syntax  : 
```javascript
import express from 'express';
const app = express();

//Best Practice for ports
const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    console.log(`Running on ${PORT}`)
})
```
### What This Code Does:
```import express from 'express';```
- Imports the Express framework.
const app = express();
Initializes an Express application.

```const PORT = process.env.PORT || 3000;```
- Uses the port from environment variables (e.g., in deployment), or falls back to 3000 locally. This is a best practice for flexible deployment.

```app.listen(PORT, ...)```
- Starts the server and listens on the defined PORT. Logs a message when the server is running.<br>
**to start server** : `start:dev index.mjs` to start using nodemon or simply `start index.mjs` to start with node.

## 📬 Types of HTTP Requests in Express.js

```js
const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// GET - Read data
app.get('/api/data', (req, res) => {
  res.send('GET request received');
});

// POST - Create data
app.post('/api/data', (req, res) => {
  res.send('POST request received');
});

// PUT - Update entire data
app.put('/api/data/:id', (req, res) => {
  res.send(`PUT request received for ID ${req.params.id}`);
});

// PATCH - Update part of the data
app.patch('/api/data/:id', (req, res) => {
  res.send(`PATCH request received for ID ${req.params.id}`);
});

// DELETE - Remove data
app.delete('/api/data/:id', (req, res) => {
  res.send(`DELETE request received for ID ${req.params.id}`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```
###  Summary of HTTP Methods

| Method  | Description            |
|---------|------------------------|
| GET     | Retrieve data          |
| POST    | Create new data        |
| PUT     | Update/replace data    |
| PATCH   | Update part of data    |
| DELETE  | Delete data            |

##  Express.js Request Handlers – In-Depth

In Express.js, a **request handler** defines how the server should respond to a specific HTTP request made to a certain route. It is the core of building any backend route logic.

###  Basic Syntax

```js
app.METHOD(PATH, HANDLER);
```

## HTTP Status Codes
### Three-digit codes indicating the result of an HTTP request.

- `2xx` (Success): Request handled (e.g., 200 OK, 201 Created).
- `4xx` (Client Error): Client's fault (e.g., 400 Bad Request, 404 Not Found).
- `5xx` (Server Error): Server's fault (e.g., 500 Internal Server Error).<br><br>

```js response.status(201).send({"name" : "Nabin"})```
This code:

Sets the HTTP status to 201 (Created), indicating a new resource was successfully made.
Sends a JSON object {"name": "Nabin"} as the response body.
You'd use this after a successful POST request to create something new.

- Route Parameters
Parts of the URL that capture specific values, defined with a colon (:) in the route path.

Example: /users/:userId

- In /users/123, req.params.userId would be '123'.
Used for identifying specific resources (e.g., a user's ID).
Query Parameters
Optional key-value pairs at the end of a URL, starting with a question mark (?).

```js Example: /products?category=electronics&sort=price```

- req.query.category would be 'electronics'.<br>
- req.query.sort would be 'price'.<br>
- Used for filtering, sorting, or pagination.<br>

# HTTP Requests

## POST request

### Handling POST Requests
- POST requests are used to send data to the server to create a new resource. This is the standard method for submitting forms, uploading files, or adding new entries to a database.

- When handling POST requests in Express, you'll typically need middleware to parse the incoming request body (payload), as Express itself doesn't parse it by default. The most common middleware for this is express.json().

### Key Concepts:

- Request Body (req.body): The data sent by the client in a POST request is accessible via req.body after using appropriate body-parsing middleware.
- Creating a Resource: POST requests typically result in the creation of a new item or record on the server.
- Status Code: A successful POST request often returns a 201 Created status code, indicating that a new resource has been successfully made.

Example: Creating a New User<br>

Let's imagine we want to create a new user. The client would send a POST request to an endpoint like /users with user data in the request body (e.g., {"name": "Alice", "email": "alice@example.com"}).

```JavaScript

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
// This line is crucial for Express to understand JSON data sent in POST requests.
app.use(express.json());

// In-memory "database" for demonstration purposes
let users = [];
let nextUserId = 1;

// POST request to create a new user
app.post('/users', (req, res) => {
  // The data sent by the client is in req.body
  const newUser = req.body;

  // Basic validation (optional but recommended)
  if (!newUser.name || !newUser.email) {
    // If essential data is missing, send a 400 Bad Request status
    return res.status(400).send({ message: 'Name and email are required to create a user.' });
  }

  // Assign a unique ID and add the user to our "database"
  newUser.id = nextUserId++;
  users.push(newUser);

  // Send a 201 Created status with the newly created user object
  // It's good practice to send back the created resource, including its ID.
  res.status(201).send(newUser);

  console.log('New user created:', newUser);
  console.log('Current users:', users);
});

// GET request to view all users (for verification)
app.get('/users', (req, res) => {
  res.status(200).send(users);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Try sending a POST request to http://localhost:3000/users');
  console.log('Example Body (JSON): {"name": "John Doe", "email": "john@example.com"}');
});
```

### How to Test this POST Request:

You can test this using tools like curl, Postman, Insomnia, or even a simple HTML form.
>It would be better if you use POSTMAN.

Using curl in your terminal:

`Bash`

curl -X POST -H "Content-Type: application/json" -d '{"name": "Jane Doe", "email": "jane@example.com"}' http://localhost:3000/users
Expected Response (Status: 201 Created):

```JSON

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "id": 1
}
```


### Handling GET Requests
- GET requests are used to retrieve data from the server. They are the most common type of HTTP request and are considered safe (they don't change server state) and idempotent (making the same GET request multiple times will yield the same result).

- Key Characteristics:

- No Request Body: GET requests typically do not have a request body. Data is passed via URL route parameters or query parameters.
- Data Retrieval: The server responds with the requested resource(s).
- Common Status Code: A successful GET request usually returns a 200 OK status code. A 404 Not Found is common if the resource doesn't exist.

Code Example: Retrieving Data

Let's retrieve a list of tasks or a specific task by its ID.

```JavaScript

const express = require('express');
const app = express();
const PORT = 3000;

// --- In-memory Data Store ---
// Sample data for demonstration.
let tasks = [
  { id: 1, description: 'Learn Express.js', completed: false },
  { id: 2, description: 'Build a REST API', completed: false },
  { id: 3, description: 'Deploy application', completed: true }
];

// --- Route Handler for GET /tasks ---
// Retrieves all tasks.
app.get('/tasks', (req, res) => {
  // Respond with a 200 OK status and the array of tasks.
  res.status(200).send(tasks);
  console.log('GET /tasks: All tasks retrieved.');
});

// --- Route Handler for GET /tasks/:id ---
// Retrieves a single task by its ID.
app.get('/tasks/:id', (req, res) => {
  // 1. Access Route Parameter:
  //    req.params.id gets the 'id' value from the URL (e.g., '1' from /tasks/1).
  //    Remember route parameters are strings, so convert to number for comparison.
  const taskId = parseInt(req.params.id);

  // 2. Find the Task:
  const task = tasks.find(t => t.id === taskId);

  // 3. Send Response:
  if (task) {
    // If task is found, send 200 OK and the task object.
    res.status(200).send(task);
    console.log(`GET /tasks/${taskId}: Task found.`);
  } else {
    // If task is not found, send 404 Not Found.
    res.status(404).send({ message: 'Task not found.' });
    console.log(`GET /tasks/${taskId}: Task not found.`);
  }
});


// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('\n--- How to Test ---');
  console.log('1. Run this Node.js file.');
  console.log('2. Open your browser or use curl for these URLs:');
  console.log('   - `http://localhost:3000/tasks` (to get all tasks)');
  console.log('   - `http://localhost:3000/tasks/1` (to get task with ID 1)');
  console.log('   - `http://localhost:3000/tasks/99` (to see a "not found" example)');
});
```
### How to Test this GET Request:

Save and Run: Save the code as app.js and run node app.js in your terminal.
>Although using POSTMAN is recommended

Open in Browser/Curl:
To get all tasks: Go to http://localhost:3000/tasks<br>
To get a specific task: Go to http://localhost:3000/tasks/1<br>
To see a "not found" response: Go to http://localhost:3000/tasks/99