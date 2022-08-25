import { Router } from "express";

import { studentsRoutes } from './students.routes';
import { filtersRoutes } from "./filters.routes";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { pagesRoutes } from "./pages.routes";

const router = Router();

router.use('/students', studentsRoutes);
router.use('/filters', filtersRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);
router.use('/pages', pagesRoutes);

export { router };
