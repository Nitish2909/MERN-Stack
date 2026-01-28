# dotenv 
dotenv is a Node.js package used to store and load secret or environment-specific values from a file into your app.Think of it like a safe box for things you don't want to hard-code in your code.
<br>
Always Remember don't push dotenv file on github.
<br>
If you want to  use dotenv package:
<br>

```bash

// first install dotenv package using this command 
npm i dotenv

//second make a file that that name is .env

//third work is to import dotenv file in your main file like this and always write top on your main file:
require('dotenv').config()

```
<br>

<b>What dotenv actually does:</b>

```bash

Reads a file named .env

Loads the values into process.env

Keeps secrets & config separate from code

```
<br>

# route() Method 
In Express.js, route() is a method used to handle multiple HTTP methods for the SAME path in one place.
<br>

<b>Example :</b>

```bash

router.route("/")

//It lets you chain methods like .get(), .post(), .put(), .delete() for one route.

```
<br>

# Typical Backend Folder Structure (Express)

```bash
backend/
│
├── controllers/
│   └── userController.js
│
├── routes/
│   └── userRoutes.js
│
├── models/
│   └── userModel.js
│
├── config/
│   └── db.js
│
├── middlewares/
│   └── authMiddleware.js
│
├── server.js

```
<br>

# How request flows

```bash

Client -> Route -> Controller -> Model -> Controller -> Response

```
<br>

Example:

```bash
POST /api/users/login
     |
userRoutes.js
     |
loginUser controller
     |
DB check
     |
JSON response

```

# routes and controllers in folder structure:

<b>1. routes :</b>
<br>
Routes define the URLs (endpoints) of your API and decide which function should run when a request hits that URL.
<br>
Routes should NOT contain business logic.
<br>
It Only:
<br>
URL
<br>
HTTP method
<br>
Controller reference
<br>
Think of routes as a traffic police.
<br>
They receive the request and send it to the right controller.
<br>

Example:

```bash
GET /api/contacts
POST /api/contacts/

```
<br>

<b>What routes do :</b>

```bash

Match HTTP method (GET, POST, PUT, DELETE)

Match URL path

Call the correct controller function

```
<br>

Example:

```bash
const express = require("express");
const router = express.Router();
const { getUsers, loginUser } = require("../controllers/contactController");

router.get("/", getContacts);
router.post("/createContact", createContact );

module.exports = router;

```
<br>

<b> What is Controllers :</b>
<br>
Controllers contain the actual logic of your application.
<br>
Think of controllers as the brain.They decide what to do with the request and what response to send.
<br>

What controllers do:

```bash

Read req.body, req.params, req.query

Talk to database

Apply business logic

Send response (res.json(), res.status())

```
<br>

Example:

```bash
//controllers/userController.js


const getUsers = (req, res) => {
    res.json({ message: "All users fetched" });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;
    res.json({ message: "User logged in" });
};

module.exports = { getUsers, loginUser };

```
<br>

# Most Important Status Code :

```bash

 Scenario              Status Code 

 Successful GET        200         
 Successful POST       201         
 Invalid request data  400         
 Not logged in         401         
 No permission         403         
 Data not found        404         
 Duplicate entry       409         
 Validation error      422         
 Server crash          500         

 ```
 <br>

 # Express Request (req) Object :
req = request sent by client (browser / frontend / Postman)
It contains all data the client sends to the backend.
<br>

<b>req.body :</b>
<br>
req.body contains the data sent by the client in the request body
Mostly used with POST, PUT, PATCH requests.
<br>
req.body is used for :  Login ,Signup , Create record  , Update record
<br>

Important : You must use middleware 
```bash

//If req.body is undefined, you forgot this :

app.use(express.json());

//Without it, Express cannot read JSON data.
```
<br>

Example (JSON Body):
<br>

Client sends:

```bash
{
  "name": "Nitish",
  "email": "nitish@gmail.com",
  "password": "123456"
}

```
<br>

Backend (Express):

```bash
app.post("/register", (req, res) => {
  console.log(req.body);
});

```
<br>

Output:

```bash

{
  name: "Nitish",
  email: "nitish@gmail.com",
  password: "123456"
}
```
<br>

<b>req.query </b> -> This is a URL query string
<br>
Data after ? in URL
<br>
Use case:
<br>
Filtering
<br>
Sorting
<br>
Pagination
<br>
Search
<br>

Example:

```bash
//Example URL
GET /products?category=mobile&price=50000

//Code
console.log(req.query);

//Output
{
  category: "mobile",
  price: "50000"
}
```
<br>

<b>req.params </b>-> URL path parameters.
<br>
Data coming from dynamic URL

Example:

```bash

//Example URL
GET /users/10

//Route
app.get("/users/:id", (req, res) => {
  console.log(req.params);
});

//Output

{ id: "10"}

```
