import express from "express";
import {
  addCategory,
  addSubCategory,
  adminLogin,
  adminReport,
  blockStudio,
  blockUser,
  blockVendor,
  cancelBooking,
  categoryList,
  editCategory,
  getBookingList,
  singleCategory,
  subcategory,
  unlistCategory,
  updateWorkStatus,
  userList,
  vendorList,
} from "../controllers/adminController.js";
const adminRoute = express();

adminRoute.post("/login", adminLogin);
adminRoute.get("/userList", userList);
adminRoute.get("/vendorList", vendorList);
adminRoute.patch("/vendorBlock", blockVendor);
adminRoute.patch("/userBlock", blockUser);
adminRoute.patch("/studioBlock", blockStudio);
adminRoute.post("/addCategory", addCategory);
adminRoute.patch("/editCategory/:cat_id", editCategory);
adminRoute.patch("/categoryList", unlistCategory);
adminRoute.post("/addSubCategory", addSubCategory);
adminRoute.get("/singleCategory/:cat_id", singleCategory);
adminRoute.get("/categoryList", categoryList);
adminRoute.get("/subcategory/:cat_id", subcategory);
adminRoute.get('/bookingList',getBookingList)
adminRoute.post('/cancelBooking',cancelBooking)
adminRoute.get('/adminReport',adminReport)
adminRoute.post('/markCompleted',updateWorkStatus)
export default adminRoute;
