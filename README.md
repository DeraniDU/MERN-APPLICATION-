# Full Stack CRUD Application (MERN Stack)

This is a full-stack **MERN stack** application (MongoDB, Express, React, Node.js) that implements basic **CRUD operations** (Create, Read, Update, Delete) on records. It is designed to manage and display data in an easy-to-use, responsive web interface.

## Features

- **Create**: Add new records.
- **Read**: View a list of all records or a single record.
- **Update**: Edit existing records.
- **Delete**: Remove records.
- **Responsive design** using **React** and **Bootstrap** for a clean, mobile-friendly UI.

---

## Architecture Overview

### 1. **Frontend (React)**

- **React** is used for building the user interface. React allows for the development of single-page applications (SPA) by updating the DOM efficiently when data changes.
- The app follows a **component-based architecture** where UI elements are divided into smaller reusable components such as `CreatePost`, `EditPost`, `Home`, and `PostDetails`.
- **React Router** is used to manage navigation between pages (Home, Add Post, Edit Post, Post Details).
- **Axios** is used for making HTTP requests to the backend (CRUD operations).

### 2. **Backend (Node.js + Express)**

- The backend is built using **Node.js** and **Express**.
- **Express** provides a minimal and flexible Node.js web application framework for creating API routes.
- The backend handles the logic for CRUD operations and interacts with the **MongoDB** database using **Mongoose**.
- The backend exposes RESTful API endpoints to manage records.

### 3. **Database (MongoDB)**

- **MongoDB** is used as the database to store data in JSON-like format.
- The database interacts with the backend via **Mongoose** to manage the data through schema validation.
- The schema defines the structure of the data (e.g., Post structure with fields: `title`, `description`, `category`).

### 4. **Design Patterns**

The application uses several design patterns to structure and maintain the codebase effectively:

#### 4.1 **MVC (Model-View-Controller) Pattern**
The application follows the **MVC** design pattern, which separates the application into three interconnected components:
  
- **Model**: Represents the data and business logic of the application. In the backend, this is implemented using Mongoose schemas and models.
  - Example: `Post.js` (in the backend `models/` directory) defines the structure of the post data.

- **View**: Represents the user interface (UI). In this application, React components serve as the view that displays the data to the user.
  - Example: Components like `Home.js`, `CreatePost.js`, `PostDetails.js`.

- **Controller**: Handles the requests and responses. In the backend, Express routes act as controllers, receiving the request, interacting with the models, and returning the appropriate response to the frontend.
  - Example: Routes like `/posts`, `/post/save` handle CRUD operations on the posts.

#### 4.2 **RESTful API Design**
The backend follows **RESTful** principles for creating APIs, ensuring that the application uses standardized HTTP methods for CRUD operations:
  
- **GET**: Retrieve data (e.g., Get all posts or a single post).
- **POST**: Create new data (e.g., Add a new post).
- **PUT**: Update existing data (e.g., Edit a post).
- **DELETE**: Delete data (e.g., Remove a post).

#### 4.3 **Single Responsibility Principle (SRP)**
Each component or module in the application follows the **Single Responsibility Principle**, where each module (e.g., React component, Express route, etc.) has only one responsibility.

- Example: The `CreatePost` component only handles the form for creating new posts, while the `PostController` in the backend is responsible for managing database interactions.

---

## Frontend (React) Flow

1. **User Navigates to Create Post Page**:
   - User accesses `/add` route.
   - The `CreatePost` component is rendered with a form to input title, description, and category.

2. **Form Submission**:
   - The form sends a `POST` request to the backend's `/post/save` endpoint using **Axios**.
   - The backend receives the data, saves it to MongoDB, and responds with a success message.

3. **Success Handling**:
   - If the post is saved successfully, the `CreatePost` component resets the form and redirects the user to the `Home` page using **React Router**.
   - If the operation fails, an error message is shown.

---

## Backend (Node.js + Express) Flow

1. **Handle Post Request**:
   - When the frontend sends a request to `/post/save`, the backend controller (`PostController`) receives the request.
   - The data is validated, and a new `Post` is created and saved to the database.

2. **Database Interaction**:
   - Mongoose is used to interact with MongoDB. The post data is saved in the `posts` collection.
   - Mongoose validates the data before saving it to ensure it follows the schema.

3. **Response**:
   - Upon successful save, the backend responds with a success message and the newly created post data.
   - If any errors occur, a failure message with details is returned to the frontend.

---

## Technologies Used

- **Frontend**:
  - **React.js** – For building the user interface.
  - **React Router** – For navigation and routing between pages.
  - **Axios** – For making HTTP requests to the backend.
  - **Bootstrap** – For responsive UI components and styling.

- **Backend**:
  - **Node.js** – For the server-side runtime.
  - **Express.js** – For the backend API and routing.
  - **MongoDB** – For storing and managing data.
  - **Mongoose** – For MongoDB object modeling and schema validation.

- **Development Tools**:
  - **Webpack** – For bundling the frontend assets.
  - **Babel** – For transpiling modern JavaScript code.
  - **Postman** – For testing API endpoints.
  - **Git** – For version control.

---

## API Endpoints

### 1. **Create a Record**
- **POST** `/post/save`
- **Request Body**:
 
  {
    "title": "New Record",
    "description": "Record Description",
    "category": "Category"
  }
