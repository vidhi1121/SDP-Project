const asyncHandler = require("express-async-handler");
const Order = require("../models/OrderModel");

const addOrderItem = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,

    taxPrice,
    shippingPrice,
    totalPrice,
    // paidAt,
    // deliverAt,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No Order Found");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      email: req.user.email,
      taxPrice,
      shippingPrice,
      totalPrice,
      // paidAt,
      // deliverAt,
    });

    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});

//getOrderByID
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

//paidendpoint
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    (order.isPaid = true),
      (order.paidAt = Date.now()),
      // (order.isDeliverd = true),
      // (order.deliverAt = Date.now()),
      (order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      });
    const updateOrder = await order.save();
    res.json(updateOrder);
  } else {
    res.status(404);
    throw new Error("Order Not Found");
  }
});

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

const allUserOrder = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).send(orders);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Somthing went wrong", error: error.stack });
  }
});

const deliverOrder = asyncHandler(async (req, res) => {
  const orderid = req.body.orderid;
  try {
    const order = await Order.findOne({ _id: orderid });
    order.isDeliverd = true;
    await order.save();
    res.status(200).send("Order deliverd success");
  } catch (error) {
    res
      .status(404)
      .json({ message: "Somthing went wrong", error: error.stack });
  }
});

module.exports = {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  allUserOrder,
  deliverOrder,
};
