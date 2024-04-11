import { Router } from "express";
import { createNews, deleteNews, getNews, getOneNews, updateNews, } from "../controller/news.controller";

const router = Router()

router.get("/news", getNews)
router.post("/news", createNews)
router.put("/news/:id", updateNews)
router.get("/news/:id", getOneNews)
router.delete("/news/:id", deleteNews)

export default router 