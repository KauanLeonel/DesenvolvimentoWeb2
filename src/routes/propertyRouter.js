import express from "express"
import getPropertyController from "../controllers/property/getPropertyController.js"
import createPropertyController from "../controllers/property/createPropertyController.js"
import putPropertyController from "../controllers/property/uptadePropertyController.js"
import deletePropertyController from "../controllers/property/deletePropertyController.js"
import patchPropertyController from "../controllers/property/changeTypePropertyController.js"
const router = express.Router()

router.get("/list", getPropertyController)

router.get("/:id", () => {})

router.post("/", createPropertyController)

router.put("/:id", putPropertyController)

router.delete('/:id', deletePropertyController)


const obj = ["name", "email", "id", "avatar"]
for (let i = 0; i < obj.length; i++){
router.patch(`/${obj[i]}`, patchPropertyController)}

export default router