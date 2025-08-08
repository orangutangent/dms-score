# DMS Score

A web application for conducting digital maturity surveys for businesses (SMEs) and government officials. The application allows users to answer a series of questions and receive a score based on their answers, along with advice for improvement.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 15
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React](https://react.dev/) 19
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) (via Supabase)
- **Data Fetching:** [TanStack Query](https://tanstack.com/query/latest) & [Axios](https://axios-http.com/)

## Features

- Two distinct survey types: Digital Maturity for SMEs and a survey for Government officials.
- Dynamic question rendering based on JSON configuration files.
- Score calculation based on weighted criteria.
- Visualization of results using charts and tables.
- Persistent storage of survey results in a PostgreSQL database.
- Client-side state management with persistent storage for in-progress surveys.

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- npm, yarn, or pnpm
- A PostgreSQL database

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd dms-score
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of the project and add your database connection string:
   ```
   DATABASE_URL="postgresql://user:password@host:port/database"
   ```

4. **Run database migrations:**
   This will create the necessary tables in your database based on the Prisma schema.
   ```bash
   npx prisma migrate dev
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app/`: Main application routes and pages.
  - `(pages)/`: Route groups for different sections of the app.
  - `api/`: API routes for submitting survey data.
- `src/components/`: Reusable React components.
  - `Question/`: Components and hooks related to survey questions.
  - `ScoreCircle/`, `ScoreTable/`: Components for displaying results.
  - `ui/`: Basic UI elements like Buttons, Inputs, etc.
- `src/store/`: Zustand stores for managing survey state.
- `src/lib/`: Library code, including Prisma client and Axios instance.
- `prisma/`: Prisma schema and generated client.
- `public/`: Static assets.
- `src/questions.json`, `src/govermentssurvey.json`: JSON files containing the survey questions.

## Available Scripts

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs the Next.js linter.