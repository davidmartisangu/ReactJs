import express from "express"
import router from "./router"
import db from "./config/db"
import colors from "colors"
import cors, { CorsOptions } from "cors"
import morgan from "morgan"
import swaggerUi from "swagger-ui-express"
import swaggerSpec,{swaggerUiOptions} from "./config/swagger"

//Conectar a base de datos
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.blue("Conexión exitosa a la BD"))
    } catch (error) {
        // console.log(error)
        console.log(colors.red("Error conectando a la base de datos"))
    }
}

connectDB()

//Instancia de express
const server = express()

//Permitir conexiones
const corsOptions: CorsOptions = {
    origin: function(origin, callback){
        if(origin===process.env.FRONTEND_URL){
            callback(null, true)
        }else{
           callback(new Error("Error de CORS"))
        }
    }
}
server.use(cors(corsOptions))

// Servir archivos estáticos desde /public
server.use(express.static('public'))

//Leer datos de formulario
server.use(express.json())

server.use(morgan("dev"))

server.use("/api/products",router)

// server.use("/api",(req, res)=>{
//     res.json({msg:"Desde API"})
// })

//Dos
server.use("/docs",swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server