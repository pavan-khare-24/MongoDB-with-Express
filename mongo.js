const mongoose = require('mongoose');

// mongoose establish connection between server(index.js) and mongoDB (database)
main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// Schema define
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    
});

// Model
const User = mongoose.model("User", userSchema); // User (Model - class) and "User" (collection in MongoDB - users)

// Inserting One document
const user2 = new User({   // user1 -> document (object)
    name: "eve",
    email: "eve@yahoo.com",
    age: 25,
});

user2.save();  // to save in DB and returns promise

// Inserting Many documents
User.insertMany([
    {name: "tony", email: "tony@gmail.com", age: 50},
    {name: "bruce", email: "bruce@gmail.com", age: 47},
    {name: "peter", email: "peter@gmai.com", age: 30},
]).then((data) => {
    console.log(data);
});

// find
User.findById("696f34fe0a8528a4824f4150" )   //User.find({age: {$gt: 45}})
    .then((res) => {
    console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// Update
User.updateOne({name: "bruce"}, {age: 49})  // User.updateMany({age: {$gt: 45}}, {age: 55})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

User.findOneAndUpdate({name: "bruce"}, {age: 35}, {new: true})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

// Delete
User.deleteOne({name: "adam"}).then((res) => {    // User.deleteMany({age: 48})
    console.log(res);
});

User.findByIdAndDelete("696f34fe0a8528a4824f4152").then((res) => {  // User.findOneAndDelete({name: peter})
    console.log(res);
});
