import { Router } from "express";
import { ProjectController } from "../controllers/ProjectController";
import { body, param } from "express-validator";
import { handleInputError } from "../middleware/validation";
import { TaskController } from "../controllers/TaskController";
import { projectExists } from "../middleware/project";
import { taskBelongsToProject, taskExists } from "../middleware/task";

const router = Router()

router.post("/",
    body("projectName").notEmpty().withMessage("El nombre del proyecto es obligatorio"),
    body("clientName").notEmpty().withMessage("El nombre del cliente es obligatorio"),
    body("description").notEmpty().withMessage("La descripción del proyecto es obligatoria"),
    handleInputError,
    ProjectController.createProject)

router.get("/",ProjectController.getAllProjects)

router.get("/:id",
    param("id").isMongoId().withMessage("ID no válido"),
    handleInputError,
    ProjectController.getProjectById)

router.put("/:id",
    body("projectName").notEmpty().withMessage("El nombre del proyecto es obligatorio"),
    body("clientName").notEmpty().withMessage("El nombre del cliente es obligatorio"),
    body("description").notEmpty().withMessage("La descripción del proyecto es obligatoria"),
    handleInputError,
    param("id").isMongoId().withMessage("ID no válido"),
    handleInputError,
    ProjectController.updateProjetById)

router.delete("/:id",
    param("id").isMongoId().withMessage("ID no valido"),
    handleInputError,
    ProjectController.deleteProjectById
)

// Routes for tasks
router.param("projectId", projectExists)
router.param("taskId", taskExists)
router.param("taskId", taskBelongsToProject)

router.post("/:projectId/tasks",
    body("name").notEmpty().withMessage("El nombre de la tarea es obligatoria"),
    body("description").notEmpty().withMessage("La descripción de la tarea es obligatoria"),
    handleInputError,
    TaskController.createTask
)

router.get("/:projectId/tasks",
    TaskController.getProjectTasks
)

router.get("/:projectId/tasks/:taskId",
    param("taskId").isMongoId().withMessage("ID no válido"),
    handleInputError,
    TaskController.getTaskById
)

router.put("/:projectId/tasks/:taskId",
    param("taskId").isMongoId().withMessage("ID no valido"),
    body("name").notEmpty().withMessage("El nombre de la tarera es obligatoria"),
    body("description").notEmpty().withMessage("La descripción de la tarea es obligatoria"),
    handleInputError,
    TaskController.updateTask
)

router.delete("/:projectId/tasks/:taskId",
    param("taskId").isMongoId().withMessage("ID no valido"),
    handleInputError,
    TaskController.deleteTask
)

router.post("/:projectId/tasks/:taskId/status",
    param("taskId").isMongoId().withMessage("ID no valido"),
    body("status").notEmpty().withMessage("El status de la tarera es obligatoria"),
    handleInputError,
    TaskController.updateStatus
)

export default router