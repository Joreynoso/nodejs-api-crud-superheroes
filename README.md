# API + CRUD con Express y MongoDB

Este proyecto es una API con funcionalidades CRUD desarrollada con Express y MongoDB, utilizando EJS como motor de plantillas y Tailwind CSS para los estilos.

## 🚀 Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB con Mongoose
- EJS (Motor de plantillas)
- Tailwind CSS
- Express Validator
- CORS
- Method Override

## 📦 Dependencias

```json
{
  "@types/method-override": "3.0.0",
  "cors": "2.8.5",
  "ejs": "3.1.10",
  "express": "4.21.2",
  "express-validator": "7.2.1",
  "method-override": "3.0.0",
  "mongoose": "8.12.1"
}
```

## 🚀 Instalación y Uso

```sh
cd backend
npm start
```

El servidor se ejecutará en `http://localhost:3000/`.

## 📌 Endpoints de la API

| Método | Endpoint | Descripción |
|--------|---------|-------------|
| GET | `/api/heroes` | Obtener todos los héroes |
| GET | `/api/heroes/:id` | Obtener héroe por ID |
| GET | `/api/heroes/mayores-30` | Obtener héroes mayores de 30 años |
| GET | `/api/heroes/buscar/:atributo/:valor` | Buscar héroes por atributo y valor |
| POST | `/api/heroes` | Crear un nuevo héroe |
| PUT | `/api/heroes/:id` | Actualizar un héroe |
| DELETE | `/api/heroes/:id` | Eliminar un héroe |

## 🎨 Interfaz CRUD
Para visualizar la interfaz del CRUD, accede a:
```
http://localhost:3000/heroes
```

---

📌 **Nota:** Asegúrate de tener MongoDB en ejecución antes de iniciar el servidor.
