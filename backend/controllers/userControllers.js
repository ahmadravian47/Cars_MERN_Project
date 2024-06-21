const Member = require("../models/Member");
const Car = require("../models/Car");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Member.findOne({ email: email });

  if (!user) {
    return res.status(400).json({ message: "Invalid Email!" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid Password!" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1hr",
  });

  console.log("Generated Token\n", token);
  console.log('cookie set id : ', user._id);

  res.cookie('authToken', token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 3600), // 1 hour
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS
  });

  return res.status(200).json({
    message: "Successfully Logged In",
    user: user,
    token,
  });
};


const signup = async (req, res) => {
  const { email, password, name, location, phone } = req.body;
  const user = await Member.findOne({ email: email });
  if (user) {
    return res.status(400).json({ message: "User already exists!" });
  }

  const hashPass = bcrypt.hashSync(password);
  const member = new Member({
    email: email,
    password: hashPass,
    name,
    location,
    phone,
  });

  member
    .save()
    .then(() => {
      return res.status(200).json(member);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "Error Signing Up!" });
    });
};

const postAd = async (req, res) => {
  console.log(req.body);
  try {
    const imagePaths = req.files.map((file) => file.path);
    const newCarData = {
      ...req.body,
      make: req.body.make.toLowerCase(),
      model: req.body.model.toLowerCase(),
      images: imagePaths,
    };

    const car = new Car(newCarData);
    await car.save();
    res.status(200).send(car);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error Posting Ad!" });
  }
};

const myAds = async (req, res) => {
  console.log(req.params);
  const car = await Car.find({ owner: req.params.id });
  car
    ? res.status(200).send(car)
    : res.status(500).json({ message: "Error Fetching Ads!" });
};
const logout = async (req, res) => {
  console.log('Logging out user:', req.body.useremail);
  const user = await Member.findOne({ email: req.body.useremail });

  if (user) {
    console.log('Cookie before clearing:', req.cookies);
    res.clearCookie('authToken', { path: "/" });
    console.log('Cookie cleared');
    return res.status(200).json({ message: "Successfully Logged Out" });
  }

  console.log('User not logged in!');
  return res.status(400).json({ message: "User not logged in!" });
};

module.exports = {
  login,
  signup,
  postAd,
  myAds,
  logout,
};

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
