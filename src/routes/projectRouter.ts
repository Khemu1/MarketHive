import { Router } from "express";
import {
  addProduct,
  getProduct,
  getUserProducts,
  updateUserProduct,
  deleteUserProduct,
} from "../controllers/productController";
import { authUser, restrictTo } from "../middlewares/authMiddleware";

const projectRouter = Router();

projectRouter.post("/addProject", authUser, restrictTo(["seller"]), addProduct);
projectRouter.get("/get-project/:id", getProduct);
projectRouter.get("/get-user-projects/:id", authUser, getUserProducts);
projectRouter.put(
  "/update-user-project/:id",
  authUser,
  authUser,
  restrictTo(["seller", "admin"]),
  updateUserProduct
);
projectRouter.delete(
  "/delete-user-project/:id",
  authUser,
  restrictTo(["seller", "admin"]),
  deleteUserProduct
);

export default projectRouter;
