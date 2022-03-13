const express = require("express");
const {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  allUserOrder,
  deliverOrder,
} = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

//getUserOrder
router.route("/myorders").get(protect, getMyOrders);

//craete new order
router.route("/").post(protect, addOrderItem);

router.route("/alluserorders").get(protect, allUserOrder);
router.route("/deliverorders").post(protect, deliverOrder);
//get order by id
router.route("/:id").get(protect, getOrderById);
//update order
router.route("/:id/pay").put(protect, updateOrderToPaid);

module.exports = router;
