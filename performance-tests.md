# Performance Test Strategy

## Objective
Performance testing checks whether the API remains responsive and stable when multiple requests are received.

## Test Cases

### PT-01 - Normal Request
Send a normal GET request to /services.

Expected:
The API should return a successful response.

### PT-02 - Concurrent Requests
Send multiple requests at the same time.

Expected:
The API should remain stable without unexpected failures.

### PT-03 - Multiple Submissions
Send multiple valid submission requests.

Expected:
Each valid request should receive the correct response.

### PT-04 - Rate Limiting
Send excessive requests.

Expected:
The server should return HTTP 429 when the configured limit is exceeded.

### PT-05 - Error Rate
Monitor failed requests during load testing.

Expected:
Error rate should remain within the project-defined acceptable limit.