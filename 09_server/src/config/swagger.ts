import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerOptions } from "swagger-ui-express";
// import {} from "../../public/img_dev.png"


const options: swaggerJSDoc.Options = {
    swaggerDefinition:{
        openapi: "3.0.2",
        tags:[
            {
                name:"Products",
                description:"API operations related to products"
            }
        ],
        info:{
            title:"RES API Node.js / Express / TypeScript",
            version:"1.0.0",
            description:"API Doc for Products"
        }
    },
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions: SwaggerOptions = {
    customCss : `
        .swagger-ui .topbar-wrapper .link {
            display: none !important;
        }
        .swagger-ui .topbar{
            background: url('/bg.jpg') no-repeat center center;
            background-size: cover;
            height: 160px;
        }
    `,
    customSiteTitle: "Documentación REST API Express / TypeScript"
}

export default swaggerSpec
export {swaggerUiOptions}