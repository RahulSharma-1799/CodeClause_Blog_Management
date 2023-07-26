import express from "express";
import { signupUser, loginUser } from "../controller/user-controller.js";
import { uploadImage, getImage } from "../controller/image-controller.js";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controller/post-controller.js";
import { authenticateToken } from "../controller/jwt-controller.js";
import upload from "../utils/upload.js";
const route = express.Router();
route.post("/signup", signupUser);
route.post("/login", loginUser);
route.post("/file/upload", upload.single("file"), uploadImage);
route.get("/file/:filename", getImage);
route.post("/create", authenticateToken, createPost);
route.get("/posts", authenticateToken, getAllPosts);
route.get("/post/:id", authenticateToken, getPost);
route.put("/update/:id", authenticateToken, updatePost);

export default route;
