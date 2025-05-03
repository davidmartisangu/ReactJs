import { Router } from "express";
import { body,param } from "express-validator";
import { createProduct, deleteProduct, getProduct, getProductById, updateAvailability, updateProduct } from "./handlers/product";
import { handleInputErrors } from "./middleware";

const router = Router()

/**
 * @swagger
 * components:
 *      schemas:
 *          Product:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The Product ID
 *                      example: 1
 *                  name:
 *                      type: string
 *                      description: The Product name
 *                      example: Monitor Curvo de 49 Pulgadas
 *                  price:
 *                      type: integer
 *                      description: The Product price
 *                      example: 300
 *                  availability:
 *                      type: boolean
 *                      description: The Product availability
 *                      example: true
 */

/**
 * @swagger
 * /api/products:
 *      get:
 *          summary: Get a list of products
 *          tags:
 *              - Products
 *          description: Return a list of products
 *          responses:
 *              200:
 *                  description: Successful response
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product'
 * 
 */
router.get("/", getProduct)

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *      summary: Get the produc by ID
 *      tags:
 *          - Products
 *      description: Return a product based on its unique ID
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *          type: integer
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Product"
 *                              
 *          404:
 *              description: Not found
 *          400:
 *              description: Bad Request - Invalid ID
 * 
 */

router.get("/:id", 
    //VALIDACIÓN DATOS
    param("id").isInt().withMessage("ID no valido"),
    handleInputErrors,
    getProductById)

/**
 * @swagger
 * /api/products/:
 *  post:
 *      summary: Creates a new product
 *      tags:
 *          - Products
 *      description: Returns a new record in the database
 *      requestBody:
 *          requirede: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: "Monitor curvo de 49 pulgadas"
 *                          price:
 *                              type: number
 *                              example: 399
 *      responses:
 *          201:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Product"
 *          400:
 *              description: Bad Request - Invalid input data 
 */             

router.post("/", 
    //VALIDACIÓN DATOS
    body("name")
        .notEmpty().withMessage("El nombre del producto no puede ir vacio"),

    body("price")
        .isNumeric().withMessage("Valor no valido")
        .notEmpty().withMessage("El precio del producto no puede ir vacio")
        .custom(value=> value>0).withMessage("Precio ha de ser mayor a 0"),
    handleInputErrors,
    createProduct)
/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *      summary: Update a product with user input
 *      tags:
 *          - Products
 *      description: Returns the update product
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *          type: integer
 *      requestBody:
 *          requirede: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: "Monitor curvo de 49 pulgadas"
 *                          price:
 *                              type: number
 *                              example: 399
 *                          availability:
 *                              type: boolean
 *                              example: true
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Product"
 *          400:
 *              description: Bad Request - Invalid ID or Invalid input data
 *          404:
 *              description: Product Not Found
 */
router.put("/:id",
    //VALIDACIÓN DATOS
    param("id").isInt().withMessage("ID no valido"),
    body("name")
        .notEmpty().withMessage("El nombre del producto no puede ir vacio"),
    body("price")
        .isNumeric().withMessage("Valor no valido")
        .notEmpty().withMessage("El precio del producto no puede ir vacio")
        .custom(value=> value>0).withMessage("Precio ha de ser mayor a 0"),
    body("availability")
        .isBoolean().withMessage("valor para disponibilidad no valido"),
    handleInputErrors,
    updateProduct)
/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *      summary: Update the availability of a product
 *      tags:
 *          - Products
 *      description: Returns the update availability
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *          type: integer
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/Product"
 *          400:
 *              description: Bad Request - Invalid ID or Invalid input data
 *          404:
 *              description: Product Not Found
 * 
 */
router.patch("/:id",
    param("id").isInt().withMessage("ID no valido"),
    handleInputErrors,
    updateAvailability)
/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *      summary: Deletes a product by the ID
 *      tags:
 *          - Products
 *      description: Returns a confirmation message
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to delete
 *          required: true
 *          schema:
 *          type: integer
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          value: "Producto eliminado"
 *          400:
 *              description: Bad Request - Invalid ID or Invalid input data
 *          404:
 *              description: Product Not Found
 * 
 */
router.delete("/:id",
    param("id").isInt().withMessage("ID no valido"),
    handleInputErrors,
    deleteProduct
)

export default router
