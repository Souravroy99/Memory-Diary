import { Router } from "express";
import { getAllPosts } from "../controllers/post.controller.js";

const router = Router()

router.route('/').get(getAllPosts)

export default router