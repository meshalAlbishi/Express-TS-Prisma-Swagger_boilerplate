# Express-TypeScript-Prisma-Swagger Boilerplate

This boilerplate project provides a foundation for building a Node.js REST API using Express.js, TypeScript, Prisma ORM, and Swagger for API documentation.

   Please feel free to reach me for any improvements :)
## Table of Contents

- [Overview](#overview)
- [Why Use This Boilerplate](#why-use-this-boilerplate)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts), not completed yet
- [Environment Variables](#environment-variables), not completed yet
- [CI/CD with GitHub Actions](#cicd-with-github-actions), not completed yet
- [Swagger Documentation](#swagger-documentation), not completed yet
- [Prisma](#prisma), not completed yet
- [License](#license)

## Overview

This project is a boilerplate designed for backend applications that need a robust, typed API service using:
- **Express.js** for setting up the server and routing,
- **TypeScript** for static typing,
- **Prisma** as the ORM for database interactions,
- **Swagger** to generate interactive API documentation.

## Why Use This Boilerplate

### Purpose of Creation


### Benefits of Using This Boilerplate
#### None, just to save my time in the next project.. or just read the generated benefits from ChatGPT:

- **Time-Saving**: Provides an out-of-the-box project structure and configurations, saving you the effort of setting up a new project from scratch.
- **Consistency**: Enforces consistent coding practices through TypeScript and ESLint.
- **Scalability**: Built with a modular structure that is easy to scale as your application grows.
- **Type Safety**: Ensures type safety across the project, reducing runtime errors and enhancing developer productivity.
- **Prisma Integration**: Simplifies database management with a modern ORM that supports type-safe database interactions.
- **Documentation**: Includes Swagger setup for interactive API documentation, making it easier for teams and external developers to understand and test your API.
- **CI/CD Ready**: Comes with GitHub Actions configured for continuous integration, ensuring code quality and facilitating smoother deployments.

## Features

- **Comprehensive modular structure** for scalable code organization.
- **Automatic database migrations** and seed data setup using Prisma.
- **Swagger documentation** for easy API reference and testing.
- **Type safety** and IntelliSense support with TypeScript.
- **GitHub Actions** for automated testing and deployment.

## Tech Stack

- **Express.js**: Lightweight web application framework for handling HTTP requests.
- **TypeScript**: Ensures type safety and improves code readability and maintainability.
- **Prisma**: Type-safe ORM for efficient database access and migrations.
- **Swagger (OpenAPI)**: Generates interactive API documentation.
- **GitHub Actions**: For CI/CD workflows.

## Project Structure
### why I'm using this structure? It's suit my current needs. It will be updated if required later.
```plaintext
.
├── .github
│   └── workflows
│       └── ci.yml           # GitHub Actions workflow for CI/CD
├── src
│   ├── api
│   │   └── v1
│   │       ├── controllers  # Express route controllers
│   │       ├── middlewares  # Custom middlewares
│   │       ├── prisma       # Prisma schema and generated client
│   │       ├── routes       # Application routes
│   │       ├── services     # Business logic and services
│   │       ├── types        # TypeScript type definitions
│   │       └── index.ts     # Entry point for v1 API version
│   ├── config               # Configuration files (e.g., environment setup)
│   └── utils                # Utility functions
├── .env.example             # Environment variable examples
├── prisma
│   └── schema.prisma        # Prisma schema
├── swagger.yaml             # Swagger API documentation
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```
## Getting Started
### Prerequisites
- Node.js >= 14.x
- Prisma CLI (Install globally)
- Docker (Optional for setting up the database)

### Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/your-username/express-ts-prisma-swagger-boilerplate.git](https://github.com/your-username/express-ts-prisma-swagger-boilerplate.git)
   cd express-ts-prisma-swagger-boilerplate
   ```

2. Install dependencies:

   ```bash
    npm install
   ```
   
3. Set up environment variables:
  - Copy ```.env.example``` to ```.env``` and update values as needed (refer to ```.env.example``` for a complete list).

4. Initialize the database:
  - Run Prisma migrations to create the database schema:
   ```bash
    npx prisma migrate dev
   ```
5. Start the application:

   ```bash
    npm run dev
   ```
   - The server will start on http://localhost:3000
  
## License
- This project is licensed under the MIT License.
