# API Communication Sequence

```text
User
 |
 | Login
 v
Frontend
 |
 | POST /auth/login
 v
Backend API
 |
 | Validate credentials
 v
Authentication Service
 |
 | Authentication result
 v
Backend API
 |
 | Access Token
 v
Frontend
 |
 | GET /services
 v
Backend API
 |
 | Request service data
 v
Database
 |
 | Service records
 v
Backend API
 |
 | JSON Response
 v
Frontend
 |
 | Display services
 v
User

User
 |
 | Submit application
 v
Frontend
 |
 | POST /submissions
 v
Backend API
 |
 | Validate & save
 v
Database
 |
 | Submission ID
 v
Backend API
 |
 | 201 Created
 v
Frontend
 |
 | Confirmation
 v
User