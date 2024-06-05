
import { Request, Response, Router } from "express";
import { UnitController } from "../controllers/unitController"

const router = Router()
const unitController = new UnitController()


router.get("/:unitId", async (req: Request, res: Response) => {
    return await unitController.getById(req, res)
})

router.put("/:unitId", async (req: Request, res: Response) => {
    return await unitController.updateById(req, res)
})

router.delete("/:unitId", async (req: Request, res: Response) => {
    return await unitController.deleteById(req, res)
})
export default router