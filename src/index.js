import express from 'express';
import { query, body, validationResult , checkSchema } from 'express-validator';
import { createUserSchema  } from './validationSchema.js'

const app = express();
app.use(express.json());

// ===================== MIDDLEWARE =====================

// Logs every request to console
const loggingMiddleware = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};
app.use(loggingMiddleware);

// Middleware to validate and find user by ID
const handleUserById = (req, res, next) => {
  const { id } = req.params;
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) return res.status(400).json({ error: 'Invalid ID format' });

  const findUserIndex = mockUsers.findIndex(user => user.id === parsedId);
  if (findUserIndex === -1) return res.status(404).json({ error: 'User not found' });

  req.userIndex = findUserIndex; // Optional: attach index for later use
  next();
};

// ===================== MOCK DATA =====================

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

// ===================== ROUTES =====================

// Home route
app.get('/', (req, res) => {
  res.status(200).json({ msg: "Nabin is Batman" });
});

// Get all users — with optional query param `filter`
app.get('/api/users',
  query('filter')
    .optional()
    .isString()
    .isLength({ min: 3, max: 15 })
    .withMessage('Filter must be 3 to 15 characters long'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const filter = req.query.filter;
    if (filter) {
      const filteredUsers = mockUsers.filter(user =>
        user.username.toLowerCase().includes(filter.toLowerCase())
      );
      return res.json(filteredUsers);
    }

    res.json(mockUsers);
  }
);

// Create a new user
app.post('/api/users',checkSchema(createUserSchema),
//   body('username')
//     .notEmpty().withMessage('Username is required')
//     .isLength({ min: 3, max: 32 }).withMessage('Username must be 3-32 characters long')
//     .isString(),
//   body('displayName')
//     .notEmpty().withMessage('Display Name is required')
//     .isString(),  this is the non conventional way to checkSchema
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { username, displayName } = req.body;

    const newUser = {
      id: mockUsers[mockUsers.length - 1].id + 1,
      username,
      displayName
    };

    mockUsers.push(newUser);
    res.status(201).json(newUser);
  }
);

// Get specific user by ID
app.get('/api/user/:id', handleUserById, (req, res) => {
  const user = mockUsers[req.userIndex];
  res.json(user);
});

// ===================== SERVER =====================

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
