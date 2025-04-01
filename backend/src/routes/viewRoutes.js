import { Router } from 'express'
import { } from './validationRules.js'
import { handleValidationError } from './errorMiddleware.js'
import { heroViewValidationRules } from './validationViewRules.js'
import viewController from '../controller/viewController.js'

// instanciar un router nuevo para las vistas
const viewRouter = Router()

viewRouter.get('/heroes/mayores-30', viewController.getMayores30) // --> GET
viewRouter.get('/heroes/agregar', viewController.renderFormCreate) // --> POST
viewRouter.post('/heroes/agregar', heroViewValidationRules(), handleValidationError, viewController.createHeroe) // --> POST
viewRouter.get('/heroes', viewController.getAllHeroes) // --> GET
viewRouter.delete('/heroes/:id', viewController.deleteHeroe) // --> DELETE
viewRouter.get('/heroes/:id', viewController.getHeroeById) // --> GET
viewRouter.get('/heroes/:id/editar', viewController.getForm) // --> GET FORMULARIO
viewRouter.post('/heroes/:id/editar', heroViewValidationRules(), handleValidationError, viewController.updateHeroe); // --> UPDATE

// exportar el router para las vistas
export default viewRouter