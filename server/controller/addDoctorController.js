const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

const checkDoc = async (req, res) => {
  try {
    const { docEmail } = req.body;

    const validDoctor = await Doctor.findOne({ email: docEmail });

    if (validDoctor) {
      const doctor = await Doctor.findById(validDoctor?._id).populate(
        "Patient"
      );
      res.send(doctor);
    }
  } catch (error) {}
};

module.exports = { checkDoc };
