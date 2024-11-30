# Plant Management Application

A web application to manage plants. The app allows users to add, edit, delete, and filter plants by category and search for plants by name.

## Features

- View all plants in a grid layout.
- Filter plants by category (e.g., Tree, Shrub, Flower).
- Search plants by name.
- Add new plants to the system.
- Edit details of existing plants.

## Technologies Used

- React for the frontend.
- Redux for state management.
- Axios for HTTP requests.
- Bootstrap for responsive design.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) (or Yarn)

## Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/plant-management-app.git
cd plant-management-app
```

### 2. Install Dependencies

Install the project dependencies by running:

```bash
npm install
# or if you use Yarn:
# yarn install
```

### 3. Set Up Environment Variables (Optional)

If the project uses environment variables (e.g., for API keys or server configurations), create a .env file in the root directory based on .env.example. Example:

```bash
REACT_APP_API_URL=http://localhost:5012
```

### 4. Run the Application

Start the development server:

```bash
npm start
# or with Yarn:
# yarn start
```

The application will be available at http://localhost:3000 by default.

### 5. API Server

Ensure the backend server (API) is running on the correct port, typically http://localhost:5012 for this project. The frontend will interact with this server to fetch and manage plant data.
