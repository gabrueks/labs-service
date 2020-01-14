import validationMiddlewareWrapper from '~/validations/validationMiddlewareWrapper'

import addFavoriteProductValidation from './addFavoriteProductValidation'

export const addFavoriteProductValidationMiddleware = validationMiddlewareWrapper(
    addFavoriteProductValidation,
)

export const notDefault = {}
