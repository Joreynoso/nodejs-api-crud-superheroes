import { validationResult } from 'express-validator';

export const handleValidationError = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'error',
      message: 'validation failed',
      errors: errors
        .array()
        .map((error) => ({ field: error.path, message: error.msg })),
    })
  }

  next()
}

