import validationMiddlewareWrapper from '../validationMiddlewareWrapper'

import createCustomerValidation from './createCustomerValidation'
import updateCustomerValidation from './updateCustomerValidation'

export const createCustomerValidationMiddleware = validationMiddlewareWrapper(
    createCustomerValidation,
)

export const updateCustomerValidationMiddleware = validationMiddlewareWrapper(
    updateCustomerValidation,
)
