const Member=require('../models/Member');
const Car = require("../models/Car");

const login= async (req, res) => {
    const { email, password } = req.body;
    const user = await Member.findOne({ email: email, password: password });
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
  };
  
const signup= (req, res) => {
    const member = new Member(req.body);
    member
      .save()
      .then(() => {
        res.status(200).json(member);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Error Signing Up!" });
      });
  };

  // Post Ad Route
const postAd = async (req, res) => {
    console.log(req.body);
    try {
      const imagePaths = req.files.map(file => file.path);
      const newCarData = {
        ...req.body,
        make: req.body.make.toLowerCase(),
        model: req.body.model.toLowerCase(),
        images: imagePaths,
        location: "lahore",
        owner: "6647488ba3202018f986ed2d",
      };
  
  
      const car = new Car(newCarData);
      await car.save();
      res.status(200).send(car);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error Posting Ad!' });
    }
  };


  module.exports={
    login,
    signup,
    postAd
  }



  const populateMembers = async () => {
    await Member.insertMany([
      {
        email: "user456@example.com",
        password: "hashed_password_2",
        name: "Jane Smith",
        phone: "987-654-3210",
        location: "City B, Country B",
      },
      {
        email: "user789@example.com",
        password: "hashed_password_3",
        name: "Alice Johnson",
        phone: "555-555-5555",
        location: "City C, Country C",
      },
      {
        email: "user123@example.com",
        password: "hashed_password_1",
        name: "John Doe",
        phone: "123-456-7890",
        location: "City A, Country A",
      },
      {
        email: "user131415@example.com",
        password: "hashed_password_5",
        name: "Carol Williams",
        phone: "444-444-4444",
        location: "City E, Country E",
      },
      {
        email: "user101112@example.com",
        password: "hashed_password_4",
        name: "Bob Brown",
        phone: "111-222-3333",
        location: "City D, Country D",
      },
      {
        email: "user666@example.com",
        password: "hashed_password_6",
        name: "Joh Smith",
        phone: "987-651-3210",
        location: "City F, Country F",
      },
      {
        email: "user779@example.com",
        password: "hashed_password_7",
        name: "Ben Smith",
        phone: "987-621-3210",
        location: "City F, Country F",
      },
    ]);
  };
  