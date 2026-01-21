const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

// schema validation - rules for schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [0, "price is too low for amazon selling"]
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String]
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Atomic Habits",
    author: "James Clare",
    price: 99,
    category: "non-fiction",
    genre: ["personality", "self-growth"]
});

book1.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
});


let book2 = new Book({
    title: "Mathematics",
    author: "Ramanujan",
    price: "149"
});

book2.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });