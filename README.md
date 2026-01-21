# Chat Application (REST API)

A simple **Chat Application backend** built using **Node.js, Express.js, MongoDB, and Mongoose**.  
This project demonstrates **CRUD operations** on MongoDB through **RESTful APIs**.

## 📌 Features
- Create, Read, Update, and Delete (CRUD) chat messages
- RESTful API architecture
- MongoDB database integration using Mongoose
- Express.js for server-side routing
- JSON-based API responses

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **ODM:** Mongoose  
- **API Style:** RESTful APIs  


## 🚀 API Endpoints
| Method | Endpoint        | Description               |
|------|----------------|---------------------------|
| POST | `/chats`    | Create a new chat message |
| GET  | `/chats`    | Get all chat messages     |
| GET  | `/chats/:id`| Get chat by ID            |
| PUT  | `/chats/:id`| Update chat message       |
| DELETE | `/chats/:id` | Delete chat message    |

