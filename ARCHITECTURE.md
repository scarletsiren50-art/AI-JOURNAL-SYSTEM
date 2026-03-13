# System Architecture

## Overview

The AI-Assisted Journal System follows a **client-server architecture**
where the frontend interacts with a backend API server that manages the
database and performs emotion analysis.

    User Browser
          ↓
    React Frontend
          ↓
    Express API Server
          ↓
    SQLite Database

------------------------------------------------------------------------

# System Components

## 1. Frontend (React)

The frontend provides the user interface.

Responsibilities:

-   Accept journal text input
-   Send API requests to backend
-   Display journal entries
-   Display emotion analysis results
-   Display emotional insights

The frontend communicates with the backend using **REST API calls via
Axios**.

------------------------------------------------------------------------

## 2. Backend (Node.js + Express)

The backend is responsible for:

-   Handling API requests
-   Storing journal entries
-   Performing emotion analysis
-   Generating insights

Main APIs implemented:

    POST /api/journal
    GET /api/journal/:userId
    POST /api/journal/analyze
    GET /api/journal/insights/:userId

------------------------------------------------------------------------

## 3. Database (SQLite)

SQLite stores all journal data including:

-   User ID
-   Ambience
-   Journal text
-   Emotion
-   Keywords
-   Timestamp

SQLite was chosen because:

-   Lightweight
-   Easy setup
-   Suitable for small applications

------------------------------------------------------------------------

# Scaling to 100k Users

To scale the system for large numbers of users:

1.  Replace SQLite with **PostgreSQL or MongoDB**
2.  Deploy backend on **cloud infrastructure (AWS / GCP / Azure)**
3.  Use **load balancers** to distribute traffic
4.  Introduce **microservices architecture**
5.  Use **Docker containers** for deployment

------------------------------------------------------------------------

# Reducing LLM Cost

AI processing can be expensive, so cost reduction strategies include:

1.  Cache analysis results
2.  Avoid re-analyzing identical text
3.  Use lightweight models for emotion detection
4.  Batch processing of requests
5.  Analyze only new journal entries

------------------------------------------------------------------------

# Caching Strategy

Caching can improve performance and reduce AI computation.

Possible implementation:

1.  Use **Redis caching**
2.  Store emotion analysis results using hashed journal text
3.  If the same text is analyzed again, return cached results

Benefits:

-   Faster response times
-   Lower compute cost
-   Reduced API usage

------------------------------------------------------------------------

# Protecting Sensitive Journal Data

Journal entries may contain personal information, so security is
important.

Recommended protections include:

1.  HTTPS encryption
2.  Authentication and authorization
3.  Secure database access control
4.  Encryption at rest
5.  Rate limiting API requests

------------------------------------------------------------------------

# Future Architecture Enhancements

Possible improvements include:

-   Docker-based deployment
-   Kubernetes orchestration
-   Real AI model integration
-   Real-time emotion dashboards
-   User authentication system

------------------------------------------------------------------------

## 4. Deployment Architecture

The project is deployed using two cloud platforms:

Frontend:
- Hosted on Vercel
- React application

Backend:
- Hosted on Render
- Node.js + Express REST APIs

Database:
- SQLite database used for storing journal entries.

System Flow:

User Browser
      ↓
React Frontend (Vercel)
      ↓
Express Backend API (Render)
      ↓
SQLite Database

--------------------------------------------------------------------------

## Note

The backend is deployed on Render's free tier.

If backend has been inactive for a while, the first request may take 20-40 seconds to respond while the server wakes up.

-------------------------------------------------------------------------

# Summary

The AI-Assisted Journal System demonstrates a scalable architecture
combining frontend interfaces, backend APIs, database storage, and
AI-based analysis services.

The architecture supports future scalability, performance improvements,
and integration with advanced AI systems.
