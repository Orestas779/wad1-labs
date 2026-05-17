import express from "express";
import { getAppInfo } from "../models/employee.js";

const router = express.Router();

router.get("/", (req, res) => {
  const employee = getAppInfo();
  res.render("about", { employee });
});

export default router;
