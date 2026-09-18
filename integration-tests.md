# Integration Test Cases

| Test ID | Scenario | Expected Result |
|--------|----------|-----------------|
| IT-01 | Valid login | 200 OK and token |
| IT-02 | Wrong password | 401 Unauthorized |
| IT-03 | No authentication token | 401 Unauthorized |
| IT-04 | Get services | 200 OK |
| IT-05 | Submit valid application | 201 Created |
| IT-06 | Missing required field | 400 Bad Request |
| IT-07 | Unknown submission | 404 Not Found |
| IT-08 | Unauthorized access | 403 Forbidden |

## Objective
Integration testing verifies that the frontend, API, authentication and backend services communicate correctly.