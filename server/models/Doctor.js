const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide us your first name!"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide us your last name!"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email Id!"],
      unique: true,
      lowercase: true,
    },
    doctorCategory: {
      type: String,
      required: [true, "Please provide a doctor category!"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password!"],
      minLength: 8,
    },

    patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Patient" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
