import { body, validationResult } from 'express-validator'

export const heroValidationRules = () => [
  // --> nombreSuperHeroe
  body('nombreSuperHeroe')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({ min: 3, max: 60 }).withMessage('Debe tener de 3 a 60 caracteres')
    .trim(),

  // --> nombreReal
  body('nombreReal')
    .notEmpty().withMessage('El nombre real es obligatorio')
    .isLength({ min: 3, max: 60 }).withMessage('Debe tener de 3 a 60 caracteres')
    .trim(),

  // --> edad
  body('edad')
    .notEmpty().withMessage('La edad es obligatoria')
    .isNumeric().withMessage('El valor debe ser un número')
    .isInt({ min: 1 }).withMessage('Debe ser un número mayor o igual a 0'),

  // --> planetaOrigen
  body('planetaOrigen')
    .notEmpty().withMessage('El planeta de origen es obligatorio')
    .isLength({ min: 3, max: 60 }).withMessage('Debe tener de 3 a 60 caracteres')
    .trim(),

  // --> creador
  body('creador')
    .notEmpty().withMessage('El planeta de origen es obligatorio')
    .isLength({ min: 3, max: 60 }).withMessage('Debe tener de 3 a 60 caracteres')
    .trim(),

  // --> poderes
  body('poderes')
    .isArray({ min: 1 }).withMessage('Poderes debe ser un array con al menos un elemento')
    .custom((value) => {
      value.forEach((element) => {
        if (typeof element !== 'string') {
          throw new Error('Cada elemento del array debe ser un string')
        }
        if (element.trim().length === 0) {
          throw new Error('Los elementos del array no pueden estar vacíos')
        }
        if (element.trim().length < 3 || element.trim().length > 60) {
          throw new Error('Cada elemento debe tener entre 3 y 60 caracteres')
        }
      })
      return true
    }),

  // --> enemigos
  body('enemigos')
    .isArray({ min: 1 }).withMessage('Enemigos debe ser un array con al menos un elemento')
    .custom((value) => {
      value.forEach((element) => {
        if (typeof element !== 'string') {
          throw new Error('Cada elemento del array debe ser un string')
        }
        if (element.trim().length === 0) {
          throw new Error('Los elementos del array no pueden estar vacíos')
        }
        if (element.trim().length < 3 || element.trim().length > 60) {
          throw new Error('Cada elemento debe tener entre 3 y 60 caracteres')
        }
      })
      return true
    }),

  // --> aliados
  body('aliados')
    .isArray({ min: 1 }).withMessage('Aliados debe ser un array con al menos un elemento')
    .custom((value) => {
      value.forEach((element) => {
        if (typeof element !== 'string') {
          throw new Error('Cada elemento del array debe ser un string')
        }
        if (element.trim().length === 0) {
          throw new Error('Los elementos del array no pueden estar vacíos')
        }
        if (element.trim().length < 3 || element.trim().length > 60) {
          throw new Error('Cada elemento debe tener entre 3 y 60 caracteres')
        }
      })
      return true
    }),
]

