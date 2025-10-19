# Intro-to-Express-Js
# Week 2 Express API Assignment

A RESTful API built with Node.js and Express.js featuring user management, error handling, and custom middleware.

## Features

✅ GET endpoint returning API name  
✅ POST endpoint accepting JSON data  
✅ GET endpoint with URL parameters  
✅ JSON parsing middleware  
✅ Error handling (400 status codes)  
✅ Environment variables (.env)  
✅ Static HTML documentation page  
✅ Custom logging middleware (Bonus)  
✅ Git version control  

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd week2-node-express
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```
PORT=3000
NODE_ENV=development
```

4. Run the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **dotenv** - Environment variable management
- **nodemon** - Development auto-reload (dev dependency)

## Assignment Checklist

- [x] GET / endpoint
- [x] POST /user endpoint with JSON parsing
- [x] GET /user/:id endpoint
- [x] Error handling (400 status)
- [x] .env configuration
- [x] Static HTML page
- [x] Git version control
- [x] Custom logging middleware (Bonus)

## License

MIT
