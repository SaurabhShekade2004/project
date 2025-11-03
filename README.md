# AI Legal Advisor

A full-stack web application that provides AI-powered legal assistance for Indian law. Users can chat with an AI legal assistant, learn about the Indian Constitution, and get instant legal insights.

## Features

- 🔐 **User Authentication**: Secure signup and login with password validation
- 💬 **AI Legal Chat**: Interactive chat interface for legal queries
- 📚 **Constitution Information**: Learn about the Indian Constitution and constitutional bodies
- 🔒 **Secure**: Password hashing with bcrypt, session management
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices

## Tech Stack

### Frontend
- React (JavaScript)
- Tailwind CSS for styling
- Shadcn UI components
- Wouter for routing
- TanStack Query for data fetching

### Backend
- Express.js
- MySQL database
- bcrypt for password hashing
- express-session for session management

### AI Integration
- Python script for legal analysis (to be connected)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- MySQL (v8.0 or higher)
- Python 3.x (for the AI legal advisor script)
- npm or yarn

## Local Setup Instructions

### 1. Clone the Repository

\`\`\`bash
git clone <your-repo-url>
cd ai-legal-advisor
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set Up MySQL Database

#### Install MySQL (if not already installed)

**On macOS:**
\`\`\`bash
brew install mysql
brew services start mysql
\`\`\`

**On Ubuntu/Debian:**
\`\`\`bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
\`\`\`

**On Windows:**
Download and install from [MySQL official website](https://dev.mysql.com/downloads/installer/)

#### Create the Database

1. Open MySQL command line:
\`\`\`bash
mysql -u root -p
\`\`\`

2. Create the database:
\`\`\`sql
CREATE DATABASE ai_legal_advisor;
EXIT;
\`\`\`

### 4. Configure Environment Variables

1. Copy the example environment file:
\`\`\`bash
cp .env.example .env
\`\`\`

2. Edit `.env` file and update the following:

\`\`\`env
# Required: Generate a random secret for sessions
SESSION_SECRET=your-super-secret-random-key-here

# Database Configuration
USE_MYSQL=true
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your-mysql-password
DB_NAME=ai_legal_advisor
\`\`\`

**Important**: Replace `your-mysql-password` with your actual MySQL root password.

### 5. Database Schema

The application will automatically create the required tables when you start the server. The schema includes:

**users table:**
\`\`\`sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

### 6. Running the Application

**Development Mode:**
\`\`\`bash
npm run dev
\`\`\`

The application will start on `http://localhost:5000`

**Production Mode:**
\`\`\`bash
npm run build
npm start
\`\`\`

### 7. Verify MySQL Connection

After starting the application, check the console output:
- If you see "Using in-memory storage (development mode)", MySQL is not connected
- If no such message appears and the server starts successfully, MySQL is connected

### 8. Testing the Application

1. **Open your browser** and navigate to `http://localhost:5000`
2. **Click "Login"** in the top right
3. **Create an account**:
   - Click the "Sign Up" tab
   - Enter your email
   - Create a password with:
     - At least 8 characters
     - One uppercase letter
     - One lowercase letter
     - One number
     - One special character
   - Confirm your password
   - Click "Sign Up"
4. **Login** with your newly created credentials
5. **Start chatting** with the AI Legal Assistant!

## Password Requirements

For security, passwords must meet the following criteria:
- Minimum 8 characters long
- At least 1 uppercase letter (A-Z)
- At least 1 lowercase letter (a-z)
- At least 1 number (0-9)
- At least 1 special character (!@#$%^&*()_+-=[]{}|;:,.<>?)

## Python Script Integration

To integrate your Python legal advisor script:

1. Place your Python script in the project directory
2. Update the `.env` file with the path to your script:
\`\`\`env
PYTHON_SCRIPT_PATH=./your_script.py
\`\`\`
3. The backend API at `/api/chat` will need to be updated to call your Python script
4. Example integration code will be in `server/routes.ts`

## Project Structure

\`\`\`
ai-legal-advisor/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── App.tsx        # Main app component
│   └── index.html
├── server/                 # Backend Express server
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database operations
│   └── index.ts           # Server entry point
├── shared/                 # Shared code between frontend and backend
│   └── schema.ts          # Data schemas and validation
├── .env                    # Environment variables (create this)
├── .env.example           # Example environment variables
├── package.json
└── README.md
\`\`\`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - Login existing user
- `POST /api/auth/logout` - Logout current user
- `GET /api/auth/me` - Get current user session

### Future Endpoints (to be implemented)
- `POST /api/chat` - Send query to AI legal advisor
- `GET /api/constitution/download` - Download constitution PDF

## Troubleshooting

### MySQL Connection Issues

**Error: "connect ECONNREFUSED 127.0.0.1:3306"**

This means MySQL is not running. Start MySQL:
\`\`\`bash
# macOS
brew services start mysql

# Linux
sudo systemctl start mysql

# Windows
# Start MySQL from Services or MySQL Workbench
\`\`\`

**Error: "Access denied for user 'root'@'localhost'"**

Your MySQL password is incorrect. Update it in `.env` file.

**Error: "Unknown database 'ai_legal_advisor'"**

The database doesn't exist. Create it:
\`\`\`bash
mysql -u root -p -e "CREATE DATABASE ai_legal_advisor;"
\`\`\`

### Development Mode (No MySQL)

If you want to run without MySQL (using in-memory storage):
1. Set `USE_MYSQL=false` in `.env` file
2. Data will be stored in memory and lost when server restarts
3. Good for quick testing and development

## Security Notes

1. **Never commit `.env` file** - It contains sensitive information
2. **Use strong SESSION_SECRET** - Generate a random string
3. **Change default MySQL password** - Don't use root without password in production
4. **Use HTTPS in production** - Encrypt data in transit
5. **Regular backups** - Back up your MySQL database regularly

## License

[Your License Here]

## Support

For issues and questions, please contact: support@ailegaladvisor.com
