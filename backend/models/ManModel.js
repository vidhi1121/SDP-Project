const mongoose = require("mongoose");
//const mongooseErrorHandler = require('mongoose-validation-error-message-handler');
const bcrypt = require("bcryptjs");
const manSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    firstname: {
      type: String,
      required: true,
    },
    middlename: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isApprove: {
      type: Boolean,
      required: true,
      default: false,
    },

    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: Number,
      required: true,
    },

    // idProof: {
    //   //  type: File,
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

const Man = mongoose.model("Man", manSchema);
module.exports = Man;
