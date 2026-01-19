
<b>GET Method :</b>
<br>
 This method is used to get the data from server(backend) to fronend.
<br>

<b>POST Method :</b>
<br>
 This method is used to get the data from fronend to server(backend).


# Steps how we work or connect our appliction to mongodb Database

STEP 1: Create Project Folder.
<br>
Create a folder and open it in VS Code.

```bash

//folder name of your project
mongo-app

```
<br>
Open terminal inside this folder.
<br>

STEP 2: Initialize Node Project

```bash

npm init -y

```
<br>

STEP 3: Install Required Packages.

```bash
npm install  mongoose

```
<br>

STEP 4: Create Folder Structure.
<br>
Create these folders & files:
<br>

```bash
mongo-app
│
├── models
│   └── User.js
│
├── config
│   └── db.js
│
└── server.js

```
<br>
STEP 5: Connect MongoDB (db.js)
<br>
//folder/filename :
<br>
config/db.js

```bash
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mydb");
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};

module.exports = connectDB;

```
<br>
Note:
<br>
mydb = database name
<br>
Make sure MongoDB is running (mongod)
<br>

STEP 6: Create Schema (User.js)
<br>
models/User.js
<br>

```bash

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

module.exports = mongoose.model("User", userSchema);

```
<br>
This creates a User collection in MongoDB.
<br><br>
STEP 7: Create Server File (server.js)
<br>
//filename
server.js
<br>

```bash
const express = require("express");
const connectDB = require("./config/db");
const User = require("./models/User");

const app = express();
app.use(express.json());

// connect database
connectDB();

// test route
app.post("/add-user", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User saved in database");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

```
<br>
STEP 8: Start Server
<br>

```bash
node server.js

```
<br>
You should see:
<br>
MongoDB connected
<br>
Server started on port 3000

SIMPLE FLOW (Remember This)

```bash
1. db.js → connects MongoDB
2. User.js → defines schema
3. server.js → uses both

One-Line Summary

Schema = structure of data

Model = used to save/read data

connectDB() = database connection

```
