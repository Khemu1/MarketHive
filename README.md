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

4. **Start the Project**

   ``` bash

        npm start

        The server will be running on http://localhost:3000.

    ```

# API Endpoints


    POST /api/register: Register a new user.

    POST /api/login: Login and receive a JWT token.

    GET /api/products: Retrieve all products for the authenticated user.

    POST /api/products: Create a new product.

    PUT /api/products/

    : Update an existing product.

    DELETE /api/products/

    : Soft delete a product.


    