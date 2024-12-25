import express from "express"
import { fetch , create_hebdo , update_hebdo , delete_hebdo , getHebdoById } from "../controller/hebdoController.js"

const route = express.Router()

route.post("/create_hebdo" ,  create_hebdo);
route.get("/getAllHebdo" , fetch)
route.put("/update_hebdo/:id" , update_hebdo);
route.delete("/delete_hebdo/:id" , delete_hebdo);
route.get("/getHebdoById/:id" , getHebdoById)

export default route;