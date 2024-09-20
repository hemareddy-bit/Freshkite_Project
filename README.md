# Freshkite_Project

## Backend Setup

After cloning the repository, follow these steps to get the project running:

1. Run `npm install` to install all the required dependencies.
2.  Set up your `.env` file in the root directory with the necessary environment variables.
  **Note:**
   The `.env` file is included in the `.gitignore`, so you'll need to create it manually. Here are the variables you should include:
   DB=mongodb+srv://<username>:<password>@cluster0.mvum2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   PORT=5000
   CLIENT_ID=your_client_id_here
   CLIENT_SECRET=your_client_secret_here
   CLIENT_URL=http://localhost:3000/
   JWT_SECRET=your_jwt_secret_here
4. Start the development server by running `npm run dev`.

Once the server is running, you can access the application in your browser at [http://localhost:5000](http://localhost:5000).



