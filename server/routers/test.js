import  express  from "express";
import { getAuth } from "../controllers/test.js";

const router =  express.Router();

router.get('/',getAuth);

export default router;