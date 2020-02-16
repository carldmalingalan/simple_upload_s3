import { Router } from "express";
import { upload } from "../controllers/File";

const router = Router();

router.post("/upload", upload);

export default router;
