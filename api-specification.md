# API Specification

## Base URL
https://api.example.gov/v1

## 1. User Login

### Endpoint
POST /auth/login

### Purpose
Authenticates the user.

### Request
{
  "email": "user@example.com",
  "password": "password"
}

### Success Response
{
  "success": true,
  "accessToken": "token",
  "expiresIn": 3600
}

### Error
401 Unauthorized

---

## 2. User Profile

### Endpoint
GET /users/me

### Purpose
Returns the logged-in user's profile.

### Authentication
Bearer Token

### Success
200 OK

---

## 3. Government Services

### Endpoint
GET /services

### Purpose
Returns available government services.

### Success
200 OK

---

## 4. Service Submission

### Endpoint
POST /submissions

### Purpose
Submits an application for a government service.

### Request
{
  "serviceId": "SVC001",
  "applicantName": "Demo User",
  "description": "Service application"
}

### Success
201 Created

---

## 5. Application Status

### Endpoint
GET /submissions/{id}

### Purpose
Checks application status.

### Success
200 OK

### Error
404 Not Found