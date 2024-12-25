import express from "express"
import { fetch , create_prof ,update_prof , delete_prof , getProfById } from "../controller/profController.js"

const route = express.Router()

route.post("/create_prof" , create_prof);
route.get("/getAllProfs" , fetch)
route.put("/update_prof/:id" , update_prof);
route.delete("/delete_prof/:id" , delete_prof);
route.get("/getProfById/:id" , getProfById)
export default route;