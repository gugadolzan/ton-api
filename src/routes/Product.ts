import { Router } from "express";

import { getAll, getById } from "../controllers/Product";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);

export default router;
