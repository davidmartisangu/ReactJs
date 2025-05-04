# 📦 PROYECTO - Full Stack React con PERN - Administrador de Productos y REST API

Este es un proyecto **Full Stack** desarrollado con el stack **PERN** (PostgreSQL, Express, React y Node.js). Permite administrar productos mediante una REST API conectada a una base de datos PostgreSQL, y un frontend interactivo construido con React.

🌐 Despliegue
URL: https://frontend-rest-apis-typescript.vercel.app/
---

## 🚀 Tecnologías utilizadas

### Backend (REST API)
- Node.js
- Express
- TypeScript
- PostgreSQL
- Prisma
- Dotenv
- ts-node / Nodemon

### Frontend
- React
- React Router DOM
- TypeScript
- Tailwind CSS

---

## ⚙️ Funcionalidades

- Visualización de productos con disponibilidad.
- Creación, edición y eliminación de productos.
- Cambio de disponibilidad desde el listado.
- Validaciones de formulario.
- Navegación SPA con React Router.
- Comunicación eficiente con el backend vía `fetch` y `Form`.

---

## 📁 Estructura del proyecto


📦 root
├── client        # Frontend en React
│   └── src
│       └── components/
│       └── views/
│       └── services/
│       └── types/
├── server        # Backend con Express y PostgreSQL
│   └── src
│       └── controllers/
│       └── routes/
│       └── prisma/
│       └── db.ts
├── .env
└── README.md

---

## 🛠️ Instalación y ejecución local

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```
2. Instala las dependencias:

Frontend
```bash
cd client
npm install
```
Backend
```bash
cd ../server
npm install
```
3. Configura las variables de entorno en un archivo .env dentro de la carpeta server:
```bash
DATABASE_URL=postgresql://usuario:contraseña@host:puerto/basededatos?ssl=true
FRONTEND_URL=http://localhost:5173
```
4. Ejecuta ambos servidores en paralelo (en terminales separadas):
Backend
```bash
cd server
npm run dev
```
Frontend
```bash
cd client
npm run dev
```
5. Abre http://localhost:5173 en tu navegador.

## ✅ Estado del Proyecto
- ✔️ Proyecto completo y funcional
- ✔️ Backend conectado a base de datos PostgreSQL real
- ✔️ Frontend interactivo y responsive
- ✔️ Desplegado en servicios gratuitos (Vercel + Render)

## 📄 Licencia
Este proyecto está bajo la licencia MIT.
¡Siéntete libre de usarlo, modificarlo y aprender de él!