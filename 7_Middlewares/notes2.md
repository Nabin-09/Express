
## 📌 Headers

HTTP headers allow the client and server to pass additional information with the request or the response.

### 🔹 Request Headers
These are sent by the client (browser or tool) to provide context.

- `Host`: Specifies the domain name of the server.
- `User-Agent`: Identifies the client software making the request.
- `Accept`: Specifies acceptable content types (e.g., `application/json`).
- `Authorization`: Used to pass credentials (e.g., `Bearer <token>`).
- `Content-Type`: Indicates the media type of the body (e.g., `application/json`).

### 🔹 Response Headers
These are sent by the server back to the client.

- `Content-Type`: Tells the client the format of the returned data.
- `Set-Cookie`: Sets cookies in the user's browser.
- `Cache-Control`: Instructs how the response should be cached.
- `Access-Control-Allow-Origin`: Used in CORS to specify allowed origins.
- `Content-Length`: Indicates the size of the response body in bytes.

---

## 📌 Status Codes

HTTP status codes are issued by a server in response to a client's request.

### ✅ 1xx – Informational
- `100 Continue`: Request received, client should continue sending.
- `101 Switching Protocols`: Switching to a new protocol (e.g., WebSockets).

### 🟢 2xx – Success
- `200 OK`: Standard successful response.
- `201 Created`: Resource successfully created.
- `204 No Content`: Successful but no content to send back.

### 🟡 3xx – Redirection
- `301 Moved Permanently`: Resource has been moved permanently.
- `302 Found`: Temporary redirect.
- `304 Not Modified`: Cached version can be used.

### 🔴 4xx – Client Errors
- `400 Bad Request`: Malformed syntax or invalid request.
- `401 Unauthorized`: Authentication required.
- `403 Forbidden`: Client is not allowed access.
- `404 Not Found`: Resource not found.
- `429 Too Many Requests`: Rate limiting in effect.

### 🔴 5xx – Server Errors
- `500 Internal Server Error`: Generic server error.
- `502 Bad Gateway`: Received invalid response from the upstream server.
- `503 Service Unavailable`: Server is down or overloaded.
- `504 Gateway Timeout`: Upstream server failed to respond in time.

---

> 💡 **Tip:** Use browser DevTools → Network tab to inspect real-time headers and status codes.

