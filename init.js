const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then((res) => {
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "ram",
    to: "sham",
    msg: "send me your exam notes",
    created_at: new Date()
    },
    {
    from: "rohit",
    to: "mohit",
    msg: "teach me RESTful APIs",
    created_at: new Date()
    },
    {
    from: "amit",
    to: "sumit",
    msg: "all the best!",
    created_at: new Date()
    },
    {
    from: "neha",
    to: "sneha",
    msg: "send me pyq papers",
    created_at: new Date()
    },
    {
    from: "karan",
    to: "arjun",
    msg: "lets go for a ride",
    created_at: new Date()
    },
];

Chat.insertMany(allChats);

