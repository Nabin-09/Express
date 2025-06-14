# Versions 

## Eg - v 4.18.2

1st Part - Major Release , can have changes in architecture , breaking update.(Must have)
2nd Part - Recommended Bug Fix , Intermediate level changes(Must have)
3rd Part - Minor Fixes (Optional)

# RESTful APIs



##  What is a RESTful API?
A **RESTful API** (Representational State Transfer) is an architectural style for designing networked applications using HTTP methods.

---

##  Key Principles of REST
- **Stateless**: Each request from client to server must contain all information to understand and process the request.
- **Client-Server Architecture**: Separation of concerns (UI vs data storage).
- **Uniform Interface**: Standardized way to interact with resources.
- **Cacheable**: Responses must define themselves as cacheable or not.
- **Layered System**: The client cannot ordinarily tell whether it is connected directly to the end server.

---

##  HTTP Methods Used in REST

| Method | Usage           | Description                    |
|--------|------------------|--------------------------------|
| GET    | `/users`         | Retrieve data (Read)           |
| POST   | `/users`         | Create a new resource (Create) |
| PUT    | `/users/:id`     | Update a resource (Replace)    |
| PATCH  | `/users/:id`     | Update part of a resource      |
| DELETE | `/users/:id`     | Delete a resource (Delete)     |

---

##  REST vs RESTful
- **REST** is a set of constraints.
- **RESTful** is a system that implements REST principles.

---

##  Example RESTful Routes

```http
GET      /api/products           → Get all products
GET      /api/products/:id       → Get a single product by ID
POST     /api/products           → Add a new product
PUT      /api/products/:id       → Replace a product
PATCH    /api/products/:id       → Update specific fields
DELETE   /api/products/:id       → Delete a product
