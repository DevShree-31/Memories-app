# Memories App

## Overview
Memories App is a full-stack application that allows users to create, read, update, and delete personal memories. Users can share their experiences by adding posts with titles, messages, and image files.

## Features
- Create new memory posts
- View existing memories
- Update existing memories
- Delete memories
- Upload image files with each memory

## Tech Stack
- Frontend: React
- Backend: Node.js / Express
- Database: MongoDB
- File Upload: Multer
- State Management: Redux

## Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB

## Installation

### Clone the Repository
```bash
git clone https://github.com/DevShree-31/memories-app.git
cd memories-app
```

### Backend Setup
1. Navigate to backend directory
```bash
cd server
npm install
```

2. Create a `.env` file in the backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

3. Start the backend server
```bash
npm start
```

### Frontend Setup
1. Navigate to frontend directory
```bash
cd ../client
npm install
```

2. Create a `.env` file in the frontend directory:
```
REACT_APP_API_URL=http://localhost:5000/api
```

3. Start the frontend development server
```bash
npm start
```

## Form Fields
The memory creation form includes:
- Title (required)
- Message (required)
- Image File (optional)

## API Endpoints

### Memory Posts
- `GET /api/posts`: Retrieve all memory posts
- `GET /api/posts/:id`:Retrieve single memory detail
- `POST /api/posts`: Create a new memory post
- `PATCH /api/posts/:id`: Update an existing memory post
- `DELETE /api/posts/:id`: Delete a specific memory post


## Contact
Your Name - patelshreyansh376@gmail.com