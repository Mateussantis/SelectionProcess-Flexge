import { Router } from "express";

import { ConsultStudentController } from "../../../modules/students/useCases/consultStudent/ConsultStudentController";
import { PaginateStudentsController } from "../../../modules/students/useCases/paginateStudents/PaginateStudentsController";
import { CountPagesController } from "../../../modules/students/useCases/countPages/CountPagesController";
import { ensureAuthenticated } from "../http/middlewares/ensureAuthenticated";

const filtersRoutes = Router();

const consultStudentsController = new ConsultStudentController();
const paginateStudentsController = new PaginateStudentsController();
const countPagesController = new CountPagesController();

filtersRoutes.use(ensureAuthenticated);

filtersRoutes.get('/:name', consultStudentsController.handle);
filtersRoutes.get('/', paginateStudentsController.handle);
filtersRoutes.get('/', countPagesController.handle);

export { filtersRoutes };
