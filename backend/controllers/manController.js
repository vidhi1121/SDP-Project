const Man = require("../models/ManModel");
const asyncHandler = require("express-async-handler");

const submitFormMan = asyncHandler(async (req, res) => {
  const {
    firstname,
    middlename,
    lastname,
    email,
    address1,
    address2,
    city,
    pincode,
    state,
    mobileNo,
    isApprove,
  } = req.body;
  // const manExist = await Man.find({ });
  // if (manExist) {
  //   res.status(400);
  //   throw new Error("User Already Exists!");
  // }

  const man = await Man.create({
    // user,
    firstname,
    middlename,
    lastname,
    email,
    address1,
    address2,
    city,
    pincode,
    state,
    mobileNo,
    isApprove,
  });
  if (man) {
    res.status(201).json({
      //user: man.user._id,
      _id: man._id,
      firstname: man.firstname,
      middlename: man.middlename,
      lastname: man.lastname,
      email: man.email,

      address1: man.address1,
      address2: man.address2,
      city: man.city,
      pincode: man.pincode,
      state: man.state,
      mobileNo: man.mobileNo,
      isApprove: man.isApprove,
      // token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("Man Not Found");
  }
});

const getallMen = asyncHandler(async (req, res) => {
  try {
    const men = await Man.find({});

    res.status(200).send(men);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

const approveR = asyncHandler(async (req, res) => {
  const manid = req.body.manid;
  try {
    const man = await Man.findOne({ _id: manid });
    man.isApprove = true;
    await man.save();
    res.status(200).send("Request Approved success");
  } catch (error) {
    res
      .status(404)
      .json({ message: "Somthing went wrong", error: error.stack });
  }
});

const getMyRequest = asyncHandler(async (req, res) => {
  const men = await Man.find({ man: req.man._id });
  res.json(men);
});

const deleteman = asyncHandler(async (req, res) => {
  const manid = req.body.manid;
  try {
    await Man.findOneAndDelete({ _id: manid });

    res.status(200).send("User Deleted");
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

module.exports = {
  getallMen,
  submitFormMan,
  approveR,
  getMyRequest,
  deleteman,
};
