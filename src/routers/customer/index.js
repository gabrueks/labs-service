import { Router } from 'express'

import {
    createCustomerController,
    updateCustomerController,
    deleteCustomerController,
    retrieveCustomerController,
} from '~/controllers/customer'

import {
    createCustomerValidationMiddleware,
    updateCustomerValidationMiddleware,
} from '~/validations/customer'
import validateUUIDMiddleware from '~/validations/validateUUIDMiddleware'
import authMiddleware from '~/middlewares/authMiddleware'

import extendProductRouter from './product/index'

const router = Router()

router.use(authMiddleware)

router.post(
    '/',
    authMiddleware,
    createCustomerValidationMiddleware,
    createCustomerController,
)
router.get('/:customerID', authMiddleware, validateUUIDMiddleware(), retrieveCustomerController)
router.delete('/:customerID', authMiddleware, validateUUIDMiddleware(), deleteCustomerController)
router.put(
    '/:customerID',
    authMiddleware,
    validateUUIDMiddleware(),
    updateCustomerValidationMiddleware,
    updateCustomerController,
)

extendProductRouter(router)

export default router
