import { Router } from "express";

import { CreateStudentController } from '../../../modules/students/useCases/createStudent/CreateStudentController';
import { DeleteStudentController } from "../../../modules/students/useCases/deleteStudent/DeleteStudentController";
import { ListAllStudentsController } from "../../../modules/students/useCases/listAllStudents/ListAllStudentsController";
import { UpdateStudentController } from "../../../modules/students/useCases/updateStudent/UpdateStudentController";
import { ensureAuthenticated } from "../http/middlewares/ensureAuthenticated";

const createStudentController = new CreateStudentController();
const listAllStudentsController = new ListAllStudentsController();
const deleteStudentController = new DeleteStudentController();
const updateStudentController = new UpdateStudentController();

const studentsRoutes = Router();

studentsRoutes.use(ensureAuthenticated);

studentsRoutes.post('/', createStudentController.handle);
studentsRoutes.get('/', listAllStudentsController.handle);
studentsRoutes.delete('/:_id', deleteStudentController.handle);
studentsRoutes.patch('/:_id', updateStudentController.handle);

export { studentsRoutes };
