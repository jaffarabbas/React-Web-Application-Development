import Data from "./controller.js";
import express from "express";

const router = express.Router();

router.get("/", Data.get);

export default router;