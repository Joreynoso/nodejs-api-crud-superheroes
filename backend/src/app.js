import express from 'express';
import connectDB from './config/configDb.js';
import path from 'path';
import { fileURLToPath } from 'url';
import heroRouter from './routes/heroRoutes.js';
import loggerMiddleware from './middlewares/loggerMiddleware.js';
import viewRouter from './routes/viewRoutes.js';
import methodOverride from 'method-override';

// Obtener la ruta actual del archivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directorios para vistas y archivos estáticos
const pathComplete = path.join(__dirname, 'views');
const pathView = path.join(__dirname, 'public');

// Instanciar express
const app = express();
const port = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Middleware para sobrescribir el método HTTP (para usar PUT/DELETE en formularios)
app.use(methodOverride('_method')); // Este debe estar antes de las rutas

// Middleware para parsear el cuerpo de la solicitud
app.use(express.urlencoded({ extended: true }));

// Middleware global
app.use(express.json());
app.use(loggerMiddleware);

// Configurar vistas (EJS)
app.set('view engine', 'ejs');
app.set('views', pathComplete);

// Servir archivos estáticos
app.use(express.static(pathView));

// Ruta para las API
app.use('/api', heroRouter);

// Ruta para las VISTAS
app.use(viewRouter);

// Middleware para detectar rutas no encontradas
viewRouter.use((req, res) => {
  res.status(404).json({ message: 'error 404, ruta no valida' });
});

app.get('/favicon.ico', (req, res) => res.status(204).end());

// Iniciar servidor
app.listen(port, () => {
  console.log(`Ruta para las vistas: http://localhost:${port}/heroes`);
  console.log(`Ruta para la API: http://localhost:${port}/api/heroes`);
});
