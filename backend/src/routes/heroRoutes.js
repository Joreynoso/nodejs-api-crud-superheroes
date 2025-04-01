import express from 'express'
import heroController from '../controller/heroController.js'
import { heroValidationRules } from './validationRules.js'
import { handleValidationError } from './errorMiddleware.js'

// instanciar Router
const heroRouter = express.Router()

// rutas
heroRouter.get('/heroes', heroController.getAllHeros) // --> GET
heroRouter.post(
  '/heroes',
  heroValidationRules(),
  handleValidationError,
  heroController.createHero
) // --> POST
heroRouter.get('/heroes/mayores-30', heroController.getHeros30) //  --> GET
heroRouter.get(
  '/heroes/buscar/:atributo/:valor',
  heroController.getHeroByAttribute
) // --> GET
heroRouter.get('/heroes/:id', heroController.getHeroById) // --> GET
heroRouter.put('/heroes/:id', heroController.updateHero) // --> PUT
heroRouter.delete('/heroes/:id', heroController.deleteHero) // --> DELETE
heroRouter.delete('/heroes/name/:name', heroController.deleteHeroByName) // --> DELETE



// exportar heroRouter
export default heroRouter
