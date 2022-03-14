const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getallUsers,
  deleteuser,
} = require("../controllers/usersController");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

// 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


//user registration
router.route("/").post(registerUser);

//post email and password auth
router.post("/login", authController);
router.get("/getallusers", getallUsers);
router.post("/deleteuser", deleteuser);
//get user profile Private Route

router
  .route("/profile") //.get(protect, getUserProfile);
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
