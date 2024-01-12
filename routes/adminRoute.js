
import express from 'express'
import {addCategory, addSubCategory, adminLogin, blockStudio, blockUser, blockVendor, categoryList, singleCategory, subcategory, userList, vendorList } from "../controllers/adminController.js";
const adminRoute = express()

adminRoute.post('/login',adminLogin);
adminRoute.get('/userList',userList);
adminRoute.get('/vendorList', vendorList); 
adminRoute.patch('/vendorBlock',blockVendor);
adminRoute.patch('/userBlock',blockUser); 
adminRoute.patch('/studioBlock',blockStudio);   
adminRoute.post('/addCategory',addCategory);
adminRoute.post('/addSubCategory',addSubCategory);
adminRoute.get('/singleCategory/:cat_id',singleCategory);   
adminRoute.get('/categoryList',categoryList);
adminRoute.get('/subcategory/:cat_id',subcategory)
export default adminRoute;   