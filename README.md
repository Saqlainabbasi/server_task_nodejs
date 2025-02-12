# Product Checkout System

## Overview
This project provides a **reliable and efficient solution** for managing product checkouts. It includes functionalities such as:
- Calculating total prices with discounts
- Handling invalid product IDs

## Application Architecture
- The server is created using **Clean Architecture** principles.
- The application follows a **modular structure** for maintainability and readability.
- Implements **Dependency Injection (DI)** for improved testability and flexibility.
- The application is divided into **multiple layers**:
  - `routes/` - Defines the API routes.
  - `controller/` - Handles incoming requests, validates data, and returns responses.
  - `service/` - Contains business logic.
  - `repository/` - Manages data access logic.
  - `models/` - Defines the data structures.

## Readability
- The code is divided into **small, reusable components**.
- Clear separation of concerns:
  - `routes` for API endpoints
  - `controller` for handling requests
  - `service` for business logic
  - `repository` for database interactions
  - `models` for data structures

## Testing
- The application uses **Jest** for unit and integration testing.
- Core functionalities are covered by tests.
- Tests are structured to be **readable and maintainable**.

### Run Tests:
```sh
npm test
```

## Getting Started
### Prerequisites
- **Node.js** (v14 or later)
- **npm** (Node Package Manager)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Usage
1. Start the server:
   ```sh
   npm start
   ```
2. The server will run on:
   ```sh
   http://localhost:8080
   ```

## Running Tests
To run the tests, execute:
```sh
npm test
```

## Notes
- Built with **Node.js** and **Express.js**.
- Uses **Jest** for testing.
- Follows **Clean Architecture**.
- The database is mocked using a simple **JSON file** for demonstration purposes.
- The **repository layer** is designed to be easily replaceable with a real database in the future.

---
### Contribution
Feel free to submit a pull request or report issues.

🚀 **Happy Coding!**

