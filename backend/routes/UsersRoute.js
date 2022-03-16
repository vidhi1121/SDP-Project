const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getallUsers,
  deleteuser,
  forgotPassword,
  resetPassword
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
// router.post("/password/forgot", forgotPassword);
// router.post("/password/reset/:token", resetPassword);
// router.post("/password/update", updatePassword);
//get user profile Private Route
router.post("/password/forgot", function(req, res){
  forgotPassword
});
router.put("/password/reset/:token", function(req, res){
  resetPassword
});
router.put("/password/update", function(req, res){
  protect, updatePassword
});
router
  .route("/profile") //.get(protect, getUserProfile);
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
  // router.route("/password/forgot").post(forgotPassword);
  // router.route("/password/reset/:token").put(resetPassword);
  // router.route("/password/update").put(protect, updatePassword);
 

module.exports = router;
