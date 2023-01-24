import express from "express"
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

/* router.get("/checkAuthentication", verifyToken, (req,res,next) => {
    res.send("Hello user, you are loggedd in!")
})

router.get("/checkUser/:id", verifyUser, (req,res,next) => {
    res.send("Hello user, you are loggedd in and you can Edit your Account!")
})

router.get("/checkAdmin/:id", verifyAdmin, (req,res,next) => {
    res.send("Hello user, you are loggedd in and you can Edit all Accounts!")
}) */

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUser);
//GETALL
router.get("/", verifyAdmin, getUsers);

export default router