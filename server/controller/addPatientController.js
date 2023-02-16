const { json } = require("express");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

const addPatient = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNo, docId } = req.body;

    const registeredPatient = await Patient.findOne({ email });

    if (registeredPatient) {
      res.send("patient already exists");
    }

    const newPatient = new Patient({
      firstName,
      lastName,
      email,
      phoneNo,
      assignedDoctors: docId,
    });

     await newPatient.save();


    return res.send(newPatient);

    //   isPatientRegistered
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};

const patientsByDoctor = async (req, res) => {
  const { docId } = req.body;
  const allDocP = await Patient.find({ assignedDoctors: docId });

  res.send(allDocP)
};

module.exports = { addPatient, patientsByDoctor };
