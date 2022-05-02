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


//user registration
router.route("/").post(registerUser);

//post email and password auth
router.post("/login", authController);
router.get("/getallusers", getallUsers);
router.post("/deleteuser", deleteuser);
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
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
 

module.exports = router;
