# AI-Assisted Journal System

## Project Overview

The **AI-Assisted Journal System** is a full-stack web application that
allows users to write journal entries after immersive nature sessions
(such as forest, ocean, or mountain ambience). The system stores journal
entries, performs AI-based emotion analysis on the text, and generates
insights about the user's emotional state over time.

This project demonstrates practical skills in:

-   Backend API development
-   Frontend integration
-   Database management
-   AI-powered text analysis
-   Full-stack system design

The application uses **React for the frontend**, **Node.js + Express for
the backend**, and **SQLite for the database**.

------------------------------------------------------------------------

# Features

### 1. Journal Entry Creation

Users can write journal entries describing their feelings after
completing a nature session.

### 2. Retrieve Journal Entries

Users can view previously saved journal entries.

### 3. Emotion Analysis

Journal text is analyzed to detect emotional tone and extract keywords.

Example output:

    Emotion: calm
    Keywords: felt, calm, rain
    Summary: User emotional state analysis

### 4. Insights Dashboard

The system provides insights such as:

-   Total journal entries
-   Most common emotion
-   Most used ambience
-   Recently used keywords

------------------------------------------------------------------------

# Tech Stack

## Frontend

-   React.js
-   Axios
-   CSS

## Backend

-   Node.js
-   Express.js

## Database

-   SQLite

## Development Tools

-   Visual Studio Code
-   Git & GitHub
-   Node Package Manager (npm)

------------------------------------------------------------------------

# Project Structure

    ai-journal-system
    │
    ├── backend
    │   ├── controllers
    │   │   └── journalController.js
    │   │
    │   ├── routes
    │   │   └── journalRoutes.js
    │   │
    │   ├── services
    │   │   └── llmService.js
    │   │
    │   ├── database.js
    │   ├── server.js
    │   └── package.json
    │
    ├── frontend
    │   ├── public
    │   │   └── index.html
    │   │
    │   ├── src
    │   │   ├── App.js
    │   │   ├── App.css
    │   │   ├── index.js
    │   │   └── index.css
    │   │
    │   └── package.json
    │
    ├── README.md
    ├── ARCHITECTURE.md
    └── .gitignore

------------------------------------------------------------------------

# API Endpoints

### Create Journal Entry

POST /api/journal

Example Request:

    {
    "userId": "123",
    "ambience": "forest",
    "text": "I felt calm listening to forest rain"
    }

------------------------------------------------------------------------

### Get Journal Entries

GET /api/journal/:userId

Example:

    GET /api/journal/123

------------------------------------------------------------------------

### Emotion Analysis

POST /api/journal/analyze

Example Request:

    {
    "text": "I felt calm listening to forest rain"
    }

Example Response:

    {
    "emotion": "calm",
    "keywords": ["felt","calm","rain"],
    "summary": "User emotional state analysis"
    }

------------------------------------------------------------------------

### Insights API

GET /api/journal/insights/:userId

Example:

    GET /api/journal/insights/123

Example Response:

    {
    "totalEntries": 3,
    "topEmotion": "calm",
    "mostUsedAmbience": "forest",
    "recentKeywords": ["rain","nature"]
    }

------------------------------------------------------------------------

# Running the Project

## Backend Setup

Navigate to the backend folder:

    cd backend

Install dependencies:

    npm install

Start the server:

    node server.js

Backend runs on:

    http://localhost:5000

------------------------------------------------------------------------

## Frontend Setup

Navigate to frontend folder:

    cd frontend

Install dependencies:

    npm install

Run React app:

    npm start

Frontend runs on:

    http://localhost:3000

------------------------------------------------------------------------

# Future Improvements

Possible enhancements include:

-   Integration with real LLM APIs (OpenAI / HuggingFace)
-   User authentication
-   Emotion trend graphs
-   Cloud deployment
-   Real-time emotion analysis

------------------------------------------------------------------------

# Conclusion

The AI-Assisted Journal System demonstrates how modern web technologies
and AI-based text analysis can be combined to create applications that
help users reflect on their emotional experiences.

The project showcases full-stack development skills, scalable
architecture concepts, and practical API design.

------------------------------------------------------------------------

# Live Demo

https://ai-journal-system.vercel.app



