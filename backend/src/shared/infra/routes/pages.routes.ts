import { Router } from "express";

import { CountPagesController } from "../../../modules/students/useCases/countPages/CountPagesController";
import { ensureAuthenticated } from "../http/middlewares/ensureAuthenticated";

const pagesRoutes = Router();

const countPagesController = new CountPagesController();

pagesRoutes.use(ensureAuthenticated);

pagesRoutes.get('/', countPagesController.handle);

export { pagesRoutes };
