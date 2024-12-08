# Assessment Project: Full-Stack Notes App

## Project Overview

This project demonstrates a full-stack implementation of a Notes Management Application. It is built using the following technologies:

- **Backend**: NestJS
- **Frontend**: Angular
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Monorepo**: Managed using Nx for efficient development.

The application provides features for user authentication (signup, login, logout) and basic CRUD operations for managing notes.

## Features

1. **User Authentication**

   - **Signup**: New users can register with a username and password.
   - **Login**: Registered users can log in to access their notes.
   - **Logout**: Users can log out, and their session will be invalidated.

2. **Notes Management**

   - Create, view, and list personal notes.
   - Only authenticated users can access and manage their notes.

## Project Structure

### Backend (NestJS)

- **Controllers**: Handles HTTP requests (e.g., `auth.controller.ts`, `notes.controller.ts`).
- **Services**: Encapsulates business logic (e.g., `auth.service.ts`, `notes.service.ts`).
- **Modules**: Organizes the app into cohesive blocks (e.g., `AuthModule`, `NotesModule`).
- **Database**: Uses Mongoose to interact with MongoDB.
- **Authentication**: Implements JWT for secure authentication.
- **Password Security**: Passwords are securely hashed using bcrypt before storage.

### Frontend (Angular)

- **Components**:
  - `LoginComponent`: Handles user login.
  - `SignupComponent`: Handles user registration.
  - `NotesComponent`: Manages the creation and display of notes.
  - `LayoutComponent`: Provides the navigation and layout structure.
  - `DashboardComponent`: Serves as a placeholder for routing and future enhancements.
- **Routing**: Configured using `app.routes.ts` for navigation.

## How to Run

### Prerequisites

- Node.js (v16 or higher)
- MongoDB instance running locally or on a server

### Setup

1. **Clone the Repository**

   ```bash
   git clone [repository-url]
   cd [repository-folder]
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   - Start MongoDB.
   - From the parent folder, run the following commands in separate terminals:
     ```bash
     nx serve backend
     ```
     ```bash
     nx serve frontend
     ```

4. **Access the App**

   - Frontend: Open [http://localhost:4200](http://localhost:4200)
   - Backend: Open [http://localhost:3000](http://localhost:3000)

## API Endpoints

### Auth

- **POST** `/signup`: Registers a new user.
- **POST** `/login`: Authenticates a user and returns a JWT.

### Notes

- **GET** `/notes`: Retrieves a list of notes for the authenticated user.
- **POST** `/createNote`: Creates a new note.
- JWT tokens are required for all protected routes.

## Demo Video

The walkthrough video for the application, highlighting its features and functionality, can be accessed here: [The Demo/walkthrough](https://drive.google.com/file/d/1rDrUy57yxAVxLz2jxZtqqUBxwtlA42eW/view?usp=drive_link).

## Future Improvements

- Implement NgRx for enhanced frontend state management.
- Add validation messages on the frontend to assist users in signing up and signing in smoothly.
- Implement update and delete functionalities for notes.
- Enhance security by using environment-based configurations.

---

If you have any questions about the application, feel free to reach out!

