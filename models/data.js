const mongoose = require("mongoose");
const User = require("./student.js");

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/student')
}
main().then(()=>{
    console.log("connection successfull")
}).catch((err)=>{
    console.log(err);
})

const people = [
  {
    name: "Aarav Sharma",
    age: 24,
    city: "Delhi",
    email: "aarav.sharma@example.com",
    fatherName: "Rajesh Sharma",
    contact: "9876543210"
  },
  {
    name: "Priya Verma",
    age: 22,
    city: "Mumbai",
    email: "priya.verma@example.com",
    fatherName: "Suresh Verma",
    contact: "9876543211"
  },
  {
    name: "Rohan Gupta",
    age: 27,
    city: "Pune",
    email: "rohan.gupta@example.com",
    fatherName: "Anil Gupta",
    contact: "9876543212"
  },
  {
    name: "Neha Singh",
    age: 25,
    city: "Lucknow",
    email: "neha.singh@example.com",
    fatherName: "Vijay Singh",
    contact: "9876543213"
  },
  {
    name: "Karan Mehta",
    age: 29,
    city: "Ahmedabad",
    email: "karan.mehta@example.com",
    fatherName: "Mahesh Mehta",
    contact: "9876543214"
  },
  {
    name: "Ananya Iyer",
    age: 23,
    city: "Chennai",
    email: "ananya.iyer@example.com",
    fatherName: "Ramesh Iyer",
    contact: "9876543215"
  },
  {
    name: "Vikram Rao",
    age: 31,
    city: "Bengaluru",
    email: "vikram.rao@example.com",
    fatherName: "Srinivas Rao",
    contact: "9876543216"
  },
  {
    name: "Pooja Nair",
    age: 26,
    city: "Kochi",
    email: "pooja.nair@example.com",
    fatherName: "Krishnan Nair",
    contact: "9876543217"
  },
  {
    name: "Rahul Khanna",
    age: 28,
    city: "Chandigarh",
    email: "rahul.khanna@example.com",
    fatherName: "Ajay Khanna",
    contact: "9876543218"
  },
  {
    name: "Sneha Patil",
    age: 24,
    city: "Kolhapur",
    email: "sneha.patil@example.com",
    fatherName: "Sunil Patil",
    contact: "9876543219"
  },
  {
    name: "Aditya Joshi",
    age: 30,
    city: "Indore",
    email: "aditya.joshi@example.com",
    fatherName: "Prakash Joshi",
    contact: "9876543220"
  },
  {
    name: "Meera Das",
    age: 21,
    city: "Kolkata",
    email: "meera.das@example.com",
    fatherName: "Subhash Das",
    contact: "9876543221"
  },
  {
    name: "Nikhil Malhotra",
    age: 32,
    city: "Gurgaon",
    email: "nikhil.malhotra@example.com",
    fatherName: "Ravinder Malhotra",
    contact: "9876543222"
  },
  {
    name: "Ritu Saxena",
    age: 27,
    city: "Noida",
    email: "ritu.saxena@example.com",
    fatherName: "Deepak Saxena",
    contact: "9876543223"
  },
  {
    name: "Sanjay Yadav",
    age: 35,
    city: "Jaipur",
    email: "sanjay.yadav@example.com",
    fatherName: "Hari Yadav",
    contact: "9876543224"
  },
  {
    name: "Kavita Mishra",
    age: 29,
    city: "Bhopal",
    email: "kavita.mishra@example.com",
    fatherName: "Dinesh Mishra",
    contact: "9876543225"
  },
  {
    name: "Amit Choudhary",
    age: 34,
    city: "Faridabad",
    email: "amit.choudhary@example.com",
    fatherName: "Omprakash Choudhary",
    contact: "9876543226"
  },
  {
    name: "Shreya Banerjee",
    age: 23,
    city: "Howrah",
    email: "shreya.banerjee@example.com",
    fatherName: "Arindam Banerjee",
    contact: "9876543227"
  },
  {
    name: "Manish Tiwari",
    age: 37,
    city: "Prayagraj",
    email: "manish.tiwari@example.com",
    fatherName: "Shiv Kumar Tiwari",
    contact: "9876543228"
  },
  {
    name: "Alka Reddy",
    age: 26,
    city: "Hyderabad",
    email: "alka.reddy@example.com",
    fatherName: "Narasimha Reddy",
    contact: "9876543229"
  }
];


User.insertMany(people)
