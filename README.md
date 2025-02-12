# Project Title

## Overview

This project is designed to provide a reliable and efficient solution for managing product checkouts. It includes functionalities such as calculating total prices with discounts and handling invalid product IDs.

### 1. Correctness

- Does the solution meet the outlined requirements?
- While edge cases are not the focus, the core functionality should be reliable.

### 2. Application Architecture

- Server is created uisng the clean architecture?
- The application is structured in a way that is easy to understand and maintain.
- Used the Dependency Injection pattern to make the application more testable and flexible.
- By using the Dependency Injection pattern, the application is not tightly coupled to the implementation of the services.
- For better code readability and maintainability, the application is divided into multiple layers: `routes`,`controller`, `service`,`models`, and `repository`.

### 3. Readability

- The code is divided into small components.
- The `routes` is responsible for defining the routes of the application.
- The `controller` layer is responsible for handling incoming requests,validating the request and returning responses.
- The `service` layer is responsible for handling business logic.
- The `repository` layer is responsible for handling data access logic.
- The `models` is responsible for defining the data structure of the application.

### 4. Testing

- The application is tested using the Jest framework.
- The main functionalities of the application are tested.
- The tests are written in a way that is easy to understand and maintain.
- Run `npm test` to start the test.

## Getting Started

Provide instructions on how to set up and run the project locally.

### Prerequisites

- Node.js
- npm

### Installation

- Clone the repository
- Run `npm install` to install the dependencies

### Usage

- Run `npm start` to start the server
- The server will be running on `http://localhost:8080`

## Running Tests

- Run `npm test` to start the test.

## Notes

- The application is built using Node.js and Express.js.
- The application is tested using the Jest framework.
- The application is structured using the clean architecture.
- For `database` mock, I have used a simple JSON file.
- The `repository` layer is responsible for handling data access logic. It is designed to be easily replaceable with a real database.
