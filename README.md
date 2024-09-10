# MarketHive


## Description


This project is a comprehensive application for managing products and users. It includes features for user authentication, product management, and supports soft deletion of products. Key functionalities include:


- **User Authentication**: Secure login and registration with JWT tokens.

- **Product Management**: Create, update, and delete products.

- **Soft Deletion**: Products can be marked as deleted without being permanently removed from the database.

- **Product Retrieval**: Fetch all products associated with a user, excluding those marked as deleted.


## Features


- **User Authentication**: Register, login, and manage user sessions.

- **Product CRUD Operations**: Create, read, update, and delete products.

- **Soft Deletion**: Mark products as deleted without actual database removal.

- **Paranoid Mode**: Utilizes Sequelize's paranoid mode to handle soft deletions.

- **Data Validation**: Input validation for product and user fields.


## Technologies Used


- **Backend**: Node.js, Express

- **Database**: PostgreSQL with Sequelize ORM

- **Authentication**: JWT for token-based authentication

- **Validation**: Custom validation and error handling


## Setup and Installation


1. **Clone the Repository**


   ```bash

   git clone https://github.com/yourusername/yourproject.git

   cd yourproject

    ```

Using npm:


```bash

npm install

```


2. **Configure Environment Variables**


    Create a .env file in the root directory and add the following environment variables:


    env


    SERVER_PORT=3000


    # Database Configuration

    DB_USERNAME=your_database_username

    DB_PASSWORD=your_database_password

    DB_DATABASE=your_database_name

    DB_HOST=your_database_host

    DB_PORT=5432


    # JWT Configuration

    JWT_SECRET_KEY=your_jwt_secret_key

    JWT_EXPIRES_IN=90d


    # Environment

    NODE_ENV=development


    # Admin User Configuration

    ADMIN_USERNAME=your_admin_username

    ADMIN_EMAIL=your_admin_email

    ADMIN_PASSWORD=your_admin_password


3. **Run Migrations**


To set up the database schema, run:


```bash

npm run migrate


Seed the Database


// To seed the database with initial data, run:

```

```bash

npm run seed


Start the Server


//To start the server, run:

```

# **Start the Project**

   ``` bash

        npm start

        The server will be running on http://localhost:3000.

   ```

# API Endpoints

- **POST** [http://localhost:3000/auth/signUp](http://localhost:3000/auth/signUp)  
  **Description**: Register a new user and receive a JWT token.  
  **Request Body**:
  - `username`: string
  - `role`: "admin" | "user" | "seller" (optional)
  - `email`: string
  - `password`: string

- **POST** [http://localhost:3000/auth/signIn](http://localhost:3000/auth/signIn)  
  **Description**: Login and receive a JWT token.  
  **Request Body**:
  - `usernameOrEmail`: string
  - `password`: string

- **POST** [http://localhost:3000/project/add-project](http://localhost:3000/project/add-project)  
  **Description**: Create a new product. User must be authenticated and authorized.  
  **Request Body**:
  - `createdBy`: number
  - `title`: string
  - `description`: string
  - `shortDescription`: string
  - `isFeatured`: boolean
  - `productImage`: array of strings
  - `productUrl`: string
  - `tags`: array of strings
  - `category`: array of strings
  - `price`: number

- **GET** [http://localhost:3000/project/get-project/:id](http://localhost:3000/project/get-project/:id)  
  **Description**: Return a specific product by ID.  
  **Request Parameters**:
  - `id`: The ID of the product to retrieve.

- **GET** [http://localhost:3000/project/get-user-projects](http://localhost:3000/project/get-user-projects)  
  **Description**: Return all projects for the authenticated user. User must be authenticated.

- **DELETE** [http://localhost:3000/project/delete-user-project/:id](http://localhost:3000/project/delete-user-project/:id)  
  **Description**: Soft delete a specific product by ID. User must be authenticated and authorized.  
  **Request Parameters**:
  - `id`: The ID of the product to delete.

- **PUT** [http://localhost:3000/project/update-user-project/:id](http://localhost:3000/project/update-user-project/:id)  
  **Description**: Update an existing product by ID. User must be authenticated and authorized.  
  **Request Body**:
  - `createdBy`: number (optional)
  - `title`: string (optional)
  - `description`: string (optional)
  - `shortDescription`: string (optional)
  - `isFeatured`: boolean (optional)
  - `productImage`: array of strings (optional)
  - `productUrl`: string (optional)
  - `tags`: array of strings (optional)
  - `category`: array of strings (optional)
  - `price`: number (optional)
  **Request Parameters**:
  - `id`: The ID of the product to update.

    
