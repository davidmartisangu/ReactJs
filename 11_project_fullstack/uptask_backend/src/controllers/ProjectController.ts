import type { Request, Response } from "express"
import Project from "../models/Project"
import Task from "../models/Tasks"

export class ProjectController{

    static createProject = async(req: Request, res: Response)=>{
        const project = new Project(req.body)
        try {
            await project.save()
            res.send("Proyecto creado correctamente")
        } catch (error) {
            console.log(error)
        }
    }

    static getAllProjects = async(req: Request, res: Response)=>{
        try {
            const projects = await Project.find({})
            res.json(projects)
        } catch (error) {
            console.log(error)   
        }
    }

    static getProjectById = async(req: Request, res: Response): Promise<void>=>{
        const {id} = req.params // Extrae solo el id como string
        try {
            const project = await Project.findById(id).populate("tasks")
            if(!project){
                const error = new Error("Proyecto no encontrado");
                res.status(404).json({ error: error.message });
                return;
            }
            res.json(project)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Server Error' }); // Asegurarse de manejar el error con un mensaje
        }
    }

    static updateProjetById = async(req:Request, res:Response )=>{
        const {id} = req.params
        try {
            const project = await Project.findById(id, req.body)
            if(!project){
                const error = new Error("Proyecto no encontrado");
                res.status(404).json({ error: error.message });
                return;
            }
            project.clientName = req.body.clientName
            project.description = req.body.description
            project.projectName = req.body.projectName
            
            await project.save()
            res.send("Proyecto acutalizado")
        } catch (error) {
            console.log(error)
        }
    }

    static deleteProjectById = async(req:Request, res:Response)=>{
        const {id}= req.params
        try {
            const project = await Project.findById(id)
            if(!project){
                const error = new Error("Proyecto no encontrado")
                res.status(404).json({error: error.message})
                return
            }
            await project.deleteOne()
            res.send("Proyecto eliminado")
        } catch (error) {
            console.log(error)
        }
    }
}