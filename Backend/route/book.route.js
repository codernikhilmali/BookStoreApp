import express from "express";
import { getBook, getFreeBooks } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);//route for get all books 
router.get("/free", getFreeBooks); //  route to get free books

export default router;
