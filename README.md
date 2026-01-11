<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/09ef1204-1180-4960-b15b-5d15ca9fbc7c" /># VJG Technologies - IT Staffing & Placement

A professional full-stack platform for VJG Technologies, a leading IT staffing and recruitment firm based in Bangalore.

## Features

- **Professional Landing Page**: Modern, responsive design highlighting staffing solutions.
- **Job Openings**: Real-time display of hot job opportunities in the IT sector.
- **Placement Success**: Showcase of candidate placements and hiring partners.
- **Inquiry System**: Integrated contact form for job seekers and employers.
- **Staffing Services**: Detailed overview of permanent staffing, contract hiring, and executive search.

## Tech Stack

- **Frontend**: React, Tailwind CSS, Framer Motion, Lucide React, Wouter.
- **Backend**: Express, Node.js.
- **Database**: PostgreSQL with Drizzle ORM.
- **Validation**: Zod.

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- PostgreSQL database

### Local Setup

1. **Clone the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment**:
   Create a `.env` file in the root directory and add your database connection string:
   ```env
   DATABASE_URL=postgresql://user:password@host:port/dbname
   PORT=5050
   ```
4. **Push Database Schema**:
   ```bash
   npx cross-env-shell "node --env-file=.env node_modules/drizzle-kit/bin.js push"
   ```
5. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5050`.

## Project Structure

- `client/`: React frontend application.
- `server/`: Express backend and database configuration.
- `shared/`: Shared schemas and API route definitions.
- `migrations/`: Database migration files.

  

<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/cc3a2bcb-2948-4dab-bf16-ffd0d9a3a45d" />

