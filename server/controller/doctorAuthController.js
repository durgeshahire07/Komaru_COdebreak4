const Doctor = require("../models/Doctor");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, doctorCategory } = req.body;

    // user verification
    if (!email || !password) {
      return res.status(401).json({ error: "Missing required fields." });
    }

    const existingUser = await Doctor.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exist." });
    }

    const hashedPwd = await bcrypt.hash(password, saltRounds);

    if (hashedPwd) {
      const newUser = new Doctor({
        firstName,
        lastName,
        email,
        password: hashedPwd,
        doctorCategory,
      });

      const savedUser = await newUser.save();

      const token = jwt.sign({ user: savedUser?._id }, process.env.JWT_SECRET, {
        expiresIn: "3d",
      });

      // DONT SEND PASSWORD WITH USER DATA
      const { password, ...others } = await savedUser?._doc;

      res
        .cookie("access_token", token, {
          httpOnly: true,
          secure: false,
        })
        .status(200)
        .json(others);
    } else {
      res
        .status(500)
        .json({ error: "Something went wrong while creating the account." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, userPassword } = req.body;

    if (!email || !userPassword) {
      return res.status(500).json({ error: "Missing credentials" });
    }

    const existingUser = await Doctor.findOne({ email: email });
    if (existingUser) {
      const cmp = await bcrypt.compare(userPassword, existingUser.password);
      if (cmp) {
        //   ..... further code to maintain authentication like jwt or sessions
        const token = jwt.sign(
          { user: existingUser._id },
          process.env.JWT_SECRET,
          { expiresIn: "3d" }
        );

        // DONT SEND PASSWORD WITH USER DATA
        const { password, ...others } = await existingUser._doc;

        res
          .cookie("access_token", token, {
            httpOnly: true,
            secure: false,
          })
          .status(200)
          .json(others);
      } else {
        res.send("Wrong email or password.");
      }
    } else {
      res.send("Wrong email or password.");
    }
    // creating the token
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

const logout = async (req, res) => {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Sucessfully logged out 👋!" });
};

module.exports = { logout, login, signup };
