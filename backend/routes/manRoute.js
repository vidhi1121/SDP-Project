const express = require("express");
const {
  getallMen,
  submitFormMan,
  approveR,
  getMyRequest,
  deleteman,
} = require("../controllers/manController");
//const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(submitFormMan);
router.route("/myrequest").get(getMyRequest);
router.route("/getallmen").get(/*protect,*/ getallMen);
router.post("/deleteman", deleteman);
router.route("/approverequest").post(approveR);

module.exports = router;
