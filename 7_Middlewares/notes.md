# 🚀 Express Middleware Notes

## 🔹 What is Middleware?
Middleware functions in Express are **functions that execute during the request-response cycle**. They can:

- Execute any code
- Modify the `req` and `res` objects
- End the request-response cycle
- Call the next middleware in the stack

---

## 🔹 Syntax

```js
app.use((req, res, next) => {
  // logic
  next(); // passes control to the next middleware
});
```

---

## 🔹 Types of Middleware

### 1. Application-Level Middleware
```js
app.use((req, res, next) => {
  console.log('Request received at:', Date.now());
  next();
});
```

---

### 2. Route-Level Middleware
```js
const logMiddleware = (req, res, next) => {
  console.log(`Route accessed: ${req.originalUrl}`);
  next();
};

app.get('/users', logMiddleware, (req, res) => {
  res.send('User List');
});
```

---

### 3. Built-in Middleware
> Express has some built-in middleware:

- `express.json()` – parses incoming JSON requests
- `express.urlencoded()` – parses URL-encoded data

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

---

### 4. Third-Party Middleware
> Installed via npm (e.g., `morgan`, `cors`)

```bash
npm install morgan cors
```

```js
const morgan = require('morgan');
const cors = require('cors');

app.use(morgan('dev'));
app.use(cors());
```

---

### 5. Error-Handling Middleware
Must have **four** parameters: `(err, req, res, next)`

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

---

## 🔹 Order Matters!
Middleware is executed in the **order it is defined**.

```js
app.use(middleware1);
app.use(middleware2);
// Route handler
app.get('/', handler);
```

---

## 🔹 Example Use-Cases
- Logging
- Authentication
- Error handling
- Parsing JSON or form data
- Setting headers (CORS, Content-Type)

---

## 🔹 Custom Middleware Example

```js
const authMiddleware = (req, res, next) => {
  if (req.headers.authorization === 'secret-token') {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

app.get('/protected', authMiddleware, (req, res) => {
  res.send('Protected content');
});
```

---

## ✅ Summary

- Middleware = Functions that run between request and response
- `next()` passes control to the next middleware
- Use for auth, logging, parsing, error handling
- Types: app-level, route-level, built-in, third-party, error-handling
