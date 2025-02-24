# LbMS_Backend

The backend repository for **LbMS_Backend** project, responsible for managing various backend operations such as user authentication, inventory management, and API integrations. This project is built using modern web development tools and frameworks for a scalable and efficient backend.

## Features
- **User Authentication**: JWT-based authentication with role-based authorization.
- **CRUD Operations**: Complete management of inventory items.
- **MongoDB Integration**: NoSQL database for storing and managing application data.
- **RESTful API**: Follows REST conventions for building scalable APIs.
- **Error Handling**: Custom error handling for API responses.
- **Environment Configuration**: Configurable using environment variables for easy deployment.

## Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Baladattu/LbMS_Backend.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd LbMS_Backend
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables**:
   - Create a `.env` file in the root directory using the `.env.sample` file as a template.
   - Fill in the required fields (e.g., `DATABASE_URL`, `JWT_SECRET`, etc.).

5. **Start the server**:
   ```bash
   npm start
   ```

6. **Test the server**:
   By default, the server will run on `http://localhost:7000`. You can test the endpoints using tools like Postman or curl.

## API Endpoints

### Authentication
- `POST /api/user/signup`: Register a new user
- `POST /api/user/login`: Login and get a JWT token

### Inventory Management
- `GET /inventory`: Get a list of inventory items
- `POST /inventory`: Add a new item to the inventory
- `PUT /inventory/:id`: Update an existing item
- `DELETE /inventory/:id`: Delete an item

### Example Request
**POST /api/user/signup**
```json
{
  "username": "exampleUser",
  "password": "password123"
}
```


Ensure that MongoDB is running before testing.

## Contribution Guidelines
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new feature branch.
3. Submit a pull request after testing your changes.

## License
This project is licensed under the MIT License.

---
