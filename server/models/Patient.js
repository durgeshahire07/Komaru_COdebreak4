const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
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
    password: {
      type: String,
      required: [true, "Please provide a password!"],
      minLength: 8,
    },

    assignedDoctors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
      },
    ],

    currentDisease: {
      type: String,
    },

    isCritical: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);

