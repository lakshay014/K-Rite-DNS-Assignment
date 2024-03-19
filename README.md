
### Installation

- Clone this repository:  git clone <repo-url>

### To start frontend

- Navigate to the frontend directory:

        cd frontend
        npm i
        npm run dev


### To start backend

        cd server
        npm i
        npm run start

  This will start the frontend application on http://[localhost:5173](http://localhost:5173/).

### Features

- Display a list of domains
- Allow users to edit domain details
- Allow users to delete domains
- Modal for editing domain details
- Error handling with toasts


### Configuration

- Create a .env file in the backend directory.
- Define the following environment variables:

        PORT=8000
        MONGODB_URI=  <your_mongodb_uri>

Replace <your_mongodb_uri> with your MongoDB connection string.





