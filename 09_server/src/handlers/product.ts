import { Request, Response } from "express"
import Product from "../models/Product.model"


export const getProduct = async (req: Request, res:Response)=>{
    const products = await Product.findAll({
        order:[
            ["price","DESC"]
        ]
    })
    res.json({data: products})
}

export const getProductById = async (req: Request, res:Response)=>{
    const {id} = req.params
    const product = await Product.findByPk(id)
    //comprobamos si existe el producto
    if(!product){
        return res.status(404).json({
            error: "Producto no encontrado"
        })
    }
    res.json({data: product})
}

export const createProduct = async (req: Request, res:Response)=>{
    //OPCION 1: usando new
    // const product = new Product(req.body)
    // const savedProduct = await product.save()

    //OPICIÓN 2: crea la instancia y guarda el producto en una linea
    const product = await Product.create(req.body)
    res.status(201).json({data: product})
}

export const updateProduct = async(req:Request, res:Response)=>{
    const {id}= req.params
    const product = await Product.findByPk(id)
    if(!product){
        return res.status(404).json({error:"Producto no encontrado"})
    }
    
    //Actualizamos y guardamos
    await product.update(req.body)
    await product.save()

    res.json({data:product})
}

export const updateAvailability = async (req:Request, res:Response)=>{
    const{id} = req.params
    const product = await Product.findByPk(id)
    if(!product){
        return res.status(404).json({error:"Producto no encontrado"})
    }
    //Actualizamos y guardamos
    // await product.update(req.body)
    product.availability = !product.dataValues.availability
    await product.save()

    res.json({data:product})
}

export const deleteProduct = async (req:Request, res:Response)=>{
    const {id} = req.params
    const product = await Product.findByPk(id)
    if (!product){
       return res.status(404).json({error:"Producto no encontrado"})
    }
    await product.destroy()
    res.json({data:"Producto elminado"})
}