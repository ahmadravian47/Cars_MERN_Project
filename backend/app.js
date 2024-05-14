const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Car = require("./models/Car.js");
const Member = require("./models/Member.js");
require("dotenv").config();

mongoose
  .connect(process.env.DB_STRING)
  .then(() => {
    console.log("Connected to mongodb:cluster1/CarsMernDB");
    // populateCars();
    // populateMembers();
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// API ENDPOINTS

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await Member.findOne({ email: email , password: password});
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // pic: user.pic,
      // token: generateToken(user._id),
    });
  } else {
    res.status(401).send("Invalid Email or Password!");
    // throw new Error("Invalid Email or Password!");
  }
});


app.post('/signup',(req,res)=>{
  const member=new Member(req.body);
  member
    .save()
    .then(() => {
      res.status(200).json(member);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error Signing Up!" });
    });
})


app.get("/usedcars", async (req, res) => {
  const usedCars = await Car.find({});
  usedCars
    ? res.status(200).send(usedCars)
    : res.status(404).send("Error Fetching Cars");
});


app.get("/usedcars/:cartype", async (req, res) => {
  let carType = req.params.cartype;
  if (carType === "suv") carType = carType.toUpperCase();
  console.log(carType);
  const usedCars = await Car.find({ type: carType });
  usedCars
    ? res.status(200).send(usedCars)
    : res.status(404).send("Error Fetching Cars");
});


app.post("/postadd", (req, res) => {
  // const {owner,make,model,type,year,mileage,price,condition,fuelType,transmission,color,location,images,postedAt}=req.body;
  // console.log(req.body);
  const car = new Car(req.body);
  car
    .save()
    .then(() => {
      res.status(200).json(car);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error Posting Add!" });
    });
});


app.listen(5000, () => {
  console.log("Server started at port 5000");
});

const populateCars = async () => {
  await Car.insertMany([
    {
      owner: "user_id_1",
      make: "Toyota",
      model: "Corolla",
      type: "sedan",
      year: 2018,
      mileage: 50000,
      price: 15000,
      condition: "Used",
      fuelType: "Petrol",
      transmission: "Automatic",
      color: "Black",
      location: "City A, Country A",
      images: ["car_image1.jpg", "car_image2.jpg"],
      postedAt: "2024-05-05T12:00:00Z",
    },
    {
      owner: "user_id_2",
      make: "Honda",
      model: "Accord",
      type: "sedan",
      year: 2020,
      mileage: 20000,
      price: 25000,
      condition: "New",
      fuelType: "Petrol",
      transmission: "Automatic",
      color: "White",
      location: "City B, Country B",
      images: ["car_image3.jpg", "car_image4.jpg"],
      postedAt: "2024-05-05T12:00:00Z",
    },
    {
      owner: "user_id_3",
      make: "Ford",
      model: "F-150",
      type: "pickup",
      year: 2019,
      mileage: 35000,
      price: 30000,
      condition: "Used",
      fuelType: "Petrol",
      transmission: "Automatic",
      color: "Red",
      location: "City C, Country C",
      images: ["car_image5.jpg", "car_image6.jpg"],
      postedAt: "2024-05-05T12:00:00Z",
    },
    {
      owner: "user_id_4",
      make: "Chevrolet",
      model: "Camaro",
      type: "coupe",
      year: 2021,
      mileage: 10000,
      price: 40000,
      condition: "New",
      fuelType: "Petrol",
      transmission: "Automatic",
      color: "Blue",
      location: "City D, Country D",
      images: ["car_image7.jpg", "car_image8.jpg"],
      postedAt: "2024-05-05T12:00:00Z",
    },
    {
      owner: "user_id_6",
      make: "BMW",
      model: "X5",
      type: "SUV",
      year: 2017,
      mileage: 60000,
      price: 35000,
      condition: "Used",
      fuelType: "Diesel",
      transmission: "Automatic",
      color: "Black",
      location: "City E, Country E",
      images: ["car_image9.jpg", "car_image10.jpg"],
      postedAt: "2024-05-05T12:00:00Z",
    },
  ]);
};

const populateMembers = async () => {
  await Member.insertMany([
    {
      _id: "user_id_1",
      username: "user123",
      email: "user123@example.com",
      password: "hashed_password_1",
      name: "John Doe",
      phone: "123-456-7890",
      location: "City A, Country A",
      joinedAt: "2024-05-01T00:00:00Z",
    },
    {
      _id: "user_id_2",
      username: "user456",
      email: "user456@example.com",
      password: "hashed_password_2",
      name: "Jane Smith",
      phone: "987-654-3210",
      location: "City B, Country B",
      joinedAt: "2024-05-02T00:00:00Z",
    },
    {
      _id: "user_id_3",
      username: "user789",
      email: "user789@example.com",
      password: "hashed_password_3",
      name: "Alice Johnson",
      phone: "555-555-5555",
      location: "City C, Country C",
      joinedAt: "2024-05-03T00:00:00Z",
    },
    {
      _id: "user_id_4",
      username: "user101112",
      email: "user101112@example.com",
      password: "hashed_password_4",
      name: "Bob Brown",
      phone: "111-222-3333",
      location: "City D, Country D",
      joinedAt: "2024-05-04T00:00:00Z",
    },
    {
      _id: "user_id_5",
      username: "user131415",
      email: "user131415@example.com",
      password: "hashed_password_5",
      name: "Carol Williams",
      phone: "444-444-4444",
      location: "City E, Country E",
      joinedAt: "2024-05-05T00:00:00Z",
    },
  ]);
};
