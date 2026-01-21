
<b>For design frontend we use following :</b>
<br>
tailwind + flowbite
<br>

In this project we use this two by their CDN link 
<br>

<b>Tailwind CDN</b>

```bash

 <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

 // used in head tag in html file
```
<br>

<b>flowbite CDN</b>

```bash

<head>
    <link href="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.css" rel="stylesheet" />
</head>

<body>
    <script src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js"></script>

</body>

```

# Express validator :
Express Validator is used to validate and sanitize user input (like form data) in an Express backend.
<br>
It helps prevent invalid data, empty fields, wrong email format, weak passwords, etc.
<br>
In simple term Express Validator is a middleware that is used in Express.js to check and validate user input (like form or API data) before processing it.
<br>

<b>Install express-validator :</b>
<br>

<b>Install express-validator :</b>

```bash
npm install express-validator

```

<b>Here is a small example</b>

```bash
const { body, validationResult } = require("express-validator");

app.post(
  "/login",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("Login successful");
  }
);

```

# what is .env file 
A .env file is used to store environment variables like database URLs, API keys, passwords, and ports outside your code.
<br>
This is very important for production and security.
<br>

<b>Why do we need .env?</b>
<br>

Without .env file (This is not a good practice):

```bash
mongoose.connect("mongodb+srv://user:pass@cluster.mongodb.net/db");

```
<br>

With .env(This is best practice and useful in production)

```bash
mongoose.connect(process.env.MONGO_URI);
```
<br>

<b>What is inside .env file :</b>

```bash
PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/myDB
JWT_SECRET=mySecretKey
NODE_ENV=production

etc.

```