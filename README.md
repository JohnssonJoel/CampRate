# CampRate

CampRate is a fullstack camping review application where users can browse campgrounds, add new campgrounds, and leave reviews with ratings and comments. The application is designed for people who enjoy camping and want to discover and rate different camping locations.

## Problem the app solves

CampRate helps campers find and review campgrounds in one place, making it easier to discover good camping locations and share experiences with others.

---

# Tech Stack

## Frontend

* React
* Vite
* CSS

## Backend

* Express.js
* MongoDB Atlas
* Mongoose

---

# Features

## Campgrounds

* Create campgrounds
* View all campgrounds
* Update campgrounds
* Delete campgrounds
* Search by campground name or location
* Auto-refresh with `setInterval`

## Reviews

* Add reviews to campgrounds
* View reviews directly under each campground
* Reviews are connected using MongoDB ObjectId references

## Validation & Error Handling

* Mongoose validation on campground and review schemas
* Frontend error handling for invalid input
* Backend returns proper HTTP status codes and JSON error messages

---

# Project Structure

## Backend Structure

```txt
server/
├── controllers/
├── models/
├── routes/
├── seeds/
├── .env
├── server.js
```

## Frontend Structure

```txt
client/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── App.css
```

---

# Database Collections

## users

Stores usernames and emails.

## campgrounds

Stores campground information such as:

* name
* location
* rating
* reviews

## reviews

Stores review information such as:

* reviewerName
* rating
* comment
* campground reference

---

# API Endpoints

## Campgrounds

### GET all campgrounds

```http
GET /api/campgrounds
```

### GET top-rated campgrounds

```http
GET /api/campgrounds/top-rated
```

### Create campground

```http
POST /api/campgrounds
```

Example body:

```json
{
  "name": "Forest Escape",
  "location": "Sweden",
  "rating": 5
}
```

### Update campground

```http
PUT /api/campgrounds/:id
```

### Delete campground

```http
DELETE /api/campgrounds/:id
```

---

## Reviews

### Get reviews for campground

```http
GET /api/campgrounds/:campgroundId/reviews
```

### Create review

```http
POST /api/campgrounds/:campgroundId/reviews
```

Example body:

```json
{
  "reviewerName": "Joel",
  "rating": 5,
  "comment": "Amazing camping experience."
}
```

---

# Installation

## Clone repository

```bash
git clone https://github.com/JohnssonJoel/CampRate.git
```

---

# Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm run dev
```

Seed database:

```bash
npm run seed
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# Running the Full Project

## From the root project folder:

```bash
npm install
npm run dev
```

This command uses concurrently to start both:
* React frontend
* Express backend
at the same time.

---

# Validation Examples

## Campground Validation

* Name is required
* Location is required
* Rating must be between 1 and 5

## Review Validation

* Reviewer name is required
* Comment must be at least 5 characters
* Rating must be between 1 and 5

---

# Relationships

The application uses MongoDB ObjectId references.

## Example

```txt
Campground -> Reviews
Review -> Campground
```

`populate()` is used to fetch review data together with campgrounds.

---


# Author

Joel Johnsson
