# React + TypeScript + Redux Toolkit

Este es un proyecto desarrollado con React, TypeScript, y Redux Toolkit que permite gestionar usuarios mediante una tabla interactiva. Los usuarios se pueden listar, crear, actualizar y eliminar. Este proyecto está diseñado como una herramienta de aprendizaje y gestión básica de datos con un enfoque en las mejores prácticas de desarrollo web.

## Características

Listado de usuarios: Muestra una tabla interactiva con la lista de usuarios.

Agregar usuario: Formulario para crear un nuevo usuario, con generación automática de ID consecutivo.

Editar usuario: Permite modificar la información de un usuario existente.

Eliminar usuario: Elimina un usuario de la lista.

Persistencia de estado: Gestión del estado global mediante Redux Toolkit.

## Tecnologías utilizadas

React: Biblioteca para construir la interfaz de usuario.

TypeScript: Superset de JavaScript que añade tipado estático.

Redux Toolkit: Herramienta para la gestión global del estado.

Vite: Herramienta rápida para el desarrollo y construcción del proyecto.

## Requisitos previos

Asegúrate de tener instalados los siguientes programas:

Node.js: Descargar Node.js

npm o yarn: Gestor de paquetes para instalar las dependencias.

## Instalación y ejecución

1. Clona este repositorio:

git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

2. Instala las dependencias:

Usando npm:

npm install

O usando yarn:

yarn install

3. Inicia el proyecto:

Usando npm:

npm run dev

O usando yarn:

yarn dev

4. Abre el navegador:

Ve a http://localhost:5173 para ver la aplicación.

## Estructura del proyecto

src/
├── components/        # Componentes reutilizables (tabla, formularios, etc.)
├── features/          # Redux slices y lógica de estado
├── hooks/             # Custom hooks
├── pages/             # Páginas principales de la aplicación
├── App.tsx            # Punto de entrada principal
└── main.tsx           # Archivo principal de arranque


## Contribución

¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto, realiza un fork del repositorio, crea una rama con tus cambios y abre un pull request.

## Licencia

Este proyecto está licenciado bajo la MIT License.