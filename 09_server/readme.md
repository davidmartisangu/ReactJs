# 🛒 Products API – Technical Overview

## 1. API Type
This is a **REST API** for managing store products.

## 2. Tech Stack
- **Language**: TypeScript  
- **Backend Framework**: Express.js  
- **Database**: PostgreSQL  
- **ORM**: Sequelize (with `sequelize-typescript`)

## 3. Database Configuration
```ts
// config/db.ts
import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv"
dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL, {
    models: [__dirname + "/../models/**/*"],
    logging: false
})

export default db;
```

## 4. API Endpoints (Express Router)

```ts
// router.ts
import { Router } from "express";
import { body, param } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProductById,
  updateAvailability,
  updateProduct
} from "./handlers/product";
import { handleInputErrors } from "./middleware";

const router = Router();

router.get("/", getProduct);

router.get("/:id",
  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  getProductById
);

router.post("/",
  body("name").notEmpty().withMessage("Product name is required"),
  body("price")
    .isNumeric().withMessage("Invalid price")
    .notEmpty().withMessage("Product price is required")
    .custom(value => value > 0).withMessage("Price must be greater than 0"),
  handleInputErrors,
  createProduct
);

router.put("/:id",
  param("id").isInt().withMessage("Invalid ID"),
  body("name").notEmpty().withMessage("Product name is required"),
  body("price")
    .isNumeric().withMessage("Invalid price")
    .notEmpty().withMessage("Product price is required")
    .custom(value => value > 0).withMessage("Price must be greater than 0"),
  body("availability").isBoolean().withMessage("Invalid availability value"),
  handleInputErrors,
  updateProduct
);

router.patch("/:id",
  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  updateAvailability
);

router.delete("/:id",
  param("id").isInt().withMessage("Invalid ID"),
  handleInputErrors,
  deleteProduct
);

export default router;
```

## 5. Swagger Documentation
- All endpoints are documented using **Swagger/OpenAPI** annotations.
- Example of schema:
```yaml
components:
  schemas:
    Product:
      type: object
      properties:
        id:
          type: integer
          example: 1
        name:
          type: string
          example: "49-inch Curved Monitor"
        price:
          type: integer
          example: 300
        availability:
          type: boolean
          example: true
```

## 6. PostgreSQL Connection
You mentioned that your previous **Render** PostgreSQL database connection expired.

## 7. Testing
You are using **Jest** for unit testing.
