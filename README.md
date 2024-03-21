# TUF assignment
Code Submission Utility

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)


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
