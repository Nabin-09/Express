import express from 'express';

const app = express();
app.use(express.json());

// Middleware for logging all requests
const loggingMiddleware = (request, response, next) => {
    console.log(`${request.method} - ${request.url}`);
    next();
}

// app.use(loggingMiddleware); // ✅ this middleware will be used on every route
app.use(loggingMiddleware);

// ✅ Middleware to handle user by ID (currently unused)
const handleUserById = (request, response, next) => {
    const {
        body,
        params: { id },
    } = request;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return response.sendStatus(400); // ❗ If ID is not a number, return 400 Bad Request

    // ❌ FIX: Incorrect method name; use `findIndex`, not `findUserIndex`
    const findUserIndex = mockUsers.findIndex(user => user.id === parsedId);
    if (findUserIndex === -1) return response.sendStatus(404); // User not found

    // If needed later, you can attach found user to request: request.user = mockUsers[findUserIndex];
    next();
};

// ✅ Best Practice: Use environment variable for PORT or fallback to 3000
const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (request, response) => {
    response.status(201).send({ msg: "Nabin is Batman" });
});

// GET all users
app.get('/api/users', (request, response) => {
    response.send(mockUsers);
});

// ❌ Fix: This should be defined — you forgot to declare `mockUsers`
const mockUsers = [
    { id: 1, username: "NabinYou", displayName: "Rizzler" },
    { id: 2, username: "NitinYou", displayName: "hay" },
    { id: 3, username: "RishuYou", displayName: "Hizru" },
    { id: 4, username: "AmitX", displayName: "CodeWizard" },
    { id: 5, username: "ShreyaZ", displayName: "ByteQueen" },
    { id: 6, username: "KunalDev", displayName: "StackBoss" },
    { id: 7, username: "Anjali01", displayName: "BugHunter" },
    { id: 8, username: "RajTheCoder", displayName: "LoopKing" },
    { id: 9, username: "SimranXD", displayName: "PixelWhiz" },
    { id: 10, username: "TanishCool", displayName: "NullPointer" },
    { id: 11, username: "PrernaJS", displayName: "AsyncNinja" },
    { id: 12, username: "DevilBoy", displayName: "Overclock" },
    { id: 13, username: "SanyaBee", displayName: "CodeBee" },
    { id: 14, username: "RahulRX", displayName: "TechStorm" },
    { id: 15, username: "ZoyaMax", displayName: "CyberCat" }
];

// ❌ Fix: Typo in response line: `response / send(200);` → `res.sendStatus(200);`
app.post('/api/users', (request, response) => {
    console.log(request.body);

    const { username, displayName } = request.body;

    if (!username || !displayName) {
        return response.status(400).json({ error: 'Missing fields' });
    }

    const newUser = {
        id: mockUsers[mockUsers.length - 1].id + 1,
        username,
        displayName
    };

    mockUsers.push(newUser);
    return response.status(201).json(newUser);
});

// ✅ GET a specific user by ID
app.get('/api/users/:id', (request, response) => {
    const userID = parseInt(request.params.id);
    if (isNaN(userID)) return response.status(400).json({ error: 'Invalid ID' });

    const user = mockUsers.find(u => u.id === userID);
    if (user) return response.json(user);

    return response.status(404).json({ error: 'User not found' });
});

// Example static product endpoint
app.get('/api/products', (request, response) => {
    response.send([
        { id: 123, name: "Vada Pav", price: 10 }
    ]);
});

app.patch('/api/users/:id' , (request , response) => {
    const {
        body , 
        params : {id}
    } = request;
    const parsedID = parseInt(id);
    if(isNaN(parsedID)) return response.sendStatus(400);
    const findUserIndex = mockUsers.findIndex((user) => {
        user.id === parsedID
    })
    if(findUserIndex === -1) return response.sendStatus(404);
    mockUsers[findUserIndex] = {...mockUsers[findUserIndex] , ...body}
    return response.sendStatus(200);
})


// PUT request — replaces the whole user record
// ✅ Put request edits the whole record,
// ✅ Patch updates it partially,
// ✅ Delete request deletes it
app.put('/api/users/:id', (request, response) => {
    const {
        body,
        params: { id },
    } = request;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return response.status(400);

    const findUserIndex = mockUsers.findIndex(
        (user) => user.id === parsedId
    );

    if (findUserIndex === -1) return response.sendStatus(404);

    mockUsers[findUserIndex] = {
        id: parsedId,
        ...body
    };

    return response.sendStatus(200);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});
