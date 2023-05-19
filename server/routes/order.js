import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { getAdminOrders, getMyOrders, getOrderDetails, placeOrder, processOrder } from "../controllers/order.js";

const router = express.Router();

router.post("/createorder", placeOrder);
router.get("/myorders", isAuthenticated, getMyOrders);
router.get("/order/:id", isAuthenticated, getOrderDetails);

// Add Admin Middleware
router.get("/admin/orders", isAuthenticated, getAdminOrders);
router.get("/admin/order/:id", isAuthenticated, processOrder);


export default router;