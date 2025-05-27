# Project Manager API

A RESTful API for managing projects and their associated tasks. Built with TypeScript, Express, and MongoDB using Mongoose.

## Features

- Create, update, retrieve, and delete projects
- Create, update, retrieve, and delete tasks within projects
- Update the status of tasks
- Middleware for resource validation and ownership
- Express-validator for input validation

## Technologies Used

- TypeScript
- Node.js
- Express
- MongoDB + Mongoose
- express-validator

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone https://github.com/davidmartisangu/11_Project_FullStack.git
cd project-manager-api
```

2. Install dependencies:

```bash
npm install
```

3. Set environment variables (if needed) and start the server:

```bash
npm run dev
```

## Project Structure

```
src/
├── controllers/
│   ├── ProjectController.ts
│   └── TaskController.ts
├── middlewares/
│   ├── handleInputError.ts
│   ├── projectMiddleware.ts
│   └── taskMiddleware.ts
├── models/
│   ├── Project.ts
│   └── Tasks.ts
├── routes/
│   ├── projectRoutes.ts
│   └── taskRoutes.ts
└── index.ts
```

## Endpoints

### Project Endpoints

- `POST /api/projects` — Create a project
- `GET /api/projects` — Get all projects
- `GET /api/projects/:id` — Get a project by ID
- `PUT /api/projects/:id` — Update a project by ID
- `DELETE /api/projects/:id` — Delete a project by ID

### Task Endpoints

- `POST /api/projects/:projectId/tasks` — Create a task for a project
- `GET /api/projects/:projectId/tasks` — Get all tasks for a project
- `GET /api/projects/:projectId/tasks/:taskId` — Get a specific task
- `PUT /api/projects/:projectId/tasks/:taskId` — Update a task
- `DELETE /api/projects/:projectId/tasks/:taskId` — Delete a task
- `PATCH /api/projects/:projectId/tasks/:taskId/status` — Update task status

## License

This project is licensed under the MIT License.
