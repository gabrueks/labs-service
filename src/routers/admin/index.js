import { Router } from 'express'

import {
    adminLoginController,
    adminCreateController,
} from '~/controllers/admin'

import {
    adminLoginValidationMiddleware,
    adminCreateValidationMiddleware,
} from '~/validations/admin'

import authMiddleware from '~/middlewares/authMiddleware'

const router = Router()

router.post('/login', adminLoginValidationMiddleware, adminLoginController)
router.post(
    '/',
    authMiddleware,
    adminCreateValidationMiddleware,
    adminCreateController,
)

export default router
