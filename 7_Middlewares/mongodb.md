---

## 🍃 MongoDB Basics

MongoDB is a **NoSQL** document-based database that stores data in **BSON (Binary JSON)** format. It’s designed for scalability, flexibility, and high availability.

---

### 🔹 Key Concepts

#### 📂 Database
- A physical container for collections.
- One MongoDB server can hold multiple databases.

#### 📁 Collection
- A group of related documents.
- Analogous to a table in relational databases.
- Collections do **not enforce a schema** by default.

#### 📄 Document
- The basic unit of data in MongoDB (similar to a row).
- Stored in BSON format, typically looks like JSON.

```json
{
  "_id": ObjectId("60a7c20f8f0d8b22f0f7b6a4"),
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "isVerified": true
}
```

---

### 🔹 Common MongoDB Commands

#### ✅ Database Operations

```js
show dbs                // List all databases
use myDB                // Switch to or create a database
db.dropDatabase()       // Delete current database
```

#### 📁 Collection Operations

```js
show collections                    // List collections in current DB
db.createCollection('users')       // Create a collection
db.users.drop()                    // Drop a collection
```

#### 📄 Document Operations

```js
// Insert
db.users.insertOne({ name: "Alice", age: 25 })
db.users.insertMany([{ name: "Bob" }, { name: "Carol" }])

// Find
db.users.find()                            // All documents
db.users.find({ name: "Alice" })           // Filter by name
db.users.findOne({ age: { $gt: 20 } })     // Find one with condition

// Update
db.users.updateOne({ name: "Alice" }, { $set: { age: 26 } })
db.users.updateMany({}, { $inc: { age: 1 } })

// Delete
db.users.deleteOne({ name: "Alice" })
db.users.deleteMany({ age: { $lt: 18 } })
```

---

### 🔹 Operators & Queries

| Operator | Description             | Example                                   |
|----------|-------------------------|-------------------------------------------|
| `$gt`    | Greater than            | `{ age: { $gt: 25 } }`                    |
| `$lt`    | Less than               | `{ age: { $lt: 30 } }`                    |
| `$in`    | Matches any in array    | `{ name: { $in: ["Alice", "Bob"] } }`    |
| `$and`   | Logical AND             | `{ $and: [{ age: 20 }, { name: "Bob" }]}` |
| `$or`    | Logical OR              | `{ $or: [{ age: 20 }, { name: "Bob" }]}`  |

---

### 🔹 Indexes

Used to speed up search queries.

```js
db.users.createIndex({ name: 1 })  // 1 for ascending
```

---

### 🔹 Aggregation (Pipeline)

Used for complex data processing and transformation.

```js
db.users.aggregate([
  { $match: { age: { $gte: 25 } } },
  { $group: { _id: "$isVerified", count: { $sum: 1 } } }
])
```


