# REST API for managing expenses

## Features

- Swagger UI documentaion
- JWT Authentication
- CRUD operations
- Filtering and sorting
- Paginated Responses
- Request data and parameters validation

## Tech Stack

- Express.js

- PostgrSQL Database

- Prisma ORM

- Docker

- Swagger UI

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`: development or production

`PORT`: Port number(optional). Default value is 3000

`JWT_SECRET`: A secret string for JWT

`JWT_EXPIRES_IN`: JWT lifetime. For example, '1d' is 1 day, '2w' is 2 weeks, '4h' is 4 hours, and so on.

`DATABASE_URL`: Databse URL

`PRODUCTION_URL`: Apps production url. Required in production environment.

## Run Locally

#### 1. Clone the project

```bash
  git clone https://github.com/helios274/Expense-Management-API
```

#### 2. Go to the project directory

```bash
  cd Expense-Management-API
```

#### 3. Install dependencies

```bash
  npm install
```

#### 4. Prisma migration

- For development server

```bash
  npx prisma migrate dev --schema=./src/prisma/schema.prisma
```

- For production server

```bash
  npx prisma generate --schema=./src/prisma/schema.prisma
```

```bash
  npx prisma migrate deploy --schema=./src/prisma/schema.prisma
```

#### 5. Run server

- For development server

```bash
  npm run start:dev
```

- For production server

```bash
  npm run start
```
