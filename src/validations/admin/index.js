import validationMiddlewareWrapper from '~/validations/validationMiddlewareWrapper'

import adminCreateValidation from './adminCreateValidation'
import adminLoginValidation from './adminLoginValidation'

export const adminLoginValidationMiddleware = validationMiddlewareWrapper(
    adminLoginValidation,
)

export const adminCreateValidationMiddleware = validationMiddlewareWrapper(
    adminCreateValidation,
)
