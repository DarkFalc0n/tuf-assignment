# TUF assignment
Code Submission Utility

## Overview
This is a code submission platform built as an assignment for TUF intern position.
![tuf](https://github.com/DarkFalc0n/tuf-assignment/assets/59203815/eae76a71-3453-4a76-94bc-2ab01e5723b8)


## Backend 
✅ Link to hosted server: [https://tuf-assignment-f5kh.onrender.com/](https://tuf-assignment-f5kh.onrender.com/)
- POST `/submit`
  ```ts
  body: {
    username: darkfalc0n,
    language: "JAVASCRIPT",
    code: "console.log('This is a test')",
    stdin: ""
  }
  ```
- GET `/fetch`

## Frontend
✅ Link to hosted website: [https://tuf-assignment-azure.vercel.app/](https://tuf-assignment-azure.vercel.app/)
- [`/submit`](https://tuf-assignment-azure.vercel.app/submit)
- [`/submissions`](https://tuf-assignment-azure.vercel.app/submissions)

## MySQL instance
✅ Hosted on [Aiven - Free Tier](https://aiven.io/)

## Progress
### Main Task - Completed ✅
### Bonus Tasks - Partially Completed
- [x] Integrated Judge0 API
- [ ] Implemented Redis Cache

## Dev Decisions
- Self hosting `Judge0 API`, `MySQL instance` and `Redis Cache` in docker containers and managing through `docker-compose` would have resulted in faster inter-service communication, but was
  deliberately avoided owing to free tier hosting on [Render](https://render.com/) where docker environments would be suboptimal.
